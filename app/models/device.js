var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var deviceSchema = new Schema({
	token: { type: String, required: true },
	platform: { type: String, required: true }
},
{
    timestamps: true
});

deviceSchema.pre('remove', function(next) {
	var device = this;
	User.update({}, {'$pullAll': { devices: [device._id] }}, { multi: true }, function(err, result){
		next();
	});
});

module.exports = mongoose.model('Device', deviceSchema);