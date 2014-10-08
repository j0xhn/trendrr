(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'angular'
        ], factory);
    } else {
        factory();
    }
}(function () {
    'use strict';

    angular.module('myApp.modules.login', [])
		
		.controller('LoginCtrl', [
			'$scope',
			function ($scope) {
			}])
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider
			  .when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			 })
			  ;
			$locationProvider.html5Mode(true);
		}]);

	}
));