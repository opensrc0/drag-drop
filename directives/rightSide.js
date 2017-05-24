app.directive('rightSide', ['customerData' ,function(customerData){
	return {
		restrict : 'EA',
	    templateUrl: 'partials/customerSelected.html'
	};
}]);