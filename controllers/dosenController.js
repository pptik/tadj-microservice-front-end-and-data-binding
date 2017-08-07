const copyright = "© 2017 Tugas Akhir Dalam Jaringan PPTIK Institut Teknologi Bandung"

exports.dashboard = function(req, res) {
    var session = req.session
    
    if(session.peran == null || session.peran != 3){//Bukan sebagai dosen
      return res.redirect('/')
    }else{
      return res.render('anggota/dosen/dashboard', { title: 'Dashboard', copyright: copyright })
    }
}

exports.pengaturan = function(req, res) {
    return res.render('anggota/dosen/pengaturan/index', { title: 'Pengaturan', copyright: copyright })
}

exports.pengaturan_akademik = function(req, res) {
    return res.render('anggota/dosen/pengaturan/akademik', { title: 'Pengaturan Akademik', copyright: copyright })
}

exports.pengaturan_profil = function(req, res) {
    return res.render('anggota/dosen/pengaturan/profil', { title: 'Pengaturan Profil', copyright: copyright })
}

exports.pengaturan_profil_ubah = function(req, res) {
    return res.render('anggota/dosen/pengaturan/profil_ubah', { title: 'Pengaturan Profil', copyright: copyright })
}

exports.judul = function(req, res) {
    return res.render('anggota/dosen/judul/index', { title: 'Judul TA', copyright: copyright })
}

exports.judul_pengajuan = function(req, res) {
    return res.render('anggota/dosen/judul/pengajuan', { title: 'Pengajuan Judul TA', copyright: copyright })
}

exports.judul_pengajuan_universitas = function(req, res) {
    return res.render('anggota/dosen/judul/pengajuan_universitas', { title: 'Pengajuan Judul TA', copyright: copyright })
}

exports.judul_daftar = function(req, res) {
    return res.render('anggota/dosen/judul/daftar', { title: 'Daftar Judul TA Anda', copyright: copyright })
}

exports.bimbingan = function(req, res) {
    return res.render('anggota/dosen/bimbingan/index', { title: 'Pilih judul TA', copyright: copyright })
}

exports.bimbingan_detail = function(req, res) {
    return res.render('anggota/dosen/bimbingan/detail', { title: 'Detail Bimbingan', copyright: copyright })
}
