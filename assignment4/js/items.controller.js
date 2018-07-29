/**
 * Fourth assignment for the course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 * This is the items controller
 *
 * @author Tchernopyatov Alexey
 * @version 1.1, 07/30/2018
 */
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
