var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var posterTypeSchema = new Schema({
	name: String,
	photo: { type: String, default: 'default_url' },
	icon: { type: String, default: 'default_url' }
},
{
    timestamps: true
});

module.exports = mongoose.model('PosterType', posterTypeSchema);