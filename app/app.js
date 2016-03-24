var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://db:27017/meetup', function(err){
	if(err){
		console.log('Mongo connection error!');
		console.log(err);
	}else{
		console.log('Mongo connected!');
	}
});

app.get('/', function (req, res) {
  res.send('Hello World! Restarted8');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
