var User = require('../../models/user');
var Poster = require('../../models/poster');
var escapeStringRegexp = require('escape-string-regexp');
var ApplicationPolicy = require('../../policies/application');
var UserPolicy = require('../../policies/user');
var PosterRendererService = require('../../services/posterRenderer');

module.exports = (function(){
	function index(req, res){
		query = req.query['query'] ? escapeStringRegexp(req.query['query']) : '';
		limit = req.query['limit'] ? parseInt(req.query['limit']) : 10;
		skip = req.query['skip'] ? parseInt(req.query['skip']) : 0;

		User.find({name: new RegExp('.*'+query+'.*', 'i')}).skip(skip).limit(limit)
		.select('_id name profilePhoto').exec(function(err, result){
			if(err){
				res.status(500).json(err);
			} else {
				res.status(200).json(result);
			}
		})
	}

	function futurePosters(req, res){
		ApplicationPolicy(req, res, UserPolicy.futurePosters(req.user, req.record));
		req.user.lastVisitedUsers.unshift(req.record._id);
		req.user.save(function(err, result){});
		PosterRendererService.findFuture(req, res, {createdBy: req.record._id});
	}

	return {
		index: index,
		futurePosters: futurePosters
	}
})();