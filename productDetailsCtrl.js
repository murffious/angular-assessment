angular.module("myApp").controller("productDetailsCtrl", function ($scope, $stateParams, shopService){
    
  $scope.recShopData = function () {
     shopService.getShopData().then(function(response){
           $scope.shopData = response.data
           console.log(response)
        })
    }
    $scope.recShopData()
//      var shopper = $scope.shopData
//      console.log(shopper)
//    $scope.getId = function(id) {
// 			for(var i = 0; i < shopper.length; i++) {
// 				if(shopper[i].id == id) {
// 					return shopper[i];
// 				}
// 			}
// 		}
//         $scope.id = $scope.getId($stateParams.id)
})

   //  $scope.recShopData = function () {
    //  shopService.getShopData().then(function(response){
    //        $scope.shopData = response.data
    //        console.log(response)
    //     })
    // }
    // $scope.recShopData() 
    // $scope.id = function () {
    //     shopService.getShopData($stateParams.id)
//    $scope.getId = function(id) {
// 			for(var i = 0; i < $scope.shopData2.length; i++) {
// 				if(shopData.id == id) {
// 					return shopData[i];
// 				}
// 			}
// 		}
//      $scope.getId() 
      