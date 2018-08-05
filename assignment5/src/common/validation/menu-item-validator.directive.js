(
  function() {
    "use strict;"

    angular.module('common')
    .directive('menuItemValidator', MenuItemValidator);

    MenuItemValidator.$inject = ['$http','ApiPath','$q'];

    function MenuItemValidator($http,ApiPath,$q) {
      var ddo = {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elm, attrs, ctrl) {
          var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

          ctrl.$asyncValidators.MenuItemValidator = function(modelValue, viewValue) {
            console.log("modelValue", modelValue, "viewValue", viewValue);
            if (ctrl.$isEmpty(modelValue)) {
              // consider empty model valid
              return $q.resolve();
            }
            var def = $q.defer();
            var url = ApiPath + '/menu_items/'+modelValue+'.json';
            $http.get(url).then(function successCallback(response) {
                console.log(response);
                //$ctrl.success_message = "Your information has been saved";
                //UserDataService.setUserdata(angular.copy($ctrl.user));
                def.resolve();
              },function errorCallback(response) {
              console.log("error", response);
              def.reject();
              //$ctrl.error = 'No such menu number exists';
            });

            return def.promise;
            // $timeout(function() {
            //   // Mock a delayed response
            //   if (usernames.indexOf(modelValue) === -1) {
            //     // The username is available
            //     def.resolve();
            //   } else {
            //     def.reject();
            //   }
            //
            // }, 2000);
            //
            // return def.promise;
          };
        }
      };
      return ddo;
    }//end of MenuItemValidator
  }//end of function
)();
