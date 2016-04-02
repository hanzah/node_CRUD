var authMiddleware = require('../middleware/auth');
var postersController = require('../controllers/server/posters');

module.exports = function(router){
	router.get('/posters/:id', authMiddleware.auth, postersController.get);
	router.post('/posters', authMiddleware.auth, postersController.create);
};