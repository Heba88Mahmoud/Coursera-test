(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesListController', categoriesListController);


categoriesListController.$inject = ['MenuDataService','categories'];
function categoriesListController(MenuDataService,categories) {
  var categories = this;
  categories.categories = categories;
}

})();
