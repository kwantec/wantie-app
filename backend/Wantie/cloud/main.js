

var wantsApi = require('cloud/wants.js');
var providesApi = require('cloud/provides.js');
var matchesApi = require('cloud/matches.js');
var settingsApi = require('cloud/settings.js');


Parse.Cloud.define("wants_put", wantsApi.wants_put);
Parse.Cloud.define("wants", wantsApi.wants);

Parse.Cloud.define("provides", providesApi.provides );

Parse.Cloud.define("settings", settingsApi.settings );

Parse.Cloud.define("matches", matchesApi.matches );
