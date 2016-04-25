var passport = require('passport');
var User = require('../models/user');

module.exports = function(){
	 function authOrCreate(req, res, next){
		passport.authenticate('facebook-token', function(err, profile, info){
			if(err || !profile){
				res.status(401).json()
			} else {
				User.findOne({'facebookId': profile.id}, function(err, result){
					if(err){
						res.status(401).json()
					} else if(result){
						req.user = result;
						next(null, result);
					} else {
						user = new User({
							firstName: profile._json.first_name,
							lastName: profile._json.last_name,
							name: profile._json.name,
							profilePhoto: profile.photos[0].value,
							email: profile.emails[0].value,
							facebookId: profile.id
						});
						user.save(function(err, result){
							if(err){
								res.status(500).json(err);
							} else {
								req.user = result;
								next(null, user);
							}
						});
					}
				})
			}
		})(req, res, next);
	}

	function auth(req, res, next){
		return passport.authenticate('facebook-token', function(err, profile, info){
			if(err || !profile){
				res.status(401).json()
			} else {
				User.findOne({'facebookId': profile.id}, function(err, result){
					if(err || !result){
						res.status(401).json()
					} else {
						req.user = result;
						next(null, result);
					}
				})
			}
		})(req, res, next);
	}

	return {
		authOrCreate: authOrCreate,
		auth: auth
	}
}();