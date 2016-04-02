var User = require('../../models/user');
var escapeStringRegexp = require('escape-string-regexp');

module.exports = (function(){
	function index(req, res){
		query = req.query['query'] ? escapeStringRegexp(req.query['query']) : '';
		limit = req.query['limit'] ? parseInt(req.query['limit']) : 10;
		skip = req.query['skip'] ? parseInt(req.query['skip']) : 0;

		User.find({name: new RegExp('.*'+query+'.*', 'i')}).skip(skip).limit(limit)
		.select('_id name').exec(function(err, result){
			if(err){
				res.status(500).json(err);
			} else {
				res.status(200).json(result);
			}
		})
	}
	return {
		index: index
	}
})();