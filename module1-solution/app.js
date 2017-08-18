(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchmenu=""
  $scope.message=""
  $scope.checkLunchMenu = function () {
   //split $scope.lunchmenu if not empty
   if   $scope.lunchmenu.length == 0 {
        $scope.message="Please enter data first"
   }else {
     var arrayOfStrings = $scope.lunchmenu.split(',');
     if arrayOfStrings.length <= 3 {
         $scope.message="Enjoy!"
     }else {
       $scope.message="Too much!"
     }
   }
   };
}
})();
