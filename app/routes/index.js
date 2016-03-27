var express = require('express');
var router = express.Router();

module.exports = function(){
	require('./sessions')(router);
	require('./posterTypes')(router);
	return router;
};

