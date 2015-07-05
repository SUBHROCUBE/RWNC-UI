'use strict';

angular.module('renu')
  .controller('StocksCtrl', function ($scope) {
    $scope.$parent.module="stocks";

  	$scope.opened=false;
     $scope.openStart=function($event){
     	$event.preventDefault();
    	$event.stopPropagation();
     	$scope.StartOpened=true;
     };
     $scope.openTo=function($event){
     	$event.preventDefault();
    	$event.stopPropagation();
     	$scope.ToOpened=true;
     };
  });
