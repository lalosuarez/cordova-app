'use strict';

describe('myApp.customers module test', function() {

  beforeEach(module('myApp.customers'));

  describe('myApp.customers controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var controller = $controller('CustomersCtrl', {$scope: $rootScope.$new()});
      expect(controller).toBeDefined();
    }));

  });
});