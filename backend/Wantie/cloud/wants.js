


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
  
	var wantsList = [
		{
			screenName: 'JoeDoe',
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
  
   response.success( wantsList );
};