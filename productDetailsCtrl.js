angular.module("myApp").controller("productDetailsCtrl", function ($scope, $stateParams, shopService){
    

 console.log($stateParams)
$scope.getId = function () {
   
     shopService.getId($stateParams.id).then(function(response){
           $scope.id = response.data
           console.log(response)
        })
    }
    $scope.getId()

})

  