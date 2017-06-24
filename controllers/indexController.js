const copyright = "© 2017 Tugas Akhir Dalam Jaringan PPTIK Institut Teknologi Bandung"

exports.index = function(req, res) {
    return res.render('index', { title: 'Tugas Akhir Dalam Jaringan', copyright: copyright })
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
