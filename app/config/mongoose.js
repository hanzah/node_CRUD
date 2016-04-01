var mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGO || 'mongodb://localhost:27017/meetup', function(err){
	if(err){
		console.log('Mongo connection error!');
		console.log(err);
	}else{
		console.log('Mongo connected!');
	}
});