require('./config/passport');
require('./config/mongoose');
require('./services/pushNotifications');

var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes')();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', router);

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
