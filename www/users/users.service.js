'use strict'

angular.module('myApp.users')

.service('UsersService', ['$q', function($q) {

  this.executeProcess = function(id) {
    var deferred = $q.defer();

    setTimeout(function() {
      deferred.notify('Executing process ' + id + '...');

      if (id >= 5) {
        setTimeout(function() {
          deferred.resolve('Process ' + id + ' executed!');
        }, id * 1000);
      } else {
        setTimeout(function() {
          deferred.reject('Process ' + id + ' not executed!');
        }, id * 1000);  
      }
    }, 1000);

    return deferred.promise;
  }

}]);