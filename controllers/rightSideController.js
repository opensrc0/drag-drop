function rightSideController ($scope, customerData, $routeParams, $uibModal, $log, $document, $rootScope) {
	let index = $routeParams.index;

	$scope.customerData = customerData.getUserDetails()[index];
	
	var $ctrl = this;
	$ctrl.items = ['item1', 'item2', 'item3'];

	$ctrl.animationsEnabled = true;

	$ctrl.open = function (size, parentSelector) {
		var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		var modalInstance = $uibModal.open({
			animation: $ctrl.animationsEnabled,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'partials/addNewUser.html',
			controller: 'addCustomer',
			controllerAs: '$ctrl',
			size: size,
			appendTo: parentElem,
			resolve: {
				items: function () {
				  return $ctrl.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$ctrl.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$scope.addUser = function (data) {
		var getUserData = JSON.parse(localStorage.getItem('getUserDetails'));
		getUserData.push(data);
		localStorage.setItem('getUserDetails', JSON.stringify(getUserData));
	}
	// $rootScope.$on('cancelPopup', function(e, data){
	// 	$uibModalInstance.dismiss('cancel');
	// });

	$rootScope.$on('openPopUp', function(e, data){
		$ctrl.open('lg');
	});

	$rootScope.$on('addUser', function(e, data){
		$scope.addUser(data);
	});
}