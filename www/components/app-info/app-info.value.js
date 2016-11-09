'use strict'

angular.module('myApp.appInfo', ['myApp.appInfo.interpolate-filter'])

.value('appInfo',{
  "version": "1.0.0",
  "company": "SIT, LLC",
  "year": 2016
});
