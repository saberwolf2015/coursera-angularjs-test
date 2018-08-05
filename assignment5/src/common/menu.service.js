(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  /**
   * Added function to get Menu Item
   */
  service.getMenuItem = function (short_name) {
    var url = ApiPath + '/menu_items/'+short_name+'.json';
    return $http.get(url).then(function (response) {
      return response.data;
    });
  };

}



})();
