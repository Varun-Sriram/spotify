'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
              'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.search'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/search'});
}]);
