var angularModule = angular.module('tadjApp',[])

angularModule.controller('controllerPanduan', function($scope){
  //Deklarasi
  $scope.default = true //default view

  $scope.mahasiswa_1 = false //pendahuluan
  $scope.mahasiswa_2 = false //pengambilanKelompok
  $scope.mahasiswa_3 = false //pengambilanJudul
  $scope.mahasiswa_4 = false //bimbingan
  $scope.mahasiswa_5 = false //blog

  $scope.dosen_1 = false //pendahuluan
  $scope.dosen_2 = false //membuatJudul
  $scope.dosen_3 = false //mangajukanJudul
  $scope.dosen_4 = false //bimbingan
  $scope.dosen_5 = false //blog

  $scope.univ_1 = false //konfirmasiPendaftaranDosenDanuniv
  $scope.univ_2 = false //mengaktifkanJudul
  $scope.univ_3 = false //mengubahPembimbing
  $scope.univ_4 = false //membuatKelompokTA

  $scope.pembuat_nol = function() {
    $scope.default = false //default view

    $scope.mahasiswa_1 = false //pendahuluan
    $scope.mahasiswa_2 = false //pengambilanTopik
    $scope.mahasiswa_3 = false //pengambilanJudul
    $scope.mahasiswa_4 = false //bimbingan
    $scope.mahasiswa_5 = false //blog

    $scope.dosen_1 = false //pendahuluan
    $scope.dosen_2 = false //membuatJudul
    $scope.dosen_3 = false //mangajukanJudul
    $scope.dosen_4 = false //bimbingan
    $scope.dosen_5 = false //blog

    $scope.univ_1 = false //konfirmasiPendaftaranDosenDanuniv
    $scope.univ_2 = false //mengaktifkanJudul
    $scope.univ_3 = false //mengubahPembimbing
    $scope.univ_4 = false //membuatKelompokTA
  }

  $scope.mahasiswa_1_aktif = function(){
    $scope.pembuat_nol()

    $scope.mahasiswa_1 = true
  }

  $scope.mahasiswa_2_aktif = function(){
    $scope.pembuat_nol()

    $scope.mahasiswa_2 = true
  }

  $scope.mahasiswa_3_aktif = function(){
    $scope.pembuat_nol()

    $scope.mahasiswa_3 = true
  }

  $scope.mahasiswa_4_aktif = function(){
    $scope.pembuat_nol()

    $scope.mahasiswa_4 = true
  }

  $scope.mahasiswa_5_aktif = function(){
    $scope.pembuat_nol()

    $scope.mahasiswa_5 = true
  }

  $scope.dosen_1_aktif = function(){
    $scope.pembuat_nol()

    $scope.dosen_1 = true
  }

  $scope.dosen_2_aktif = function(){
    $scope.pembuat_nol()

    $scope.dosen_2 = true
  }

  $scope.dosen_3_aktif = function(){
    $scope.pembuat_nol()

    $scope.dosen_3 = true
  }

  $scope.dosen_4_aktif = function(){
    $scope.pembuat_nol()

    $scope.dosen_4 = true
  }

  $scope.dosen_5_aktif = function(){
    $scope.pembuat_nol()

    $scope.dosen_5 = true
  }

  $scope.univ_1_aktif = function(){
    $scope.pembuat_nol()

    $scope.univ_1 = true
  }

  $scope.univ_2_aktif = function(){
    $scope.pembuat_nol()

    $scope.univ_2 = true
  }

  $scope.univ_3_aktif = function(){
    $scope.pembuat_nol()

    $scope.univ_3 = true
  }

  $scope.univ_4_aktif = function(){
    $scope.pembuat_nol()

    $scope.univ_4 = true
  }
})
