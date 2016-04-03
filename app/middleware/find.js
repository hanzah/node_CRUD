var passport = require('passport');

module.exports = function(){
	function findRecord(key, modelName){
		var model = require('../models/' + modelName);
		return function(req, res, next){
			model.findById(req.params[key], function(err, result){
				if(err){
					res.status(404).json('Not found!');
				} else {
					req.record = result;
					next();
				}
			});
		}
	}

	return {
		findRecord: findRecord
	}
}();