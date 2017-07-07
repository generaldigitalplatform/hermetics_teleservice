var express 	= require('express'),
	request		= require('request'),
	router 		= express.Router(),
	surveyRoutes= express.Router();

var config		= require('../config/database'),
	util		= require('../util/util');

module.exports = function(app){	

router.use('/',surveyRoutes);
surveyRoutes.post("/savesurvey",function(req,res){	
	
var token = req.cookies.auth;
		
if("CustomerProfile" in req.body){
	var CustomerProfile = req.body.CustomerProfile;
	CustomerProfile["CreatedBy"] = global.username;
	var cusprofile = {		
		uri:config.customerprofile,
		method: 'POST',
		headers: {'Content-Type': 'application/json',"Authorization": token},
		form:CustomerProfile
	};	
	request(cusprofile,function(error, response, body){
		if(!util.verifyJson(body)){
		 	var customerModel = JSON.parse(body);
		 	var customerId = customerModel._id
		 	if("Feedback" in req.body){
			 	var ProductFeedback = req.body.Feedback;
			 	ProductFeedback["CustomerId"] = customerId;    
				var cussurvey = {		
					uri:config.customerfeedback,
					method: 'POST',
					headers: {'Content-Type': 'application/json',"Authorization": token},
					form:ProductFeedback
				};
				request(cussurvey,function(error, response, body){				
				});	 
		 	}
            if("JobDetails" in req.body) {
            	var JobDetails = req.body.JobDetails;
            	JobDetails["CustomerId"] = customerId;
	   		   	var job = {		
					uri:config.job,
					method: 'POST',
					headers: {'Content-Type': 'application/json',"Authorization": token},
					form:JobDetails
				};
				request(job,function(error, response, body){
					});						
            }	            		
		}	
	});

	}
});
app.use('/',router);
}