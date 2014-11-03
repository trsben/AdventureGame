var directives = {};

directives.Controls = function($document) {
	return {
		restrict: 'E',
		templateUrl: 'views/controls/index.html',
		link: function ($scope, element, attrs, controller) {
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

			// bind keys to controls
			$document.on('keydown', function(e) {
				$scope.$apply(function() {
					if (e.which == 40) {
						$scope.movePlayer('y', 1);
					}
					else if (e.which == 38) {
						$scope.movePlayer('y', -1);
					}
					else if (e.which == 39) {
						$scope.movePlayer('x', 1);
					}
					else if (e.which == 37) {
						$scope.movePlayer('x', -1);
					}
				});
			});

			$scope.leaveGame = function() {
				if ($scope.user) {
					$scope.user.$unbind();
					$scope.user.$remove();

					$scope.status = 0;
				}
			};
    	}
    };
};
