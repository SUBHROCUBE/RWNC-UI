'use strict';

angular.module('renu')
 .controller('HomeCtrl', ['$scope','$log','httpRequest', function($scope,$log,httpRequest){
 		$scope.recentOrders=[];
 		$scope.recentReceived=[];
 		$scope.recentLowStocks=[];
 		$scope.recentDeliveries=[];
 		
 		var getRecentOrders=function(){
 			httpRequest.get(config.api.recentOrders)
 			.then(function(response){
 				$log.log(response);
 				$scope.recentOrders=response.data;
 			});
 		};
 		var getRecentReceived=function(){
 			httpRequest.get(config.api.recentReceived)
 			.then(function(response){
 				$scope.recentReceived=response.data;
 				$log.log(response);
 			});
 		};
 		var getRecentLowStocks=function(){
 			httpRequest.get(config.api.recentLowStocks)
 			.then(function(response){
 				$scope.recentLowStocks=response.data;
 				$log.log(response);
 			});
 		};
 		var getRecentDeliveries=function(){
 			httpRequest.get(config.api.recentDeliveries)
 			.then(function(response){
 				$scope.recentDeliveries=response.data;
 				$log.log(response);
 			});
 		};

 		var loadHomePage=function(){
 			getRecentOrders();
 			getRecentReceived();
 			getRecentLowStocks();
 			getRecentDeliveries();
 		};
 		loadHomePage();
 }]);
