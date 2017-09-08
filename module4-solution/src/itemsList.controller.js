(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsListController', itemsListController);


itemsListController.$inject = ['MenuDataService','items'];
function itemsListController(MenuDataService,items) {
  var itemsListController = this;
  itemsListController.items = items;
}

})();
