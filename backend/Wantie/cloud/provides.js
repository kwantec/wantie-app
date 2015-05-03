exports.providesMatch = function(request, response) {
	
	var theCity = request.params.city;
	var theCategory = request.params.category;

	var Want = Parse.Object.extend("Want");
	var query = new Parse.Query(Want);

	//query.equalTo("user")
	
	query.equalTo( "city",  theCity);
	query.equalTo( "category",  theCategory);
	query.descending("updatedAt");


	//query.equalTo("user", user);
	query.find({
		success: function(matchesProvides) {
			
			response.success( matchesProvides )
			
		}
	});
	
};


exports.provides = function(request, response) {
  
	var currentUser = Parse.User.current();
	if (currentUser) {
		
		if (currentUser.authenticated())
		{
			var Provide = Parse.Object.extend("Provide");
			var query = new Parse.Query(Provide);
			query.equalTo("myuser", currentUser );
			query.find({
			      success: function(usersProvides) {
			        // usersProvides contains all of the wants by the current user.
					  //console.log(userProvides);
					  response.success(usersProvides);
			      }
			    });
			
		}else{
			
			response.error('User Not authenticated');
		}
		
	    
	} else {
	    // show the signup or login page
		response.error('No user or Not authenticated');
	}
   
};