var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash');

var userSchema = new Schema({
	firstName: String,
	lastName: String,
	name: String,
	profilePhoto: { type: String, default: 'default_url' },
	email: { type: String, unique: true, sparse: true },
	password: String,
	facebookId: { type: String, unique: true, sparse: true },
	admin: { type: Boolean, default: false },
	lastVisitedUsers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
},
{
    timestamps: true
});

userSchema.pre('save', function(next) {
	var user = this;
	if(user.lastVisitedUsers){
		user.lastVisitedUsers = _.uniqWith(user.lastVisitedUsers, _.isEqual).splice(0, 5);
	}
	next();
});

module.exports = mongoose.model('User', userSchema);