'use strict';

angular.module('myApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customers', {
    templateUrl: 'customers/customers.html',
    controller: 'CustomersCtrl'
  });
}]);
