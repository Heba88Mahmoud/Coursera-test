(function () {
'use strict';

angular.module('MenuApp').config(RoutesConfig);
RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');
    // *** Set up UI states ***
  $stateProvider
    // Home page
    .state('home',{
             url:'/' ,
             templateUrl: 'home.html'
     })
    .state('categoriesList',{
              url:'/categories-list',
              templateUrl: 'categories.html',
              controller: 'categoriesListController as categoriesList',
              resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
               }]
             }
    })
    .state('items',{
               url:'/items',
               templateUrl: 'items.html'
    });
}

})();
