var authMiddleware = require('../middleware/auth');
var PosterType = require('../models/posterType');

module.exports = function(router){
	router.get('/posterTypes', authMiddleware.auth, function(req, res){
		PosterType.find(function(err, posterTypes){
			if(err){
				res.json(500, err);
			} else {
				res.json(200, posterTypes); 
			}
		});
	});
};