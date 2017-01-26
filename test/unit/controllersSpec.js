'use strict';

/* jasmine specs for controllers go here */

describe('WineListCtrl', function() {

  beforeEach(module('wineApp'));

  it("should create 'wines' model with 3 wines", inject(function($controller) {
    var scope = {},
        ctrl = $controller('WineListCtrl', {$scope:scope});

    expect(scope.wines.length).toBe(3);
  }));

});
