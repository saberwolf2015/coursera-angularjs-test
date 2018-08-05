(function () {
"use strict";

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<',
    colClass: '@' //lets add col class to use this component in several places
  },
  controller: MenuItemController,
  bindToController: true
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  if(!$ctrl.colClass) {
    $ctrl.colClass = 'col-md-6';
  }
}

})();
