var passport = require('passport');
var FacebookTokenStrategy = require('passport-facebook-token');

passport.use(new FacebookTokenStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET
  }, function(accessToken, refreshToken, profile, done) {
  		if(profile){
  			done(null, profile);
  		} else {
  			done(null, false);
  		}  		 
  }
));