'use strict';

/* Services */

var wineServices = angular.module('wineServices', ['ngResource']);

wineServices.factory('Wine', ['$resource',
  function($resource){
    return $resource('wines/:wineId.json', {}, {
      query: {method:'GET', params:{wineId:'wines'}, isArray:true}
    });
  }]);
