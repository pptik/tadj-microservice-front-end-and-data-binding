const copyright = "© 2017 Tugas Akhir Dalam Jaringan PPTIK Institut Teknologi Bandung"

exports.dashboard = function(req, res) {
    return res.render('anggota/dosen/dashboard', { title: 'Dashboard', copyright: copyright })
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

exports.bimbingan = function(req, res) {
    return res.render('anggota/dosen/bimbingan/index', { title: 'Pilih judul TA', copyright: copyright })
}

exports.bimbingan_detail = function(req, res) {
    return res.render('anggota/dosen/bimbingan/detail', { title: 'Detail Bimbingan', copyright: copyright })
}
