var express 				= require('express'),
	request					= require('request'),
	router 					= express.Router(),
	customerfeedbackRoutes	= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');

module.exports = function(app){	

	router.use('/',customerfeedbackRoutes);

	customerfeedbackRoutes.get("/telesales",function(req,res){
	var token = req.cookies.auth;
	var options = {		
		uri:config.protected,
		method: 'GET',
		headers: {'Content-Type': 'application/json',"Authorization": token}					
	};
	request(options,function(error, response, body){			
	if(!util.verifyJson(body)){
		var body = JSON.parse(body);		
		if("content" in body){
			if(body["content"]='Success'){			
			console.log("authenticated successfully");
			res.render("telesales");
			}
		}
	}
	if(body=='Unauthorized'){
		req.flash("msg","Unauthorized");
		res.locals.messages = req.flash();		
		return res.render("login", {message:"Unauthorized"});				
	}	
	});	
	});

	app.use('/',router);
}