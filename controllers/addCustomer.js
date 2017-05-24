app.controller('addCustomer', addCustomer);

function addCustomer($scope) {
	// $scope.$emit('cancelPopup', 'value');

	$scope.addUser = function () {
		$scope.$emit('addUser', {"email": $scope.userEmail, 'name' : $scope.userName, 'address' : $scope.userLocation});
	}
}

