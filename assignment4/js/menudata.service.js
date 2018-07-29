/**
 * Fourth assignment for the course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 * This is the data service
 *
 * @author Tchernopyatov Alexey
 * @version 1.1, 07/30/2018
 */
(
  function() {
    'use strict';
    angular.module('data')
           .service('MenuDataService',MenuDataService );
    MenuDataService.$inject = ['ApiBasePath', '$http']
    function MenuDataService(ApiBasePath, $http) {
      var service = this;
      service.getAllCategories = function() {
        console.log('getAllCategories');
        return $http({
          url : ApiBasePath+'categories.json'
        }).then(function (result) {
            console.log('getAllCategories ',result);
            return result.data;
        });
      };
      service.getItemsForCategory = function(categoryShortName) {
        console.log('getItemsForCategory');
        return $http({
          url : ApiBasePath+'menu_items.json',
          params : {
            category : categoryShortName
          }
        }).then(function (result) {
            console.log('getItemsForCategory', result);
            return result.data;
        });
      }
    }
  }
)();
