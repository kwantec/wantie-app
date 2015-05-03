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
			      success: function(usersWants) {
			          // usersWants contains all of the wants by the current user.
					  //console.log(userWants);
					  
					  var retUsers = [];
					  var promise = new Parse.Promise();
					  
					  var resolved = false;
					  
					  promise.then(
						  function(){
							  console.log("EXECUTED PROVIDES PROMISE: ");
						  	  response.success(retUsers);
						  }
					  );
					  
					  var tot = usersWants.length;
					  var count = 1;
					  
					  for (var i = 0; i < usersWants.length; i++) { 
						  var object = usersWants[i];
						  var myjson = object.toJSON();
						  retUsers.push(myjson);
					  }
					  
					  for (var i = 0; i < usersWants.length; i++) { 
						  
						  console.log('PROCESSING: ' + i);
						  console.log(object);
						  
						  var Want = Parse.Object.extend("Want");

			  			  var q2 = new Parse.Query(Want);
						  q2.equalTo("city", retUsers[i].city );
						  q2.equalTo("category", retUsers[i].category );
						  q2.find({
							  success: function(matchingProvides) {
								  
								  console.log("count VALUE (success): " + count);
								  
								  var cur =  retUsers[count-1];
								  console.log("RetUsers:");
								  console.log(retUsers);
								  
								  // usersWants contains all of the wants by the current user.
								  //console.log(userWants);
								  console.log('Found ' + matchingProvides.length + ' matches for provide ' + retUsers[count-1].category);
								  retUsers[count-1].matches = matchingProvides.length;
								  
								  count++;
								  if ((count > tot) && (!resolved))
								  {
									  promise.resolve("Completed promise- called from success");
									  resolved = true;
								  }
							  },
							  error: function(error){
								  
								  retUsers[count-1].matches = 0;
								  console.log("count VALUE (success): " + count);
								  console.log("ERROR: ");
								  console.log(error);
								  count++;
								  
								  if ((count > tot) && (!resolved))
								  {
									  promise.resolve("Completed promise- called from error");
									  resolved = true;
								  }
							  }
						  });
					  }//end for
	
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

exports.providesold = function(request, response) {
  
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