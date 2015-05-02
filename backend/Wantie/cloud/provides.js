

exports.provides = function(request, response) {
	var providesList = [
		{
			screenName: 'Daniel',
			category: 'Plumbing',
			city: 'Miami',
			state: 'Florida',
			country: 'USA',
			description: '',
			phone: '999-222-3333',
			email: 'daniel@kwantec.com',
			distance: 20,
			unit: 'mi'
		},
		{
			screenName: 'Bart',
			category: 'Electrician',
			city: 'Miami',
			state: 'Florida',
			country: 'USA',
			description: '',
			phone: '111-123-2333',
			email: 'alfredo@kwantec.com',
			distance: 20,
			unit: 'mi'
		},
	];
  
   response.success(providesList);
};