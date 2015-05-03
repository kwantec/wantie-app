var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('tabsController', function($scope, $window, $http) {

	$scope.provides = [
		{
			category: 'Dentist',
			city: 'Miami',
			matches: 1
		},		
		{
			category: 'Trainer',
			city: 'Miami',
			matches: 0
		},		
		{
			category: 'Driver',
			city: 'Miami',
			matches: 1
		}
	];

	$scope.wants = [
		{
			category: 'Mechanic',
			city: 'Miami',
			matches: 2
		},		
		{
			category: 'Chef',
			city: 'Miami',
			matches: 0
		}
		];

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
	};

	$scope.selectedNeed = function()
	{
		console.log('Selected need');
	};

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
