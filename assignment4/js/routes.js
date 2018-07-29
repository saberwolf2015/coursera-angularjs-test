/**
 * Fourth assignment for the course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 * This is the routes config
 *
 * @author Tchernopyatov Alexey
 * @version 1.1, 07/30/2018
 */
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
    templateUrl: './templates/routes/home.template.html'
  })
  // categories
  .state('categories', {
    url: '/categories',
    templateUrl: './templates/routes/categories.template.html',
    controller: 'CategoriesController as $ctrl'
    ,
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
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
