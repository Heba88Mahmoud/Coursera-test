(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'itemsList.html',
  bindings: {
    items: '<'
  }
});
})();
