var passport = require('passport');
var User = require('../models/user');

module.exports = function(){
	var authOrCreate = function(req, res, next){
		passport.authenticate('facebook-token', function(err, profile, info){
			if(err || !profile){
				res.json(401)
			} else {
				User.findOne({'facebookId': profile.id}, function(err, result){
					if(err){
						res.json(401)
					} else if(result){
						req.user = result;
						next(null, result);
					} else {
						user = new User({
							firstName: profile._json.first_name,
							lastName: profile._json.last_name,
							profilePhoto: profile.photos[0].value,
							email: profile.emails[0].value,
							facebookId: profile.id
						});
						user.save(function(err, result){
							if(err){
								res.json(500, err);
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

	var auth = function(req, res, next){
		return passport.authenticate('facebook-token', function(err, profile, info){
			if(err || !profile){
				res.json(401)
			} else {
				User.findOne({'facebookId': profile.id}, function(err, result){
					if(err || !result){
						res.json(401)
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