/**
 * Fourth assignment for the course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 * This is the data module
 *
 * @author Tchernopyatov Alexey
 * @version 1.1, 07/30/2018
 */
(
  function() {
    'use strict';
    angular.module('data',[])
           .constant('ApiBasePath','https://davids-restaurant.herokuapp.com/');
  }
)();
