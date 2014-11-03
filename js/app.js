angular
	.module('AdventureGame', ['firebase', 'ngRoute'])
	.config(function($routeProvider) {		
		$routeProvider
			.when('/default', {
				templateUrl: 'views/index.html',
				controller: 'AppController',
				controllerAs: 'app'
			})

			.otherwise({
				redirectTo: '/default'
			});
	})

	.constant('FirebaseURL', 'https://adventuregame.firebaseio.com/')
	.controller('AppController', ['$scope', 'UsersService', 'UserService', controllers.AppController])
	.directive('controls', ['$document', directives.Controls])
	.service('UsersService', ['$firebase', 'FirebaseURL', services.UsersService])
	.service('UserService', ['$firebase', 'FirebaseURL', services.UserService]);
