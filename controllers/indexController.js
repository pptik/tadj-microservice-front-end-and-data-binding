const copyright = "© 2017 Tugas Akhir Dalam Jaringan PPTIK Institut Teknologi Bandung"
var base_api_general_url = "http://localhost:3001"
var async = require('async')
var restClient = require('node-rest-client').Client
var rClient = new restClient()
// var rClient = new restClient({
//   proxy:{
//             host:"cache.itb.ac.id",
//             port: 8080,
//             user:"muhammadilhamfadillah",
//             password:"31826113"
//         }
// });

exports.index = function(req, res) {
    return res.render('index', { title: 'Tugas Akhir Dalam Jaringan', copyright: copyright })
}

exports.masuk = function(req, res) {

  args = {
  	data: { email: req.body.email,
            sandi: req.body.sandi
    },
  	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  };

  rClient.post(base_api_general_url+'/masuk', args, function (data, response) {

      if(data.success == true){

          //Tampung hasil kembalian
          var idPengguna = data.data.id_pengguna
          var username = data.data.username
          var peran = data.data.peran
          var token = data.data.access_token

          //Deklarasi session
          var sess = req.session
          sess.id_pengguna = idPengguna
          sess.username = username
          sess.peran = peran
          sess.token = token


          return res.redirect('/dashboard')
      }else{
          //req.flash('pesan', data.data.message);
          req.flash('pesan', data.data.message);
          return res.redirect('/')
      }
    });

}

exports.daftar = function(req, res) {
    return res.render('daftar/index', { title: 'Daftar', copyright: copyright })
}

exports.daftar_mahasiswa = function(req, res) {
    return res.render('daftar/mahasiswa', { title: 'Daftar Mahasiswa', copyright: copyright })
}

exports.daftar_dosen = function(req, res) {
    return res.render('daftar/dosen', { title: 'Daftar Dosen', copyright: copyright })
}

exports.daftar_mahasiswa_proses = function(req, res) {
    args = {
      data: {
        email: req.body.email,
        username: req.body.username,
        sandi: req.body.sandi
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    rClient.post(base_api_general_url+'/daftar/proses/mahasiswa', args, function (data, response) {

      if(data.success == true){

          //Tampung hasil kembalian
          var idPengguna = data.data.id_pengguna
          var username = data.data.username
          var peran = data.data.peran
          var token = data.data.access_token

          //Deklarasi session
          var sess = req.session
          sess.id_pengguna = idPengguna
          sess.username = username
          sess.peran = peran
          sess.token = token

          return res.redirect('/dashboard')
      }else{
          var pesan = ""

          //Prosedur pengembalian error
          async.series({
              one: function(callback) {
                for(var i=0;i<data.data.length;i++){
                  pesan += data.data[i].msg+", "
                }
                callback(null, 1);
              },
              two: function(callback){
                req.flash('pesan', pesan);
                return res.redirect('/daftar/mahasiswa')

                callback(null, 2);
              }
          }, function(err, results) {

          })

      }

  });

}

exports.daftar_dosen_proses = function(req, res) {
    args = {
      data: {
        email: req.body.email,
        username: req.body.username,
        sandi: req.body.sandi
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    rClient.post(base_api_general_url+'/daftar/proses/dosen', args, function (data, response) {

      if(data.success == true){

          //Tampung hasil kembalian
          var idPengguna = data.data.id_pengguna
          var username = data.data.username
          var peran = data.data.peran
          var token = data.data.access_token

          //Deklarasi session
          var sess = req.session
          sess.id_pengguna = idPengguna
          sess.username = username
          sess.peran = peran
          sess.token = token

          return res.redirect('/dashboard')
      }else{
          var pesan = ""

          //Prosedur pengembalian error
          async.series({
              one: function(callback) {
                for(var i=0;i<data.data.length;i++){
                  pesan += data.data[i].msg+", "
                }
                callback(null, 1);
              },
              two: function(callback){
                req.flash('pesan', pesan);
                return res.redirect('/daftar/dosen')

                callback(null, 2);
              }
          }, function(err, results) {

          })

      }

  });

}

exports.keluar = function(req, res) {
    var session = req.session

    args = {
    	data: { access_token: session.token
      },
    	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    rClient.post(base_api_general_url+'/keluar', args, function (data, response) {

        if(data.success == true){
            //Menghapus session
            req.session.destroy()
            return res.redirect('/')
        }else{
            req.flash('pesan', 'Gagal keluar');
            return res.redirect('/dashboard')
        }

      });

}

exports.tentang = function(req, res) {
    return res.render('tentang', { title: 'Tentang', copyright: copyright })
}

exports.lihat_judul = function(req, res) {
    return res.render('lihat_judul', { title: 'Lihat Judul TA', copyright: copyright })
}

exports.panduan = function(req, res) {
    return res.render('panduan', { title: 'Panduan', copyright: copyright })
}

exports.panduan_mahasiswa_1 = function (req, res) {
    return res.render('panduan/mahasiswa/1')
}

exports.panduan_mahasiswa_2 = function (req, res) {
    return res.render('panduan/mahasiswa/2')
}

exports.panduan_mahasiswa_3 = function (req, res) {
    return res.render('panduan/mahasiswa/3')
}

exports.panduan_mahasiswa_4 = function (req, res) {
    return res.render('panduan/mahasiswa/4')
}

exports.panduan_mahasiswa_5 = function (req, res) {
    return res.render('panduan/mahasiswa/5')
}

exports.panduan_dosen_1 = function (req, res) {
    return res.render('panduan/dosen/1')
}

exports.panduan_dosen_2 = function (req, res) {
    return res.render('panduan/dosen/2')
}

exports.panduan_dosen_3 = function (req, res) {
    return res.render('panduan/dosen/3')
}

exports.panduan_dosen_4 = function (req, res) {
    return res.render('panduan/dosen/4')
}

exports.panduan_dosen_5 = function (req, res) {
    return res.render('panduan/dosen/5')
}

exports.panduan_univ_1 = function (req, res) {
    return res.render('panduan/univ/1')
}

exports.panduan_univ_2 = function (req, res) {
    return res.render('panduan/univ/2')
}

exports.panduan_univ_3 = function (req, res) {
    return res.render('panduan/univ/3')
}

exports.panduan_univ_4 = function (req, res) {
    return res.render('panduan/univ/4')
}

exports.bagikan_kelompok = function (req, res) {
    return res.render('anggota/mahasiswa/kelompok/bagikan', { title: 'TA0000000', copyright: copyright })
}

exports.public_profil = function (req, res) {
    return res.render('public_profil', { title: 'Username', copyright: copyright })
}
