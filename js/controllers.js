var controllers = {};

controllers.AppController = function($scope, UsersService, UserService) {	
	$scope.status = 0;
	$scope.users = UsersService.getUsers();
	$scope.userService = UserService;

	// join main game
	$scope.joinGame = function(username) {
		if (!username || username.length < 3) {
			return false;
		}

		var user = {
			username: username,
			color: getRandomColor(),
			position: {
				x: 0,
				y: 0
			}
		};

		// add to game and bind user to scope
		$scope.users.$add(user).then(function(response) {
			user = UserService.getUser(response.name());
			user.$bind($scope, 'user').then(function(unbind) {
				$scope.user.$unbind = unbind;
			});
	
			$scope.status = 1;
		});

		// leaving browser
		window.onbeforeunload = function() {
			if ($scope.user) {
				$scope.user.$unbind();
				$scope.user.$remove();

				$scope.status = 0;
			}
		};
	};
};
