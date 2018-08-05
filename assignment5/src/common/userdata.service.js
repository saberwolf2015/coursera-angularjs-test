(
  function(){
    "use strict";
    angular.module('common')
    .service('UserDataService', UserDataService);
    //UserDataService.$inject = ['$http', 'ApiPath'];
    function UserDataService(/*$http, ApiPath*/) {
      var service = this;
      //service.user = {};
      service.getUserdata = function () {
        console.log('getUserdata',service.user);
        return service.user;
      };
      service.setUserdata = function (userdata) {
        console.log('setUserdata', userdata);
        service.user = userdata;
      };
    }
  }
)();
