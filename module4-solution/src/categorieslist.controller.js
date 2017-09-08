(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesListController', categoriesListController);


categoriesListController.$inject = ['MenuDataService','categories'];
function categoriesListController(MenuDataService,categories) {
  var categoriesListController = this;
  categoriesListController.categories = categories;
}

})();
