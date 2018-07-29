(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  console.log("RoutesConfig");
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: '../templates/routes/home.template.html'
  })
  // categories
  .state('categories', {
    url: '/categories',
    templateUrl: './templates/routes/categories.template.html',
    controller: 'CategoriesController as $ctrl'
    ,
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        console.log('resolve');
        //return [];
        return MenuDataService.getAllCategories();
      }]
    }
  })
  //item in categories
  .state('items', {
    url: '/items/{shortName}',
    templateUrl: './templates/routes/items.template.html',
    controller: 'ItemsController as $ctrl',
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        console.log('resolve');
        //return [];
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  })
  //test subview
  .state('items.itemDetail', {
  url: '/item-detail/{itemId}',
  templateUrl: './templates/routes/item-detail.template.html',
  controller: "ItemDetailController as $ctrl"
});
}

})();
