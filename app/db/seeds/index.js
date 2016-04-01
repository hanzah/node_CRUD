var mongoose = require('../../config/mongoose');
var Q = require('q');
var promises = [];
mongoose.then(function(res){
	promises.push(require('./posterTypes')());

	Q.all(promises).then(function(res){
		console.log('All Done!');
		process.exit();
	});
});

