(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams','items'];
function ItemDetailController($stateParams,items) {
  console.log('ItemDetailController', items);
  console.log('id is',$stateParams.itemId);
  var $ctrl = this;
  //var item = items[$stateParams.itemId];
  //var itemDetail = this;
  var item = items.menu_items[$stateParams.itemId];
  $ctrl.item = item;
}
})();
