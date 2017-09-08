(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesData', {
  templateUrl: 'categories.html',
  bindings: {
    categories: '<'
  }
});
})();
