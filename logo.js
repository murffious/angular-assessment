angular.module("myApp").directive("logo", function (){
    return {
        
        restrict: "E",
        scope: {
            img: "@"
        },
        templateUrl: 'logo.html'
    }
})
      