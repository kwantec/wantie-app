

exports.wantsMatch = function(request, response) {
	
	//var Want = Parse.Object.extend("Want");
	//var mywant = new Want ( request.params );
	
	var theCity = request.params.city;//mywant.city;
	var theCategory = request.params.category;//mywant.category;
	console.log("Querying for city:" + theCity);
	console.log("Querying for category:" + theCategory);


	var Provide = Parse.Object.extend("Provide");
	var query = new Parse.Query(Provide);

	//query.equalTo("user")
	
	//query.equalTo( "city",  theCity);
	
	
	query.equalTo( "category",  theCategory);
	query.descending("updatedAt");


	//query.equalTo("user", user);
	query.find({
		success: function(matchesWants) {
			
			response.success( matchesWants  )
			
		}
	});
	
};

exports.wants_put = function(request, response) {

    var myname = request.params.name ? request.params.name : "someone";
  
  
	var Want = Parse.Object.extend("Want",{
	        initialize: function(){
	            console.log("Want model instantiated");
	        }
	    });
    
	var mywant = new Want ( request.params );
	
	mywant.save(null, {
	  success: function(gameScore) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + mywant.id);
	  },
	  error: function(gameScore, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});

  
	var wantsList = [
		{
			screenName: myname,
			category: 'Dentist',
			city: 'Miami',
			state: 'Florida',
			country: 'USA',
			description: 'I have a bad tooth'
		},
		{
			screenName: 'Bart',
			category: 'Dentist',
			city: 'Miami',
			state: 'Florida',
			country: 'USA',
			description: ''
		},
	];
	
  
   //response.success( wantsList );
   //response.success(request.params);
   response.success( mywant.toJSON() );
   
};


exports.wants = function(request, response) {
  
	var currentUser = Parse.User.current();
	if (currentUser) {
		
		if (currentUser.authenticated())
		{
			var wantsList = [
				{
					category: 'Plumber',
					city: 'Miami',
					state: 'Florida',
					country: 'USA',
					description: 'I have a bad tooth'
				},
				{
					category: 'Dentist',
					city: 'Miami',
					state: 'Florida',
					country: 'USA',
					description: ''
				},
			];

			response.success( wantsList );
			
		}else{
			
			response.error('User Not authenticated');
		}
		
	    
	} else {
	    // show the signup or login page
		response.error('No user or Not authenticated');
	}
   
};