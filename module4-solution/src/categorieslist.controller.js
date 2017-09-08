(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesListController', categoriesListController);


categoriesListController.$inject = ['MenuDataService','categoriesitems'];
function categoriesListController(MenuDataService,categoriesitems) {
  var categoriesListController = this;
  categoriesListController.categories = categories;
}

})();
