angular.module("myApp").controller("shopCtrl", function ($scope, shopService, $stateParams){
    
    $scope.recShopData = function () {
     shopService.getShopData().then(function(response){
           $scope.shopData = response.data
           
        })
    }
    $scope.recShopData()
//      $scope.id = shopService.getShopData($stateParams.id);
//    $scope.getId = function(id) {
// 			for(var i = 0; i < response.data.length; i++) {
// 				if($scope.shopData.id == id) {
// 					return $scope.shopData[i];
// 				}
// 			}
// 		}
//      $scope.getId()
})