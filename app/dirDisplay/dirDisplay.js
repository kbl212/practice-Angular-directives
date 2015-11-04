var app = angular.module('directivePractice')

	.directive('dirDisplay', function () {
		return {
			templateUrl: 'app/dirDisplay/dirDisplayTmpl.html',
			link: function (scope, element, attributes) {
				// console.log(scope, element, attributes); //this is just to see in the console what they are returning. see homeTmpl.html
				scope.showUserAgeEmail = false;
				element.on('click', function () {
					scope.showUserAgeEmail = true;
					scope.$apply(); // this is super important to help the function actually apply to the DOM
					// console.log(scope.showUserAgeEmail); // also just for testing
				p})
				//console.log(scope);
			}
		}
	})