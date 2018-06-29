/**
 * First assignment for course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 *
 * @author Tchernopyatov Alexey
 * @since 1.1, 06/27/2018
 */
//immediately execute to not bleed variables to the global scope
//IIFE - immediately invoked function expression
(function() {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckCtrl',LunchCheckCtrl);


LunchCheckCtrl.$inject = ['$scope'];


function LunchCheckCtrl($scope) {
    $scope.inputString = '';  //string from input
    $scope.resultString = ''; //result string for output
    $scope.status = 0;        //status code, to display different class
    /**
     * Check out our lunchbox and decide how many items we have
     *
     * @author Tchernopyatov Alexey
     * @since 1.1, 06/27/2018
     */
    $scope.checkLunchbox = function() {
      var skipEmpty = true;
      var delimeter = ",";
      var arr = splitString($scope.inputString,delimeter, skipEmpty);
      //console.log(arr);
      if(arr.length == 0) {
        $scope.resultString = 'Please enter data first';
        $scope.status = -1;
        return;
      }

      $scope.status = 1;

      if(arr.length <= 3) {
        $scope.resultString = 'Enjoy!';
      } else {
        $scope.resultString = 'Too much!';
      }
    };//end of checkLunchbox
    /**
     * Split a string excluding empty spaces - decided not to use the filter method
     * @param str input string
     * @param delimeter delimeter for split
     * @param skipEmpty do we need skip empty spaces
     *
     * @author Tchernopyatov Alexey
     * @since 1.1, 06/27/2018
     */
     var splitString = function(str, delimeter, skipEmpty) {
       if(typeof delimeter === "undefined") delimeter = ",";
       if(typeof skipEmpty === "undefined") skipEmpty = false;
       var arr = str.split(delimeter);
       if(!skipEmpty) {
         return arr;
       }
       var arrWithoutEmpty = [];
       for(var i = 0; i < arr.length; i++) {
         if(typeof arr[i] !== "undefined" && arr[i].length > 0) {
           var elm = arr[i].trim();
           if(elm.length > 0) {
             arrWithoutEmpty.push(elm);
          }
         }
       }
       return arrWithoutEmpty;
     };// end of splitString
};

})();
