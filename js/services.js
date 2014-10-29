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
	var UserObject = {
		getUser: function(userId) {
			return $firebase(new Firebase(FirebaseURL + 'users/' + userId));
		}
	};

	return UserObject;
};
