(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'menuItems.html',
    scope: {
       found: '<',
      onRemove: '&'
    }
  };
  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){
 var list = this;
 list.searchTerm = "" ;
 list.narrowItDown = function (){
   if (list.searchTerm === ""){
     list.found = [] ;
   }else {
     var promise = MenuSearchService.getMatchedMenuItems();
     promise.then(function (response) {
       var result = response.data.menu_items;
       var foundItems = [];
       for (var i = 0; i < result.length; i++) {
        var description = result[i].description;
        if (description.toLowerCase().indexOf(list.searchTerm) !== -1) {
           foundItems.push(result[i]);
        }
      }
      list.found = foundItems;
       console.log("listfound", list.found);
       })
       .catch(function (error) {
         console.log("Something went terribly wrong.");
       });
   }
 };
 list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };

  list.foundInList = function () {
    if (list.found.length === 0 ){
      return true
    }
    return  false ;
};

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
service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
}

})();
