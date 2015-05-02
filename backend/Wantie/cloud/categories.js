


function getCategories()
{
	var catList = [
		{ category: 'Medical/General Doctor'},
		{ category: 'Medical/Dentist'},
		{ category: 'Medical/Orthopedist'},
		{ category: 'Software/Programmer'},
		{ category: 'Repairs/Electrician'},
		{ category: 'Repairs/Plummer'}
	];
	
	return catList;
};


exports.categories = function(request, response) {
  
  
  	if (request.params.skipAuth)
	{
		var catList = getCategories();

		response.success( catList );
	}else{
		
		var currentUser = Parse.User.current();
		if (currentUser){
	
			if (currentUser.authenticated())
			{
				var catList = getCategories();

				response.success( catList );
		
			}else{
		
				response.error('User Not authenticated');
			}
		} else {
			// show the signup or login page
			response.error('No user or Not authenticated');
		}  
	}
  
	
  
};