
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  
  console.log(request);
  response.success("Hello world!");
});


Parse.Cloud.define("wants_put", function(request, response) {

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
   
});



Parse.Cloud.define("wants", function(request, response) {
  
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
});

Parse.Cloud.define("provides", function(request, response) {
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
});

Parse.Cloud.define("settings", function(request, response) {
  response.success("settings");
});


