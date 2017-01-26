'use strict';

/* Controllers */

var wineControllers = angular.module('wineControllers', []);

wineControllers.controller('WineListCtrl', ['$scope', 'Wine',
  function($scope, Wine) {
    $scope.wines = Wine.query();
    $scope.orderProp = 'age';
  }]);

wineControllers.controller('WineDetailCtrl', ['$scope','$routeParams', 'Wine',
  function($scope, $routeParams, Wine) {
    $scope.wine = Wine.get({wineId: $routeParams.wineId}, function(wine) {
      $scope.mainImageUrl = wine.images[0];
      $scope.ingredients = wine.ingredients;
      $scope.details = wine.details;
      $scope.times = wine.times;
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

wineControllers.controller('WineMomentCtrl', function($scope) {
  $scope.vm = this;
  $scope.vm.timeOne = new Date();
  $scope.update = function(){
    vm.timeOne = moment(new Date());
    datatime.html(date.format('DD.MM.YYYY, HH:mm:ss'));
  };
});

wineControllers.controller('WineLinkyCtrl',['$scope',
  function($scope) {
    $scope.mail = 'mailto:serwisyrejestracje@wp.pl';
    $scope.site = 'www.owocowewina.pl';
    $scope.snippetWithSingleURL = 'https://owocowewina.pl';
}]);

wineControllers.controller('WineDropdownCtrl', function($scope) {
  $scope.ddSelectOptions = [
     { text: 'Strona Główna', href: '#/wines/' },
     { text: 'Option2', value: 'value 2', someprop: 'value prop' },
     { text: 'Wino Ryżowe', href: '#/wines/ryzowe' }
  ];
  $scope.ddSelectSelected = {};
});

wineControllers.controller('WineUISelectCtrl', function($scope,Wine) {
  $scope.person = {};
  $scope.people = Wine.query();
  $scope.clear = function() {
    $scope.person.selected = undefined;
  };
});

wineControllers.controller('WineAnguCompleteCtrl',
  function($scope, $http, $rootScope, Wine) {
    $scope.people = Wine.query();
    $scope.selectedPerson = {};
    $scope.selectedPersonFn = function(selected) {
      if (selected) {
        console.log(selected.originalObject.id);
        $scope.selectedPerson = selected.originalObject;
      } else {
        $scope.selectedPerson = {};
        console.log('Cleared');
      }
    };
});

wineControllers.controller('WineUUIDCtrl',['$scope','uuid2',
  function($scope, uuid2) {
    $scope.id = uuid2.newuuid();
  }]);

wineControllers.controller('WineCSVCtrl', function ($scope) {
  $scope.filename = "test.csv";
  $scope.getArray = [{Col1: 1, Col2: 2}, {Col1: 3, Col2: 4}];
  $scope.getHeader = function (){
    return ["Col1","Col2"];
  };
});

wineControllers.controller('WineDialogCtrl',
  function ($scope, ngDialog) {
    $scope.open = function () {
      ngDialog.open( {
        template: 'firstDialog',
        controller: 'FirstDialogCtrl',
        className: 'ngdialog-theme-default ngdialog-theme-custom'
      });
    };
  });

wineControllers.controller('FirstDialogCtrl',
  function($scope,ngDialog) {
    $scope.next = function() {
      ngDialog.close('ngdialog1');
      ngDialog.open({
        template: 'secondDialog',
        controller: 'SecondDialogCtrl',
        className: 'ngdialog-theme-default ngdialog-theme-custom'
      });
    };
  });

wineControllers.controller('SecondDialogCtrl',
  function($scope,ngDialog) {
    $scope.close = function () {
      ngDialog.close('ngdialog2');
    };
  });
wineControllers.controller('WineSanitizeCtrl',['$scope','$sce',
  function($scope, $sce) {
    $scope.snippet = 
      '<p style="color:blue">An html\n'+
      '<em onmouseover="this.textContent=\'Niedozwolony link\'">Click here</em\n'+
      'snippet</p>';
    $scope.deliberatelyTrustDangerousSnippet = function() {
      return $sce.trustAsHtml($scope.snippet);
    };
  }]);
