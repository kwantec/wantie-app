

var express = require('express');

var webController = require('cloud/controllers/web.controller.js');

var wantsApi = require('cloud/wants.js');
var providesApi = require('cloud/provides.js');
var settingsApi = require('cloud/settings.js');
var categoriessApi = require('cloud/categories.js');


Parse.Cloud.define("wants", wantsApi.wants);
Parse.Cloud.define("wantsMatch", wantsApi.wantsMatch);
Parse.Cloud.define("wantsd", wantsApi.wantsd);

Parse.Cloud.define("provides", providesApi.provides );
Parse.Cloud.define("providesMatch", providesApi.providesMatch );
Parse.Cloud.define("providesd", providesApi.providesd );

Parse.Cloud.define("settings", settingsApi.settings );

Parse.Cloud.define("categories", categoriessApi.categories );

// commented to prevent calling (uncomment to use and the re-comment)
//Parse.Cloud.define("initcat", categoriessApi.init );


var app = express();

// Global app configuration section
app.set('views', 'cloud/views');
app.set('view engine', 'ejs');  // Switch to Jade by replacing ejs with jade here.
app.use(express.bodyParser());
app.use(express.methodOverride());

// Show all posts on homepage
app.get('/', webController.index);
app.get('/i2', webController.index);

app.listen();