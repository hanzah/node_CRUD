var Poster = require('../../models/poster');
var ApplicationPolicy = require('../../policies/application');
var PosterPolicy = require('../../policies/poster');

module.exports = (function(){
	function get(req, res){
		Poster.findById(req.params['id']).populate('posterType createdBy')
		.populate('invitees', 'firstName lastName').exec(function(err, poster){
			if(err){
				res.status(409).json(err);
			} else if(!poster) {
				res.status(404).json('Not found');
			} else {
				ApplicationPolicy(req, res, PosterPolicy.get(req.user, poster));
				res.status(200).json(poster);
			}
		});
	}

	function create(req, res){
		poster = new Poster(req.body['poster']);
		poster.createdBy = req.user._id;
		ApplicationPolicy(req, res, PosterPolicy.create(req.user, poster));
		poster.save(function(err, result){
			if(err){
				res.status(409).json(err);
			} else {
				res.status(201).json(result);
			}
		})
	}
	return {
		get: get,
		create: create
	}
})();