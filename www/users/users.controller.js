'use strict';

angular.module('myApp.users')

.controller('UsersCtrl', ['$scope', 'UsersService', function($scope, UsersService) {
  $scope.message = 'This is the user\'s view';
  
  $scope.response = null;
  $scope.response2 = null;

  var process = Math.floor((Math.random() * 9) + 1);

  UsersService.executeProcess(process).then(
    function(data) {
      //alert('Success: ' + data);
      $scope.response = 'Success: ' + data;
      console.log($scope.response);
    },
    function(data) {
      //alert('Failed: ' + data);
      $scope.response = 'Failed: ' + data;
      console.log($scope.response);
    },
    function(data) {
      //alert('Got notification: ' + data);
      $scope.response = data;
      console.log($scope.response);
    }
  );

  process = Math.floor((Math.random() * 9) + 1);

  UsersService.executeProcess(process).then(
    function(data) {
      $scope.response2 = 'Success: ' + data;
    },
    function(data) {
      $scope.response2 = 'Failed: ' + data;
    },
    function(data) {
      $scope.response2 = data;
    }
  );  
}]);
