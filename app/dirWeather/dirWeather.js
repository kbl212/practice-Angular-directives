var app = angular.module('directivePractice')

	.directive('dirWeather', function () {
		return {
			templateUrl: 'app/dirWeather/dirWeather.html',
			scope: {
				currentUser: "="
			}
		}
	})
	
// 	//scope: {
//  string: '@',
//  link: '=',
//  func: '&'
// }