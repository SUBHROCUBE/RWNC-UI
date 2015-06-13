'use strict';

angular.module('renu', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })      
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html'
        //controller: 'MainCtrl'
      });
    $urlRouterProvider.otherwise('/login');
  })
;
