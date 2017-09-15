(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['user','shortname'];
function SignupController(user,shortname) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.menuno=shortname;
}

})();
