var authMiddleware = require('../middleware/auth');
var usersController = require('../controllers/server/users');

module.exports = function(router){
	router.get('/users', authMiddleware.auth, usersController.index);
};