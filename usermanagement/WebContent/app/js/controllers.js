'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  controller('UsersCtrl', ['$scope', '$location', 'userService',function($scope, $location, userService) {
	  userService.getUsers(function(data){
		  $scope.users = data;
	  });
	  $scope.newUserPage = function(){
		  $location.path('/new');
	  };
  }])
  .controller('NewUserCtrl', ['$scope', '$location','userService' , function($scope, $location, userService) {
	  $scope.user = {};
	  $scope.saveUser = function(){
		  userService.saveUser($scope.user, function(){
			  $location.path('/users');
		  });
	  };
  }])
  .controller('AboutCtrl', [function() {
	  
  }]);