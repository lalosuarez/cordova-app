'use strict'

angular.module('myApp.appInfo-directive',[])

.directive('appInfo', ['appInfo', function(appInfo) {
  return {
    template: '<p>&copy; '+ appInfo.year + ' ' + appInfo.company + '</p><p>v' + appInfo.version + '</p>'
  }
}]);
