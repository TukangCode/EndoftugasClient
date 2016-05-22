angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('SemuaBuku', function($scope,$http) {
	$scope.baseUrl = 'http://hiwata.freevar.com/client/';
	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';
	$scope.currentPage = 1;
	$scope.getSemuaBuku = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-semua-buku.php?page='+$scope.currentPage
		).success(function(data){
			$scope.semua_buku = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.selanjutnya = function(){
		$scope.currentPage = $scope.currentPage + 1;
		$scope.getSemuaBuku();
	};
	$scope.sebelumnya = function(){
		$scope.currentPage = $scope.currentPage - 1;
		$scope.getSemuaBuku();
	};
	$scope.getSemuaBuku();
})

.controller('NovelIndoCtrl', function($scope,$http) {
	$scope.baseUrl = 'http://hiwata.freevar.com/client/';
	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';
	$scope.currentPage = 1;
	$scope.getNovelIndo = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-novel-indonesia.php?page='+$scope.currentPage
		).success(function(data){
			$scope.novel_indo = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.selanjutnya = function(){
		$scope.currentPage = $scope.currentPage + 1;
		$scope.getNovelIndo();
	};
	$scope.sebelumnya = function(){
		$scope.currentPage = $scope.currentPage - 1;
		$scope.getNovelIndo();
	};
	$scope.getNovelIndo();
})
.controller('NovelBaratCtrl', function($scope,$http) {
	$scope.baseUrl = 'http://hiwata.freevar.com/client/';
	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';
	$scope.currentPage = 1;
	$scope.getNovelBarat = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-novel-barat.php?page='+$scope.currentPage
		).success(function(data){
			$scope.novel_barat = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.selanjutnya = function(){
		$scope.currentPage = $scope.currentPage + 1;
		$scope.getNovelBarat();
	};
	$scope.sebelumnya = function(){
		$scope.currentPage = $scope.currentPage - 1;
		$scope.getNovelBarat();
	};
	$scope.getNovelBarat();
})
.controller('KomikCowokCtrl', function($scope,$http) {
	$scope.baseUrl = 'http://hiwata.freevar.com/client/';
	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';
	$scope.currentPage = 1;
	$scope.getKomikCowok = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-komik-cowok.php?page='+$scope.currentPage
		).success(function(data){
			$scope.komik_cowok = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.selanjutnya = function(){
		$scope.currentPage = $scope.currentPage + 1;
		$scope.getKomikCowok();
	};
	$scope.sebelumnya = function(){
		$scope.currentPage = $scope.currentPage - 1;
		$scope.getKomikCowok();
	};
	$scope.getKomikCowok();
})
.controller('KomikCewekCtrl', function($scope,$http) {
	$scope.baseUrl = 'http://hiwata.freevar.com/client/';
	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';
	$scope.currentPage = 1;
	$scope.getKomikCewek = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-komik-cewek.php?page='+$scope.currentPage
		).success(function(data){
			$scope.komik_cewek = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.selanjutnya = function(){
		$scope.currentPage = $scope.currentPage + 1;
		$scope.getKomikCewek();
	};
	$scope.sebelumnya = function(){
		$scope.currentPage = $scope.currentPage - 1;
		$scope.getKomikCewek();
	};
	$scope.getKomikCewek();
})
.controller('CariBuku', function($scope, $http) {
	$scope.baseUrl = 'http://hiwata.freevar.com/client/';
	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';
	$scope.cari = {
		key : ''
	};
	$scope.getCariBuku= function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'cari-buku.php',
			{
				params : {
					cari : $scope.cari
				}				
			}
		).success(function(data){
			$scope.cari_buku = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
})
.controller('DetailCtrl', function($scope, $stateParams,$http) {
	var kode = $stateParams.kode;
	$scope.baseUrl = 'http://hiwata.freevar.com/client/';
	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';
	$scope.getDetailBuku = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-detail-buku.php',
			{
				params : {
					id : kode
				}				
			}
		).success(function(data){
			$scope.detail_buku = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.getDetailBuku();
});
