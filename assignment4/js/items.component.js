/**
 * Fourth assignment for the course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 * This is the items component
 *
 * @author Tchernopyatov Alexey
 * @version 1.1, 07/30/2018
 */
(
  function() {
    'use strict';
    angular.module('MenuApp')
           .component('items', {
             templateUrl: '../templates/items.html',
             bindings: {
               items: '<'
             }
           });
  }
)();
