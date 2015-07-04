'use strict';
var app=angular.module('renu');

app.factory('httpRequest', ['$http', function($http){
	return {
		get:function(uri,param){
			var url=config.apiBaseURL+uri;
			return $http.get(url)
			.then(function(response){
				return response;
			});
		},
		post:function(uri,data){
			var url=config.apiBaseURL+uri;
			return $http.post(url,data)
			.then(function(response){
				return response;
			});
		}
	};
}])