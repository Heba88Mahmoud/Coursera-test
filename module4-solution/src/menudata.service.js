(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");



MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService($http, ApiBasePath){
  var service = this;
  service.getAllCategories = function(){
    var response = $http({
    method: "GET",
    url: (ApiBasePath + "/categories.json")
  }).then(function(response){
      var items = response.data;
      return items;
    }).catch(function(error){
      console.log(error);
    });
    return response;
};

service.getItemsForCategory = function (categoryShortName) {
   var response = $http({
     method: "GET",
     url: (ApiBasePath + "/menu_items.json"),
     params: {
       category: categoryShortName
     }
   }).then(function(response){
      var items = response.data.menu_items;
      return items;
    }).catch(function(error){
      console.log(error);
    });
    return response;
 };


}

})();
