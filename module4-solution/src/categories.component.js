(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'categoriesList.html',
  bindings: {
    items: '<'
  }
});
})();
