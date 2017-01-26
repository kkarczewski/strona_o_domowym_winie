'use strict';

/* App Module */

var wineApp = angular.module('wineApp', [
  'ngRoute',
  'wineAnimations',
  'wineControllers',
  'wineFilters',
  'wineServices',
  'ngSanitize',
  'ngDropdowns',
  'ui.select',
  'angularUUID2',
  'ngCsv',
  'ngPatternRestrict',
  'ngDialog',
  'sprintf',
  'angucomplete-alt',
  'angularMoment'
]);

wineApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/wines', {
        templateUrl: 'partials/wine-list.html',
        controller: 'WineListCtrl'
      }).
      when('/wines/:wineId', {
        templateUrl: 'partials/wine-detail.html',
        controller: 'WineDetailCtrl'
      }).
      otherwise({
        redirectTo: '/wines'
      });
  }]);

wineApp.run(function(amMoment){
  amMoment.changeLocale('pl');
});
