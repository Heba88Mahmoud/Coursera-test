(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

MyInfoController.$inject = ['userInfo'];
function InfoController(userInfo) {
  var $infoCtrl = this;
  $infoCtrl.user = userInfo;
}

})();
