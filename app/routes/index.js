var express = require('express');
var router = express.Router();

module.exports = function(){
	require('./sessions')(router);
	require('./posterTypes')(router);
	require('./posters')(router);
	require('./users')(router);
	return router;
};

