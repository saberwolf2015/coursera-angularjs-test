(
  function() {
    "use strict";

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserDataService','MenuService'];
    function MyInfoController(UserDataService,MenuService) {
      var $ctrl = this;
      $ctrl.$onInit = function() {
        $ctrl.user = UserDataService.getUserdata();
        $ctrl.user_fav = {};
        console.log("$ctrl.user",$ctrl.user);
        if($ctrl.user && $ctrl.user.favorite_dish) {
          MenuService.getMenuItem($ctrl.user.favorite_dish)
          .then(function(data){
            console.log("geMenuItem done");
            $ctrl.user_fav = data;
          });
        }
      };

      $ctrl.getUserdata = function() {
        return UserDataService.getUserdata();
      };
    }//end of MyInfoController
  }
)();
