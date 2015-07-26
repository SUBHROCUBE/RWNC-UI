'use strict'; 

angular.module('renu', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap',
  'angular-loading-bar','validator','validator.rules'])
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
        templateUrl: 'app/main/modules/customer/customer.html',
        controller: 'CustomerCtrl'

      })
      .state('modules.newCustomer', {
        url: '/customer/new',
        templateUrl: 'app/main/modules/customer/editCustomer.html',
        controller:'newCustomerCtrl'
      })
      .state('modules.editCustomer', {
        url: '/customer/:customerId/edit',
        templateUrl: 'app/main/modules/customer/editCustomer.html',
        controller:'editCustomerCtrl'
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
        templateUrl: 'app/main/modules/received/received.html',
        controller:'ReceivedCtrl'
      })
      .state('modules.editReceived', {
        url: '/editReceived?type',
        templateUrl: 'app/main/modules/received/editNewReceived.html',
        controller:'EditReceivedCtrl'
      })
      .state('modules.NewReceived', {
        url: '/newReceived',
        templateUrl: 'app/main/modules/received/editNewReceived.html',
        controller:'NewReceivedCtrl'
      })
    $urlRouterProvider.otherwise('/login');
  })

.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);
