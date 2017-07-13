angular.module("myApp").controller("shopCtrl", function ($scope, shopService, $stateParams){
    
    $scope.recShopData = function () {
     shopService.getShopData().then(function(response){
           $scope.shopData = response.data
           
        })
    }
    $scope.recShopData()

})