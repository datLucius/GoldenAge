(function() {
  'use strict';
  angular
    .module('hipHop', {
      'ngRoute'
    })
    .config(function ($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'MainController'
      })
        .when('/map', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'MainController'
        })
        .when('/sampleDetail/:songId',{
          templateUrl: 'views/sampleDetail.html',
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
