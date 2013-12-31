'use strict';

/* Services */


angular.module('myApp.services', []).service('userService', function($http){
	
	this.getUsers = function(callback){
		$http({
			url: 'rest/users',
			method: "GET",
			params: {'_t' : new Date().getTime()}
		}).success(callback);
	};
	
	this.getUser = function(userId, callback){
		$http({
			url: 'rest/users/'   + userId,
			method: "GET",
			params: {'_t' : new Date().getTime()}
		}).success(callback);
	};
	
	this.deleteUser = function(userId, callback){
		$http.delete('rest/users/'  + userId).success(callback);
	};
	this.saveUser = function(user, callback){
		$http({
			url: 'rest/users',
			method: "POST",
			contentType: "application/json",
			data: user
		}).success(callback);
	};
	
	this.editUser = function(user, callback){
		$http({
			url: 'rest/users',
			method: "PUT",
			contentType: "application/json",
			data: user
		}).success(callback);
	};
});
