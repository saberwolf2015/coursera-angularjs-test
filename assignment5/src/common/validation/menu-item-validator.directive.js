/**
 * Lets write own validator
 *
 * @author Tchernopyatov A.V.
 * @version 1.1, 08/06/2018
 */
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
                def.resolve();
              },function errorCallback(response) {
              console.log("error", response);
              def.reject();
            });

            return def.promise;
          };
        }
      };
      return ddo;
    }//end of MenuItemValidator
  }//end of function
)();
