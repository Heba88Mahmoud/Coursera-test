(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchmenu=""
  $scope.message="Hello"
  $scope.checkLunchMenu = function () {
        console.log('Check');
   //split $scope.lunchmenu if not empty
   if   ($scope.lunchmenu.length == 0) {
        $scope.message="Please enter data first"
        console.log('Empty');
   }else {
     var arrayOfStrings = $scope.lunchmenu.split(',');
     if (arrayOfStrings.length <= 3) {
         $scope.message="Enjoy!"
     }else {
       $scope.message="Too much!"
     }
   }
   };
}
})();
