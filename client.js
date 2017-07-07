var express 		= require('express'),
	app				= express(),
	cors			= require('cors'),
	bodyParser		= require('body-parser'),
    cookieParser	= require('cookie-parser'),
    connectFlash	= require('connect-flash'),
	passport		= require('passport'),
	localStrategy	= require('passport-local')
	User            = require('./models/user');

var loginRoutes = require('./routes/loginRoutes'),
	registerRoutes = require('./routes/registerRoutes'),
	customerfeedbackRoutes = require('./routes/customerfeedbackRoutes'),
	surveyRoutes = require('./routes/surveyRoutes');
	config = require('./config/database')

app.options('*', cors()); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(connectFlash());
app.set("view engine","ejs");
app.use(express.static(__dirname));

app.use(require('express-session')({
	secret:"gdp",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var port = 3001;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('gdmp-client running on port ' + port + '.');
});

loginRoutes(app);
registerRoutes(app);
customerfeedbackRoutes(app);
surveyRoutes(app);

module.exports = app;

