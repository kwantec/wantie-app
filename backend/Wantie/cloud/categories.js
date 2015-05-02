


function processCategories(response)
{
	
	var Category = Parse.Object.extend("Category");
	var query = new Parse.Query(Category);
	query.ascending("name");

	var catList = { categories:[] };

	query.find({
		success: function(matchesWants) {
			
			for(i = 0;i < matchesWants.length; i++)
			{
				catList.categories.push( matchesWants[i].get("name") );
			}
			response.success( catList  );
		}
	});
	
};

exports.init = function(request, response) {
	
	var Category = Parse.Object.extend("Category");
	
	var allCats = [
			'Medical/General Doctor',
			'Medical/Dentist',
			'Medical/Orthopedist',
			'Software/Programmer',
			'Repairs/Electrician',
			'Repairs/Plummer'
	];

	var cat	= {};
	for(i = 0;i < allCats.length;i++)
	{
		cat = new Category({ "name" :allCats[i] });
		
		cat.save(null, {
		  success: function(gameScore) {
		    // Execute any logic that should take place after the object is saved.
		    console.log('New Category: ' + cat.name);
		  },
		  error: function(gameScore, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    console.log('Failed to create new object, with error code: ' + error.message);
		  }
		});
	}
	response.success( "Done." );
	
};

exports.categories = function(request, response) {
  
  
  	if (request.params.skipAuth)
	{
		var catList = processCategories(response);

	}else{
		
		var currentUser = Parse.User.current();
		if (currentUser){
	
			if (currentUser.authenticated())
			{
				processCategories(response);
		
			}else{
		
				response.error('User Not authenticated');
			}
		} else {
			// show the signup or login page
			response.error('No user or Not authenticated');
		}  
	}
  
	
  
};