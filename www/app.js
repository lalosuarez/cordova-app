'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.users',
  'myApp.customers',
  'myApp.appInfo',
  'myApp.appInfo-directive'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    var app = {
      // Application Constructor
      initialize: function() {
          document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      },

      // deviceready Event Handler
      //
      // Bind any cordova events here. Common events are:
      // 'pause', 'resume', etc.
      onDeviceReady: function() {
          this.receivedEvent('deviceready');
      },

      // Update DOM on a Received Event
      receivedEvent: function(id) {
          console.log('Received Event: ' + id);
          //alert('Received Event: ' + id);
      }
  };

  app.initialize();

  // Estas 2 líneas deberían de ir dentro de receivedEvent: function(id) 
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/users'});
}]);
