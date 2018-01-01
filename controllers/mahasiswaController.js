const globalVariable = require("../global");

//Import Library yang diperlukan
var restClient = require('node-rest-client').Client;
var rClient = new restClient();
var Client = require('ftp');
var client = new Client();
var path = require('path');
var multer = require('multer');
var FTP = require('ftp');
var fs = require('fs');
var async = require('async');

var connectionProperties = {
    host: globalVariable.ftp_client.host,
    user: globalVariable.ftp_client.user,
    password: globalVariable.ftp_client.password
};



exports.dashboard = function(req, res) {
  var session = req.session;

  if(session.peran == null || session.peran != 4){//Bukan sebagai mahasiswa
    return res.redirect('/');
  }else{
    return res.render('anggota/mahasiswa/dashboard', { title: 'Dashboard', copyright: globalVariable.copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna });
  }

}

exports.pengaturan = function(req, res) {
    return res.render('anggota/mahasiswa/pengaturan/index', { title: 'Pengaturan', copyright: globalVariable.copyright })
}

exports.pengaturan_akademik = function(req, res) {

  var session = req.session

  if(session.peran == null || session.peran != 4){//Bukan sebagai mahasiswa
    return res.redirect('/')
  }else{
    return res.render('anggota/mahasiswa/pengaturan/akademik', { title: 'Pengaturan Akademik', copyright: globalVariable.copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna})
  }

}


exports.tambah_institusi_pendidikan = function(req, res) {

  var session = req.session

  var foto = req.file

  var ekstensiFile;

  if(foto == null){
    req.flash('pesan', 'Mohon pilih foto KTM Anda.');
    return res.redirect('/mahasiswa/pengaturan/akademik')
  }

  if(foto.mimetype == 'image/png'){
    ekstensiFile = '.png'
  } else if(foto.mimetype == 'image/jpeg'){
    ekstensiFile = '.jpg'
  }

  //Bila format bukan png atau jpeg maka ditolak untuk dilanjutkan
  if(foto.mimetype == 'image/png' || foto.mimetype == 'image/jpeg'){



    //Mencek apakah pengguna masuk sebagai sebagai mahasiswa
    if(session.peran == null || session.peran != 4){//Bukan sebagai mahasiswa
        return res.redirect('/')//Di arahkan ke route index
    }else{//Sebagai mahasiswa



      //Coba urai file nya
      console.log('REQ BODY:'+JSON.stringify(req.body))
      console.log('REQ FILE:'+JSON.stringify(req.file))

      async.series({
          one: function(callback) {
            client.connect(connectionProperties)
            callback(null, 1);
          },
          two: function(callback){
            //Proses upload ke FTP
             client.on('ready', function () {
                 console.log('ftp tersambung');
                 client.put(foto.path, '/PROJECT PPTIK/TADJ/'+foto.filename+ekstensiFile, function(err) {
                  if (err)
                  {
                    throw err;
                  }else{
                    console.log('UPLOAD BERHASIL')
                    //Hapus file yang ada dilokal direktori oleh multer
                    //Synchronous
                    // fs.unlinkSync(req.file.path);
                    // console.log('File berhasil dihapus.');
                    //Asynchronous
                    fs.unlink(req.file.path, function(err) {
                      if(err)
                        console.log('ERROR DELETE FILE:'+err)

                      console.log('File berhasil dihapus.');
                    });

                  }

                  //fs.closeSync()

                  client.end()
                });
             });


            callback(null, 2);
          },
          three: function(callback){


            console.log('EKSTENSI FILE:'+ekstensiFile)
            //Proses REST API
            args = {
              data: {
                      access_token: session.token,
                      pengguna: session.id_pengguna,
                      institusi: req.body.institusi,
                      jenjang: req.body.jenjang,
                      prodi: req.body.prodi,
                      nim: req.body.nim,
                      foto_ktm: 'http://filehosting.pptik.id/PROJECT%20PPTIK/TADJ/'+foto.filename+ekstensiFile
              },
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };

            rClient.post(globalVariable.general_url+'/mahasiswa/tambah_institusi_pendidikan', args, function (data, response) {

                if(data.success == true){
                    req.flash('pesan', JSON.stringify(data.data.message));
                    return res.redirect('/mahasiswa/pengaturan/akademik')
                }else if(data.success == false){
                    req.flash('pesan', JSON.stringify(data.data.message));
                    //req.flash('pesan', JSON.stringify(data));
                    return res.redirect('/mahasiswa/pengaturan/akademik')
                }else{
                  req.flash('pesan', 'Unknown issue.');
                  return res.redirect('/mahasiswa/pengaturan/akademik')
                }

            });



            callback(null, 3);
          }
      }, function(err, results) {
          // results is now equal to: {one: 1, two: 2}
      })


    }

  }else{
    req.flash('pesan', 'Ekstensi file yang diizinkan adalah .png atau .jpg atau .jpeg');
    return res.redirect('/dashboard')
  }

}


exports.pengaturan_profil = function(req, res) {
    return res.render('anggota/mahasiswa/pengaturan/profil', { title: 'Pengaturan Profil', copyright: globalVariable.copyright })
}

exports.pengaturan_profil_ubah = function(req, res) {
    return res.render('anggota/mahasiswa/pengaturan/profil_ubah', { title: 'Pengaturan Profil', copyright: globalVariable.copyright })
}

exports.kelompok = function(req, res) {

    var session = req.session

    if(session.peran == null || session.peran != 4){//Bukan sebagai mahasiswa
      return res.redirect('/')
    }else{
      return res.render('anggota/mahasiswa/kelompok/index', { title: 'Kelompok', copyright: globalVariable.copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna})
    }




}

exports.pilih_kelompok = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/pilih_kelompok', { title: 'Pilih Kelompok', copyright: globalVariable.copyright })
}

exports.tambah_kelompok = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/tambah', { title: 'Tambah Kelompok', copyright: globalVariable.copyright })
}

exports.kelompok_detail = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/detail', { title: 'Detail Kelompok', copyright: globalVariable.copyright })
}

exports.bimbingan = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/bimbingan', { title: 'Bimbingan', copyright: globalVariable.copyright })
}

exports.postervideo = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/postervideo', { title: 'Poster dan Video', copyright: globalVariable.copyright })
}

exports.ambil_judul = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/ambil_judul', { title: 'Ambil Judul Tugas Akhir', copyright: globalVariable.copyright })
}
