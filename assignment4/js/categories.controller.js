/**
 * Fourth assignment for the course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 * This is the categories controller
 *
 * @author Tchernopyatov Alexey
 * @version 1.1, 07/30/2018
 */
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
