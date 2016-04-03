var authMiddleware = require('../middleware/auth');
var findMiddleware = require('../middleware/find');
var usersController = require('../controllers/server/users');

module.exports = function(router){
	router.get('/users', authMiddleware.auth, usersController.index);
	router.get('/users/:userId/posters/future', authMiddleware.auth, findMiddleware.findRecord('userId', 'user'),
				usersController.futurePosters);
};