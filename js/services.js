var services = {};

services.UsersService = function($firebase, FirebaseURL) {
	var UsersObject = {
		getUsers: function() {
			return $firebase(new Firebase(FirebaseURL + 'users'));
		}
	};

	return UsersObject;
};

services.UserService = function($firebase, FirebaseURL) {
	var size = 25;

	var UserObject = {
		getUser: function(userId) {
			return $firebase(new Firebase(FirebaseURL + 'users/' + userId));
		},
		getTopPosition: function(user) {
			return (user.position.y * size) + 'px';
		},
		getLeftPosition: function(user) {
			return (user.position.x * size) + 'px';
		}
	};

	return UserObject;
};
