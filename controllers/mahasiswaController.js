const copyright = "© 2017 Tugas Akhir Dalam Jaringan PPTIK Institut Teknologi Bandung"

//Import Library yang diperlukan
var restClient = require('node-rest-client').Client;
var rClient = new restClient();
var Client = require('ftp')
var client = new Client()
var path = require('path')
var multer = require('multer')
var FTP = require('ftp')
var fs = require('fs')

var connectionProperties = {
    host: "",
    user: "",
    password: ""
};

exports.dashboard = function(req, res) {
  var session = req.session

  if(session.peran == null || session.peran != 4){//Bukan sebagai mahasiswa
    return res.redirect('/')
  }else{
    return res.render('anggota/mahasiswa/dashboard', { title: 'Dashboard', copyright: copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna })
  }

}

exports.pengaturan = function(req, res) {
    return res.render('anggota/mahasiswa/pengaturan/index', { title: 'Pengaturan', copyright: copyright })
}

exports.pengaturan_akademik = function(req, res) {

  var session = req.session

  if(session.peran == null || session.peran != 4){//Bukan sebagai mahasiswa
    return res.redirect('/')
  }else{
    return res.render('anggota/mahasiswa/pengaturan/akademik', { title: 'Pengaturan Akademik', copyright: copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna})
  }

}


exports.tambah_institusi_pendidikan = function(req, res) {

  var session = req.session

  if(session.peran == null || session.peran != 4){//Bukan sebagai mahasiswa
    return res.redirect('/')
  }else{

    return res.render('anggota/mahasiswa/pengaturan/akademik', { title: 'Pengaturan Akademik', copyright: copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna})
  }

}


exports.pengaturan_profil = function(req, res) {
    return res.render('anggota/mahasiswa/pengaturan/profil', { title: 'Pengaturan Profil', copyright: copyright })
}

exports.pengaturan_profil_ubah = function(req, res) {
    return res.render('anggota/mahasiswa/pengaturan/profil_ubah', { title: 'Pengaturan Profil', copyright: copyright })
}

exports.kelompok = function(req, res) {

    var session = req.session

    if(session.peran == null || session.peran != 4){//Bukan sebagai mahasiswa
      return res.redirect('/')
    }else{
      return res.render('anggota/mahasiswa/kelompok/index', { title: 'Kelompok', copyright: copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna})
    }




}

exports.pilih_kelompok = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/pilih_kelompok', { title: 'Pilih Kelompok', copyright: copyright })
}

exports.tambah_kelompok = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/tambah', { title: 'Tambah Kelompok', copyright: copyright })
}

exports.kelompok_detail = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/detail', { title: 'Detail Kelompok', copyright: copyright })
}

exports.bimbingan = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/bimbingan', { title: 'Bimbingan', copyright: copyright })
}

exports.postervideo = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/postervideo', { title: 'Poster dan Video', copyright: copyright })
}

exports.ambil_judul = function(req, res) {
    return res.render('anggota/mahasiswa/kelompok/ambil_judul', { title: 'Ambil Judul Tugas Akhir', copyright: copyright })
}
