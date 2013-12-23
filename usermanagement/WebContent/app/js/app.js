'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {templateUrl: 'app/partials/users.html', controller: 'UsersCtrl'});
  $routeProvider.when('/about', {templateUrl: 'app/partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.when('/new', {templateUrl: 'app/partials/user.html', controller: 'NewUserCtrl'});
  $routeProvider.when('/edit/:userId', {templateUrl: 'app/partials/user.html', controller: 'EditUserCtrl'});
  $routeProvider.otherwise({redirectTo: '/users'});
}]);
