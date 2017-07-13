angular.module("myApp").directive("product", function (){
    return {
        restrict: 'EA',
      
        templateUrl:  './views/product-tmpl.html',
        // link: function (scope, element, attribute) {
           
        // },
        scope: {
				shop: '='
			},
    controller: 'productDetailsCtrl'
            
    }
})


