var authMiddleware = require('../middleware/auth');
var posterTypesController = require('../controllers/server/posterTypes');

module.exports = function(router){
	router.get('/posterTypes', authMiddleware.auth, posterTypesController.index);
};