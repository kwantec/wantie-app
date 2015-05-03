var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('tabsController', function($scope, $window, $http) {

	$scope.provides = [];

	$scope.wants = [];

	$scope.settings = {
		screenName: 'tubrody',
		phone: '6503532299',
		email: 'daniel@kwantec.com',
		city: 'Miami'
	};

	$scope.isloggedIn = false;

	$scope.selectedProvide = function()
	{
		console.log('Selected provide');
		
		var req = {
		 method: 'POST',
		 url: 'https://api.parse.com/1/functions/providesd',
		 headers: {
		   'X-Parse-Application-Id': '4FAlwkw8tzcFyhWTLBflWWZzHHF2pk31XIzhTRVt',
			'X-Parse-REST-API-Key': 'yawBGhIHuRGGi6V0oTf4AzifGW5XbSbiXGoH2hQ4',
			'Content-Type': 'application/json'
		 },
		 data: { }
		};
		
		$http(req).
				success(function(data, status, headers, config) {
					console.log("Success");
					console.log(data);
					$scope.provides = data.result;
			    }).
			    error(function(data, status, headers, config) {
			    	//$scope.provides = [];
			    });		
		
		
	};

	$scope.selectedNeed = function()
	{
		console.log('Selected need');
		
		var req = {
		 method: 'POST',
		 url: 'https://api.parse.com/1/functions/wantsd',
		 headers: {
		   'X-Parse-Application-Id': '4FAlwkw8tzcFyhWTLBflWWZzHHF2pk31XIzhTRVt',
			'X-Parse-REST-API-Key': 'yawBGhIHuRGGi6V0oTf4AzifGW5XbSbiXGoH2hQ4',
			'Content-Type': 'application/json'
		 },
		 data: { }
		};
		
		$http(req).
				success(function(data, status, headers, config) {
					console.log("Success");
					console.log(data);
					$scope.wants = data.result;
			    }).
			    error(function(data, status, headers, config) {
			    	//$scope.wants = [];
			    });		
		
		
	};
	
	$scope.selectedNeed();

	$scope.selectedSettings = function()
	{
		console.log('Selected settings');
	};

	$scope.loggedOut = function()
	{
		$scope.isloggedIn = false;
	};
	$scope.loggedIn = function()
	{
		$scope.isloggedIn = true;
	};
	
});	
