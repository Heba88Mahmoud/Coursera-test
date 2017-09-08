(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesListController', categoriesListController);


categoriesListController.$inject = ['MenuDataService','items'];
function categoriesListController(MenuDataService,items) {
  var categoriesListController = this;
  categoriesListController.items = items;
}

})();
