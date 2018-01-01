var angularModule = angular.module('dashboardApp',[])

angularModule.controller('controllerDashboard', function($scope, $http, $window){

  //Kirim status berupa teks
  $scope.status_submission = function(){
    var status = $scope.status;

    var req = {
               method: 'POST',
               url: 'http://127.0.0.1:3500/kirim/status',
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
                      status: $scope.status
                     }
              }

    $http(req).then(function(response){
      var data = response.data.data
      alert('Berhasil di post status anda')
    }, function(data){
      console.log(data)
    });

  }

  //Menguraikan daftar kegiatan
  var reqKegiatan = {
             method: 'GET',
             url: 'http://127.0.0.1:3500/daftar_kegiatan',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
             }
            }

  $http(reqKegiatan).then(function(response){

    var data = response.data.data
    var banyakData = data.length
    //console.log("Data kegiatan: "+JSON.stringify(data))
    console.log("Data kegiatan: "+data.length)

    var daftarKegiatan = []
    for(var i = 0; i < banyakData; i++){
      daftarKegiatan.push(data[i].deskripsi)
    }
    $scope.kegiatan = daftarKegiatan


  }, function(data){
    console.log(data)
  });

  //Menguraikan data profil

  var userId = $('#userId').text()
  console.log('userId: '+userId)
  var reqProfil = {
             method: 'GET',
             url: 'http://127.0.0.1:3500/profil/'+ userId +'',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             transformRequest: function(obj) {
                  var str = [];
                  for(var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
             }
            }

  $http(reqProfil).then(function(response){

    var data = response.data.results
    var banyakData = data.length

    console.log("Data:"+JSON.stringify(data[0].profil));
    $scope.nama_lengkap = data[0].profil.nama_lengkap
    $scope.username = data[0].profil.username
    $scope.bio = data[0].profil.bio
    $scope.point = data[0].point

  }, function(data){
    console.log(JSON.stringify(data))
  });

})
