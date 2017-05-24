app.directive('addNewButton', function(){
	return {
		restrict : 'EA',
	    templateUrl: 'partials/addNewButton.html',
	    controller: function($scope) {
	    	$scope.openPopUp = function () {
	    		$scope.$emit('openPopUp', 'value');
	    	}
	    }
	};
});