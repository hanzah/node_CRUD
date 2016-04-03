var authMiddleware = require('../middleware/auth');
var postersController = require('../controllers/server/posters');

module.exports = function(router){
	router.get('/posters/:id', authMiddleware.auth, postersController.get);
	router.post('/posters', authMiddleware.auth, postersController.create);
	router.get('/posters/favorite/future', authMiddleware.auth, postersController.favoriteFuture);
	router.get('/posters/nonfavorite/future', authMiddleware.auth, postersController.nonfavoriteFuture);
};