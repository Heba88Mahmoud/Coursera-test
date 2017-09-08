(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'categories.html',
  bindings: {
    categories: '<'
  }
});
})();
