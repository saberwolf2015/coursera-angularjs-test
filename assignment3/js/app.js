/**
 * Third assignment for the course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 *
 * @author Tchernopyatov Alexey
 * @version 1.1, 07/22/2018
 */
(function() {
  'use strict';
  //The URL for the REST Endpoint is https://davids-restaurant.herokuapp.com/menu_items.json
  angular.module('NarrowItDownApp',['ngSanitize'])
  .controller('NarrowItDownController',NarrowItDownController )
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems)
  .constant('ApiBasePath','https://davids-restaurant.herokuapp.com/');

  NarrowItDownController.$inject = ['MenuSearchService'];
  MenuSearchService.$inject = ['$http','ApiBasePath'];
  /**
   * The controller for a NarrowItDownController
   *
   * @author Tchernopyatov Alexey
   * @since 1.1, 07/22/2018
   */
  function NarrowItDownController (MenuSearchService) {
    var ctrl = this;
    var NOTHING_FOUND = 'Nothing found';
    ctrl.searchString = '';
    ctrl.found = [];
    ctrl.error = '';
    ctrl.load = false; //do we need show a loader

    ctrl.remove = function(index) {
      //console.log(ctrl);
      ctrl.found.splice(index, 1);
    };
    ctrl.find = function() {
      ctrl.error = '';//reset error message
      ctrl.found = [];//reset array
      if(ctrl.searchString.length == 0) {
        ctrl.error = NOTHING_FOUND;
        return;
      }
      ctrl.load = true;

      MenuSearchService.getMatchedMenuItems(ctrl.searchString)
      .then(function(result) {
        ctrl.found = result;
        ctrl.load = false;
        if(ctrl.found.length == 0) {
          ctrl.error = NOTHING_FOUND;
        }
        //console.log(ctrl.found);
      }).catch(function (error) {
        ctrl.load = false;
        ctrl.error = error;
        });
    };
  };

  /**
   * The service for working with remote site
   *
   * @author Tchernopyatov Alexey
   * @since 1.1, 07/22/2018
   */
  function MenuSearchService($http,ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        url : ApiBasePath+'menu_items.json'
      }).then(function (result) {
          //console.log(result);
          // process result and only keep items that match
          var foundItems = [];
          var regexp = new RegExp(searchTerm, 'gi');//ignore case and found all
          var searchRegexp = new RegExp(searchTerm, "i");//ignore case
          for(var i = 0; i < result.data.menu_items.length; i++){
            if(result.data.menu_items[i].short_name.search(searchRegexp) !== -1 ||
              result.data.menu_items[i].name.search(searchRegexp) !== -1 ||
              result.data.menu_items[i].description.search(searchRegexp) !== -1) {
                console.log("found");
                console.log(result.data.menu_items[i]);
                result.data.menu_items[i].name = result.data.menu_items[i].name.replace(regexp, '<span class="found">'+searchTerm+'</span>');
                result.data.menu_items[i].description = result.data.menu_items[i].description.replace(regexp, '<span class="found">'+searchTerm+'</span>');
                foundItems.push(result.data.menu_items[i]);
            }
          }
          // return processed items
          return foundItems;
      });
    };
  };//end of MenuSearchService

  /**
   * The directive to display a item list
   *
   * @author Tchernopyatov Alexey
   * @since 1.1, 07/22/2018
   */
  function FoundItems() {
    var ddo = {
      restrict: 'A',
      templateUrl: './tpl/itemList.html',
      scope: {
        items : '<',
        onRemove : '&'
      }
    };
    return ddo;
  }
}());
