(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){
 var list = this;
 list.searchTerm = "" ;
 //list.found = MenuSearchService.getMatchedMenuItems(list.searchTerm);
var promise = MenuSearchService.getMatchedMenuItems();
promise.then(function (response) {
    list.found = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

}
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;
  service.getMatchedMenuItems = function(){
    var response = $http({
    method: "GET",
    url: "https://davids-restaurant.herokuapp.com/menu_items.json" ,
  });
  return response;
};
}
FoundItemsDirective.$inject = ['NarrowItDownController'];
function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'menuItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

})();