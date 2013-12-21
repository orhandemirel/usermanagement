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
  $routeProvider.when('/new', {templateUrl: 'app/partials/newuser.html', controller: 'NewUserCtrl'});
  $routeProvider.otherwise({redirectTo: '/users'});
}]);
