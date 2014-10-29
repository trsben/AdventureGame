var controllers = {};

controllers.AppController = function($scope, UsersService, UserService) {	
	this.status = 0;
	this.user = null;

	// users in game
	this.users = UsersService.getUsers();

	// join main game
	$scope.joinGame = function(username) {
		if (!username || username.length < 3) {
			return false;
		}

		this.user = {
			username: username,
			position: {
				x: 0,
				y: 0
			}
		};

		this.users.$add(this.user).then(function(response) {
			this.user = UserService.getUser(response.name());
	
			// move to next step
			this.status = 1;
		}.bind(this));
	}.bind(this);

	$scope.movePlayer = function() {
		this.user.position.x++;

		console.log(this.user)
	}.bind(this);

	$scope.leaveGame = function() {
		if (this.user) {
			this.user.$remove();
		}
	};

	// leaving game
	window.onbeforeunload = function() {

	}
};
