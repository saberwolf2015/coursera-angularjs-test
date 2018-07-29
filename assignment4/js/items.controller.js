(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  console.log('ItemsController');
  var $ctrl = this;
  $ctrl.items = items;
}
})();
