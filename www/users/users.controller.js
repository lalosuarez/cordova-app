'use strict';

angular.module('myApp.users')

.controller('UsersCtrl', ['$scope', '$q', function($scope, $q) {
  $scope.message = 'This is the user\'s view';
  
  $scope.response = null;

  function executeProcess(name) {
    var deferred = $q.defer();

    setTimeout(function() {
      deferred.notify('Executing process ' + name + '...');

      if (name >= 5) {
        setTimeout(function() {
          deferred.resolve('Process ' + name + ' executed!');
        }, 5000);
      } else {
        setTimeout(function() {
          deferred.reject('Process ' + name + ' not executed!');
        }, 3000);  
      }
    }, 1000);

    return deferred.promise;
  };

  var process = Math.floor((Math.random() * 10) + 1);

  executeProcess(process).then(
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
}]);
