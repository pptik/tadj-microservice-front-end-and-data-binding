var angularModule = angular.module('tadjApp',[])
var base_api_url = 'http://127.0.0.1:3001';

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

angularModule.controller('controllerGetProfile', function($scope, $http, $window){
  var username = $('#hidden-username').text()
  var access_token = $('#hidden-access-token').text()

  //Request data profil
  var reqProfil = {
             method: 'POST',
             url: base_api_url+'/profil',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
             },
             data: {
                     username: username,
                     access_token: access_token
                   }
            }

  $http(reqProfil).then(function(response){

    console.log('data profil: '+JSON.stringify(response.data.data[0]))

    $scope.username = response.data.data[0].profil.username
    $scope.nama_lengkap = response.data.data[0].profil.nama_lengkap
    $scope.foto = response.data.data[0].profil.foto_profil
    $scope.bio = response.data.data[0].profil.bio


  }, function(data){
    console.log(data)
  });


})

angularModule.controller('controllerGetMahasiswaUniversitas', function($scope, $http, $window){
  var idUniversitas = $('#hidden-user-id').text()
  var access_token = $('#hidden-access-token').text()

  //Request data mahasiswa
  var reqMahasiswa = {
             method: 'POST',
             url: base_api_url+'/institusi/daftar_mahasiswa',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
             },
             data: {
                     idUniversitas: idUniversitas,
                     access_token: access_token
                   }
            }

  $http(reqMahasiswa).then(function(response){

    console.log('data mahasiswa dari universitas: '+JSON.stringify(response.data.data))
    //kembalian semuanya
    $scope.students = response.data.data
    //$scope.universitas_prodi = response.data.data[0].email

    $scope.pendingStudents = response.data.data






  }, function(data){
    console.log(data)
  });


})

angularModule.controller('controllerGetMahasiswaPendingUniversitas', function($scope, $http, $window){
  var idUniversitas = $('#hidden-user-id').text()
  var access_token = $('#hidden-access-token').text()

  //Request data mahasiswa
  var reqMahasiswa = {
             method: 'POST',
             url: base_api_url+'/institusi/daftar_mahasiswa/pending',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
             },
             data: {
                     idUniversitas: idUniversitas,
                     access_token: access_token
                   }
            }

  $http(reqMahasiswa).then(function(response){

    console.log('data mahasiswa pending dari universitas: '+JSON.stringify(response.data.data))
    //kembalian semuanya
    $scope.students = response.data.data
    //$scope.universitas_prodi = response.data.data[0].email

    $scope.pendingStudents = response.data.data

  }, function(data){
    console.log(data)
  });


})

angularModule.controller('controllerGetUniversitasMahasiswa', function($scope, $http, $window){
  var idPengguna = $('#hidden-user-id').text()
  var accessToken = $('#hidden-access-token').text()

  //Request data mahasiswa
  var reqMahasiswa = {
             method: 'POST',
             url: base_api_url+'/mahasiswa/daftar_universitas',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
             },
             data: {
                     idPengguna: idPengguna,
                     accessToken: accessToken
                   }
            }

  $http(reqMahasiswa).then(function(response){

    $scope.banyakUniversitas = response.data.data[0].akademik.universitas_prodi.length
    $scope.universitas_prodi = response.data.data[0].akademik.universitas_prodi

  }, function(data){
    console.log(data)
  });


})

angularModule.controller('controllerGetUniversitas', function($scope, $http, $window){
  var access_token = $('#hidden-access-token').text()

  //Request data universitas
  var reqUniversitas = {
             method: 'POST',
             url: base_api_url+'/institusi/daftar',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
             },
             data: {
                     access_token: access_token
                   }
            }

  $http(reqUniversitas).then(function(response){


    //kembalian semuanya
    $scope.universities = response.data.data
    console.log('daftar universitas:'+response.data.data)

    //jenjang
    $('#tambah-institusi-select-institusi').on('change', function() {

      var idInstitusi = $(this).val()
      var access_token = $('#hidden-access-token').text()

      //Request data jenjang
      var reqJenjang = {
                 method: 'POST',
                 url: base_api_url+'/jenjang/daftar',
                 headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 transformRequest: function(obj) {
                      var str = [];
                      for(var p in obj)
                      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                      return str.join("&");
                 },
                 data: {
                         access_token: access_token,
                         id_universitas: idInstitusi
                       }
                }

      $http(reqJenjang).then(function(response){


        //kembalian semuanya
        $scope.paraJenjang = response.data.data[0].akademik.jenjang
        console.log('daftar jenjang:'+response.data.data)


      }, function(data){
        console.log(data)
      });

    });

    //prodi
    $('#tambah-institusi-select-jenjang').on('change', function() {

      var idJenjang = $(this).val()
      var access_token = $('#hidden-access-token').text()

      //Request data prodi
      var reqProdi = {
                 method: 'POST',
                 url: base_api_url+'/jenjang/prodi',
                 headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 transformRequest: function(obj) {
                      var str = [];
                      for(var p in obj)
                      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                      return str.join("&");
                 },
                 data: {
                         access_token: access_token,
                         id_jenjang: idJenjang
                       }
                }

      $http(reqProdi).then(function(response){


        //kembalian semuanya
        $scope.paraProdi = response.data.data[0].prodi
        //console.log('daftar jenjang:'+response.data.data)


      }, function(data){
        console.log(data)
      });

    });

  }, function(data){
    console.log(data)
  });


})

// angularModule.controller('controllerGetJenjangProdi', function($scope, $http, $window){
//   var access_token = $('#hidden-access-token').text()
//
//   $('select').on('change', function() {
//       var idJenjang = $(this).val()
//
//       //Request data prodi
//       var reqJenjangProdi = {
//                  method: 'POST',
//                  url: base_api_url+'/jenjang/daftar',
//                  headers: {
//                    'Content-Type': 'application/x-www-form-urlencoded'
//                  },
//                  transformRequest: function(obj) {
//                       var str = [];
//                       for(var p in obj)
//                       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//                       return str.join("&");
//                  },
//                  data: {
//                          access_token: access_token
//                        }
//                 }
//
//       $http(reqJenjangProdi).then(function(response){
//
//
//         //kembalian semuanya
//         $scope.paraJenjang = response.data.data
//         console.log('daftar jenjang:'+response.data.data)
//
//
//       }, function(data){
//         console.log(data)
//       });
//
//   }
//
// })
