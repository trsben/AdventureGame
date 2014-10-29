var controllers = {};

controllers.AppController = function($scope, UsersService, UserService) {	
	$scope.status = 0;

	// users in game
	$scope.users = UsersService.getUsers();

	// join main game
	$scope.joinGame = function(username) {
		if (!username || username.length < 3) {
			return false;
		}

		var user = {
			username: username,
			position: {
				x: 0,
				y: 0
			}
		};

		// add to game and bind user to scope
		$scope.users.$add(user).then(function(response) {
			user = UserService.getUser(response.name());
			user.$bind($scope, 'user');
	
			// move to next step
			$scope.status = 1;
		});
	};

	$scope.movePlayer = function(coord, direction) {
		if ($scope.user) {
			if (coord == 'x') {
				$scope.user.position.x += direction;
			}
			else {
				$scope.user.position.y += direction;
			}
		}
	};

	$scope.leaveGame = function() {
		if ($scope.user) {
			$scope.user.$remove();
			$scope.status = 0;
		}
	};

	// leaving game
	window.onbeforeunload = function() {
		if ($scope.user) {
			$scope.user.$remove();
			$scope.status = 0;
		}
	}
};
