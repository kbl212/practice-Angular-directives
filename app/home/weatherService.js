/* global city */
/* global $http */
var app = angular.module('directivePractice')

	.service('weatherService', function ($http, $q) {

		this.getWeather = function (city) {
			var deferred = $q.defer();
			$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=7ec0d0da95f6e364d82b0b90b9f47a11')
				.then(function (response) {
					var temp = response.data.main.temp;
					var weatherDescription = response.data.weather[0].description;
					var results = {
						temp: temp,
						weather: weatherDescription
					};
					deferred.resolve(results)
					// console.log(temp, weatherDescription);
				})
			return deferred.promise;
		};
	})

// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
// API KEY ::// 7ec0d0da95f6e364d82b0b90b9f47a11