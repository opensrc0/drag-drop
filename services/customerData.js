app.service('customerData', function() {
	var customerData = {};

	customerData.getUserDetails = function () {

		if(localStorage.getItem('getUserDetails')) {
			return JSON.parse(localStorage.getItem('getUserDetails'));
		}

		let data = [{
			name : 'Himasnhu',
			address : 'Yeswanthpur',
			email : 'himanshu@gmail.com'
		},
		{
			name : 'Ravi',
			address : 'Electronic City',
			email : 'ravi@gmail.com'
		},
		{
			name : 'Sanyam',
			address : 'Manyta Tech',
			email : 'sanyam@gmail.com'
		}];

		localStorage.setItem('getUserDetails', JSON.stringify(data));

		return data;
	}

	return customerData;
});