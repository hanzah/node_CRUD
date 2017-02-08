var User = require('../../models/user');
var Poster = require('../../models/poster');
var Device = require('../../models/device');
var _ = require('lodash');
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

	function createDevice(req, res){
		if(ApplicationPolicy(req, res, UserPolicy.createDevice(req.user, req.record))){ return; }
		console.log(req.body)
		device = new Device(req.body['device']);
		Device.find({token: device.token}).then(function(results){
			_.each(results, function(item){
				item.remove();
			});
		}).then(function(){
			device.save(function(err, deviceResult){
				if(err){
					res.status(500).json(err);
				}else{
					req.user.devices.push(deviceResult);
					req.user.save(function(err, result){
						if(err){
							res.status(500).json(err);
						}else{
							res.status(201).json(deviceResult);
						}
					});
				}
			});
		});
	}

	return {
		index: index,
		futurePosters: futurePosters,
		createDevice: createDevice
	}
})();