var authMiddleware = require('../middleware/auth')

module.exports = function(router){
	router.get('/posterTypes', authMiddleware.auth, function(req, res){
		res.json(200, []); 
	});
};