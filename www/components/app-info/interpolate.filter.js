'use strict';

angular.module('myApp.appInfo.interpolate-filter', [])

.filter('interpolate', ['appInfo', function(appInfo) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, appInfo.version);
  };
}]);
