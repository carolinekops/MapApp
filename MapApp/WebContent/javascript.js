
var app = angular.module('myApplication', ['ngRoute']);
	
	app.config(['$routeProvider', function($routeProvider){
		
		$routeProvider
			.when('/', {
				templateUrl: 'views/lookup_country.html' ,
				controller: 'control'
			})
	}]);
