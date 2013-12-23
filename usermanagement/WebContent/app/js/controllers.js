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
	  $scope.deleteUser = function(userId){
		  userService.deleteUser(userId, function(){
			  for(var i = $scope.users.length - 1; i >= 0; i--) {
				    if($scope.users[i].id === userId) {
						  $scope.users.splice(i, 1);
						  break;
				    }
				}
			  $location.path('/users');
		  });
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
    .controller('EditUserCtrl', ['$scope', '$location', '$routeParams','userService' , function($scope, $location, $routeParams, userService) {
    	userService.getUser($routeParams.userId, function(data){
  		  $scope.user = data;
  	  });
	  $scope.saveUser = function(){
		  userService.editUser($scope.user, function(){
			  $location.path('/users');
		  });
	  };
  }])
  .controller('AboutCtrl', [function() {
	  
  }]);