require('./config/passport');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes')();
var app = express();

mongoose.connect(process.env.MONGO || 'mongodb://db:27017/meetup', function(err){
	if(err){
		console.log('Mongo connection error!');
		console.log(err);
	}else{
		console.log('Mongo connected!');
	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', router);

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
