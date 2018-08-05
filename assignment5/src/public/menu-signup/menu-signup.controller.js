(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$http','ApiPath','UserDataService'];
function SignupController($http,ApiPath,UserDataService) {
  var $ctrl = this;
  $ctrl.caption = "Yahoo";
  $ctrl.user = {};
  $ctrl.error = "";
  
  $ctrl.submit = function() {
    console.log("user", $ctrl.user);
    //since we added own validator, we can remove this check
    var url = ApiPath + '/menu_items/'+$ctrl.user.favorite_dish+'.json';
    console.log("url", url);
    $http.get(url).then(function successCallback(response) {
      console.log(response);
      $ctrl.success_message = "Your information has been saved";
      UserDataService.setUserdata(angular.copy($ctrl.user));
    },function errorCallback(response) {
    console.log("error", response);
    $ctrl.error = 'No such menu number exists';
  });
  }
}

})();
