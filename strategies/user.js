var express = require('express');
var router = express.Router(); 

module.exports = function(passport) {

	router.post('/signup', passport.authenticate('local-signup'), function(req,res){
		res.json({ user: req.user })
	})
	return router; 
}