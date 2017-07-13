angular.module("myApp").service("shopService", function ($http){
  this.getShopData = function () {
      return $http.get("https://practiceapi.devmountain.com/products")
  }
  this.getId = function (id) {
      return $http.get("https://practiceapi.devmountain.com/products/" + id)
  }
 
})

