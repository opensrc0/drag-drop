app.directive('leftSide', ['customerData','$location' ,function(customerData,$location){
	return {
		restrict : 'EA',
		scope : {},
	    templateUrl: 'partials/customerList.html',
	    controller: function($scope) {
	    	$scope.customerData = customerData.getUserDetails();
	    	$scope.selectedUser = function (index) {
	    		$location.path('/rightPanel/'+index);
	    	}
	    }
	};
}]);