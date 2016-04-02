var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash');

var posterSchema = new Schema({
	location: { type: String, required: true },
	date: { type: Date, required: true },
	description: { type: String},
	posterType: {type: mongoose.Schema.Types.ObjectId, ref: 'PosterType', required: true},
	createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	invitees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
},
{
    timestamps: true
});

posterSchema.pre('save', function(next) {
	var poster = this;
	poster.invitees = _.uniqWith(poster.invitees, _.isEqual);
	next();
});

module.exports = mongoose.model('Poster', posterSchema);