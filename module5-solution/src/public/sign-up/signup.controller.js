(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $ctrl = this;
  $ctrl.success = false;
  $ctrl.error = false;
  
  $ctrl.submit = function() {
   MenuService.getMenuItem($ctrl.user.menuno).then(function (response) {
     $ctrl.user.menuno = response.data;
     MenuService.setUser($ctrl.user);
     $ctrl.success = true;
     $ctrl.error = false;

   }, function (response) {
     $ctrl.success = false;
     $ctrl.error = true;
   });
 };


}

})();
