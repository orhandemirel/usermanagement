'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  controller('UsersCtrl', ['$scope', 'userService',function($scope, userService) {
	  userService.getUsers(function(data){
		  $scope.users = data;
	  });
  }])
  .controller('NewUserCtrl', [function() {
	  
  }]);