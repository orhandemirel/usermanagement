'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).service('userService', function($http){
	this.getUsers = function(callback){
		$http.get('rest/users').success(callback);
	};
});
