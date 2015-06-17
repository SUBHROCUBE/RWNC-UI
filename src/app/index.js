'use strict';

angular.module('renu', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider            
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html'
        //controller: 'MainCtrl'
      })
      .state('modules', {
        url: '/modules',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('modules.home', {
        url: '/home',
        templateUrl: 'app/main/modules/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('modules.stocks', {
        url: '/stocks',
        templateUrl: 'app/main/modules/stocks/stocks.html',
        controller: 'StocksCtrl'
      })
      .state('modules.editStock', {
        url: '/stocks/edit',
        templateUrl: 'app/main/modules/stocks/editStocks.html',
        controller: 'StocksCtrl'
      })
      .state('modules.customer', {
        url: '/customer',
        templateUrl: 'app/main/modules/customer/customer.html'
      })
      .state('modules.editCustomer', {
        url: '/customer/edi',
        templateUrl: 'app/main/modules/customer/editCustomer.html'
      })
      .state('modules.orders', {
        url: '/orders',
        template: "<section class='body-section wrapper-in-c'><div class='coming-soon'><img src='assets/images/under-construction.png'></div></section>"       
      })
      .state('modules.delivery', {
        url: '/delivery',
        template: "<section class='body-section wrapper-in-c'><div class='coming-soon'><img src='assets/images/under-construction.png'></div></section>"       
      })
      .state('modules.production', {
        url: '/production',
        template: "<section class='body-section wrapper-in-c'><div class='coming-soon'><img src='assets/images/under-construction.png'></div></section>"       
      })
      .state('modules.received', {
        url: '/received',
        template: "<section class='body-section wrapper-in-c'><div class='coming-soon'><img src='assets/images/under-construction.png'></div></section>"       
      })
    $urlRouterProvider.otherwise('/login');
  })
;
