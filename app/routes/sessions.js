var authMiddleware = require('../middleware/auth');
var sessionsController = require('../controllers/server/sessions');

module.exports = function(router){
	router.post('/sessions', authMiddleware.authOrCreate, sessionsController.create);
};