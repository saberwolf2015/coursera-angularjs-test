(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  console.log('CategoriesController');
  var $ctrl = this;
  $ctrl.items = items;
}

})();
