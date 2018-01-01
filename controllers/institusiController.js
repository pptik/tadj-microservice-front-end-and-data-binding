const globalVariable = require("../global");

exports.dashboard = function(req, res) {
  var session = req.session

  if(session.peran == null || session.peran != 2){//Bukan sebagai institusi
    return res.redirect('/')
  }else{
    return res.render('anggota/institusi/dashboard', { title: 'Dashboard', copyright: globalVariable.copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna })
  }

}

exports.judul = function(req, res) {
    return res.render('anggota/institusi/judul/index', { title: 'Judul TA', copyright: globalVariable.copyright })
}

exports.judul_daftar = function(req, res) {
    return res.render('anggota/institusi/judul/daftar', { title: 'Daftar Judul TA', copyright: globalVariable.copyright })
}

exports.judul_pengajuan = function(req, res) {
    return res.render('anggota/institusi/judul/pengajuan', { title: 'Pengajuan Judul TA', copyright: globalVariable.copyright })
}

exports.pengaturan = function(req, res) {
    return res.render('anggota/institusi/pengaturan/index', { title: 'Pengaturan', copyright: globalVariable.copyright })
}

exports.pengaturan_akademik = function(req, res) {
    return res.render('anggota/institusi/pengaturan/akademik', { title: 'Pengaturan Akademik', copyright: globalVariable.copyright })
}

exports.pengaturan_profil = function(req, res) {
    return res.render('anggota/institusi/pengaturan/profil', { title: 'Pengaturan Profil', copyright: globalVariable.copyright })
}

exports.anggota = function(req, res) {

  var session = req.session

  if(session.peran == null || session.peran != 2){//Bukan sebagai institusi
    return res.redirect('/')
  }else{
    return res.render('anggota/institusi/anggota/index', { title: 'Anggota', copyright: globalVariable.copyright, access_token: session.token, username:session.username, id_pengguna:session.id_pengguna })
  }

}

exports.anggota_mahasiswa = function(req, res) {
  var session = req.session

  if(session.peran == null || session.peran != 2){//Bukan sebagai institusi
    return res.redirect('/')
  }else{
    return res.render('anggota/institusi/anggota/mahasiswa', { title: 'Anggota Mahasiswa', copyright: globalVariable.copyright , access_token: session.token, username:session.username, id_pengguna:session.id_pengguna})
  }

}

exports.anggota_dosen = function(req, res) {
  var session = req.session

  if(session.peran == null || session.peran != 2){//Bukan sebagai institusi
    return res.redirect('/')
  }else{
    return res.render('anggota/institusi/anggota/dosen', { title: 'Anggota Dosen', copyright: globalVariable.copyright , access_token: session.token, username:session.username, id_pengguna:session.id_pengguna})
  }
}

exports.kelompok = function(req, res) {
    return res.render('anggota/institusi/kelompok/index', { title: 'Kelompok', copyright: globalVariable.copyright })
}
