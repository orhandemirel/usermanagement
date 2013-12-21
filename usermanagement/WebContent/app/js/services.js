'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).service('userService', function($http){
	this.getUsers = function(callback){
		$http.get('rest/users').success(callback);
	};
	this.saveUser = function(user, callback){
		$http({
			url: 'rest/users',
			method: "POST",
			contentType: "application/json",
			data: user
		}).success(callback);
	};
});
