const copyright = "© 2017 Tugas Akhir Dalam Jaringan PPTIK Institut Teknologi Bandung"

exports.dashboard = function(req, res) {
    return res.render('anggota/institusi/dashboard', { title: 'Dashboard', copyright: copyright })
}

exports.pengaturan = function(req, res) {
    return res.render('anggota/institusi/pengaturan/index', { title: 'Pengaturan', copyright: copyright })
}

exports.pengaturan_akademik = function(req, res) {
    return res.render('anggota/institusi/pengaturan/akademik', { title: 'Pengaturan Akademik', copyright: copyright })
}

exports.pengaturan_profil = function(req, res) {
    return res.render('anggota/institusi/pengaturan/profil', { title: 'Pengaturan Profil', copyright: copyright })
}

exports.anggota = function(req, res) {
    return res.render('anggota/institusi/anggota/index', { title: 'Anggota', copyright: copyright })
}

exports.anggota_mahasiswa = function(req, res) {
    return res.render('anggota/institusi/anggota/mahasiswa', { title: 'Anggota Mahasiswa', copyright: copyright })
}

exports.anggota_dosen = function(req, res) {
    return res.render('anggota/institusi/anggota/dosen', { title: 'Anggota Dosen', copyright: copyright })
}
