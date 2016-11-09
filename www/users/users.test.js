'use strict';

describe('myApp.users module test', function() {

  beforeEach(module('myApp.users'));

  describe('myApp.users controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var controller = $controller('UsersCtrl', {$scope: $rootScope.$new()});
      expect(controller).toBeDefined();
    }));

  });
});