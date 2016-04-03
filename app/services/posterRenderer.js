var Poster = require('../models/poster');

module.exports = function(){
	function findFuture(req, res, options){
		date = req.query['date'] || Date.now();
		limit = req.query['limit'] ? parseInt(req.query['limit']) : 10;
		skip = req.query['skip'] ? parseInt(req.query['skip']) : 0;
		options['date'] = { $gte: date };
		Poster.find(options).sort({date: '1'}).skip(skip).limit(limit)
		.populate('createdBy posterType').populate('invitees', 'firstName lastName name').exec(function(err, result){
			if(err){
				res.status(500).json(err);
			} else {
				res.status(200).json(result);
			}
		});
	}
	return {
		findFuture: findFuture
	}
}()