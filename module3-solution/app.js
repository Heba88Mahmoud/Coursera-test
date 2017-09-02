(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItemsDirective', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){
 var list = this;
 list.searchTerm = "" ;
 list.narrowItDown = function (){
   var promise = MenuSearchService.getMatchedMenuItems();
   promise.then(function (response) {
    //   list.found = response.data;
     var result = response.data;
     var foundItems = [];
     for (var i = 0; i < result.length; i++) {
      var description = result[i].description;
      if (description.toLowerCase().indexOf(list.searchTerm) !== -1) {
        foundItems.push(result[i]);
      }
    }
    list.found = foundItems;
     })
     .catch(function (error) {
       console.log("Something went terribly wrong.");
     });
 }
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
