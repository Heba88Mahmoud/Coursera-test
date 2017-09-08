(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesListController', categoriesListController);


categoriesListController.$inject = ['categories'];
function categoriesListController(categories) {
  var categoriesList = this;
  categoriesList.categories = categories;
}

})();
