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
  for(var i = 0; i < items.menu_items.length; i++){
    //console.log('items.menu_items[i].id = ', items.menu_items[i].id);
    if(items.menu_items[i].id == $stateParams.itemId) {
      $ctrl.item = items.menu_items[i];
      break;
    }
  }
  // var item = items.menu_items[$stateParams.itemId];
  // $ctrl.item = item;
}
})();
