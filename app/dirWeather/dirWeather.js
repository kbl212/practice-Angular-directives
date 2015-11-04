/* global currentUser */
var app = angular.module('directivePractice')

	.directive('dirWeather', function () {
		return {
			templateUrl: 'app/dirWeather/dirWeather.html',
			scope: {
				currentUser: "=",
				weatherCall: "&"
			},
			controller: function($scope, weatherService){
				$scope.weatherCall({city: currentUser.city}).then(function(response){
					$scope.response = weatherService.getWeather(city);
										console.log($scope.response);
				});
			}
		}
	})
	
// 	//scope: {
//  string: '@',
//  link: '=',
//  func: '&'
// }