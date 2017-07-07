var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	registerRoutes= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');

module.exports = function(app){	

	router.use('/',registerRoutes);

	registerRoutes.get("/register",function(req,res){
	res.render("register");
	});

	registerRoutes.post("/register",function(req,res){
	var options = {		
		uri:config.register,
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		form:req.body
	};
	request(options,function(error, response, body){
	if(!util.verifyJson(body)){	
		var body = JSON.parse(body);
		if("token" in body){			
			console.log("register successfully");
			res.redirect("/login");
		}
		if("error" in body){
		 	if(body["error"]=='You must enter an email address'){			
			console.log("please enter valid email");
			return res.render("register");
			}
		}
		if("error" in body){
		 	if(body["error"]=='That email address is already in use'){
		 	req.flash("msg","That email address is already in use");
            res.locals.messages = req.flash();			
			console.log("email is already registered");
			return res.render("register", {message:"email address is already in use"});
			}
		}
	}	

	});
	});
	app.use('/',router);
}