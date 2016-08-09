"use strict";
function productGridController($scope, $uibModal, productService) {
    //If you are running off a server uncomment the line below.  Otherwise if
    // if you are running off the file:// protocol use getAllIfRunLocal()
    //productService.getAll().then(function(proucts){
    productService.getAllIfRunLocal().then(function(products) {
        $scope.products = products;
    });

    $scope.details = function(product) {
      console.log(product);
        var modalInstance = $uibModal.open({
                templateUrl: 'details-template.html',
                controller: detailsController
            });
        }
    }

    function detailsController($scope, $uibModalInstance) {

    }
    angular.module("fenderApp").component("productGrid", {
        templateUrl: "product-grid-template.html",
        controller: productGridController
    });
