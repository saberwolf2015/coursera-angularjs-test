(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'/*,'MenuDataService'*/];
function CategoriesController(items,/*MenuDataService*/) {
  console.log('CategoriesController');
  var $ctrl = this;
  $ctrl.items = items;
  // $ctrl.items = [];
  // $ctrl.$onInit = function () {
  //   MenuDataService.getAllCategories()
  //   .then(function (result) {
  //       $ctrl.items = result;
  //   });
  //}
}


})();
