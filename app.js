(function() {
  'use strict';
  angular
    .module('hipHop', [
      'ngRoute'
    ])
    .config(function ($routeProvider){
      $routeProvider
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'MainController'
      })
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'MainController'
        })
        .when('/404', {
          templateUrl: 'views/biz.html',
          controller: 'MainController'
        })
        .otherwise({
          redirectTp: '/404'
        });
    });
}());
