var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	signinRoutes= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');
global.username;
module.exports = function(app){	

	router.use('/',signinRoutes);

	signinRoutes.get("/", function(req,res){
	res.redirect("/login");
	})

	signinRoutes.get("/login",function(req,res){
		res.render("login");
	});

	signinRoutes.post("/login", function(req, res){
	var options = {		
				uri:config.login,
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
					console.log("login successfully");
					username = body.user.employeeId + "_" + body.user.firstname;
					res.cookie('auth',body.token);				
	                res.locals.messages = username;	
					res.redirect("/telesales",{username:username});
				}			
				if("error" in body){
				 	if(body["error"]=='Login failed. Please try again.'){
				 	req.flash("msg","Error Occured");
	                res.locals.messages = req.flash();			
					console.log("Login failed. Please try again.");
					return res.render("register", {message:"Login failed. Please try again."});
					}
				}
			}
			if(body=='Unauthorized'){
				req.flash("msg","Login failed. Please try again.");
                res.locals.messages = req.flash();		
				return res.render("login", {message:"Login failed. Please try again."});				
			}
		});
	});

signinRoutes.get("/logout", function(req,res){
	req.logout();
	res.redirect("/login");
});

	app.use('/',router);
}