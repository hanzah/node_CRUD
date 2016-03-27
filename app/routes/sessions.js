var authMiddleware = require('../middleware/auth')

module.exports = function(router){
	router.post('/sessions', authMiddleware.authOrCreate, function(req, res){
		res.json(201, req.user);
	});
};