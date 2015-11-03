var app = angular.module('directivePractice', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

$urlRouterProvider.otherwise('/home');

$stateProvider
.state('home', {
	url: '/home',
	// templateUrl: 'dadf' ,
	controller: 'homeCtrl'	
})

});
