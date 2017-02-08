var User = require('../models/user');
var Poster = require('../models/poster');
var _ = require('lodash');
var redis = require('redis').createClient(process.env.REDIS || 'redis://localhost:6379');
//var apns = require('./apns');
var gcm = require('./gcm');

function filterTokens(user, apnsCallback, gcmCallback){
	var apns_tokens = _.chain(user.devices).filter(function(device){ return device.platform == 'apns'}).map(function(device){ return device.token; }).value();
	console.log(apns_tokens)
	if(apns_tokens.length > 0){
		//apnsCallback(apns_tokens);
	}
	gcm_tokens = _.chain(user.devices).filter(function(device){ return device.platform == 'gcm'}).map(function(device){ return device.token; }).value();
	console.log(gcm_tokens)
	if(gcm_tokens.length > 0){
		gcmCallback(gcm_tokens);
	}
}

redis.on('message', function(channel, message){
	payload = JSON.parse(message);
	if(channel === 'createdPoster'){
		Poster.findById(payload.posterId).populate({path: 'invitees', populate: { path: 'devices'}}).exec(function(err, poster){
			if(poster){
				_.each(poster.invitees, function(user){
					filterTokens(user, function(tokens){ //apns.sendInviteNotification(tokens); 
					}, function(tokens){ gcm.sendInviteNotification(tokens); })
				});
			}
		});
	}
});

redis.subscribe('createdPoster');