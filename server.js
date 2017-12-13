var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var vehicel = require('./app/models/vehicle');

//configure app for bodyParser()
//lets us grab the data from the body of POST
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// Set up port for server to listen on
var port = process.env.PORT || 3000;

//Connect to DB
mongoose.connect('mongodb://localhost:27017/codealong');

//API Routes
var router = express.Router();

//Routes will all be prefixed with /api
app.use('/api', router);

//

//Test Route
router.get('/', function(req, res){
    res.json({message: 'Welcome to our API!'});
});

//Fire up server
app.listen(port);
//print friendly message to console
console.log('Server listing to port ' + port);
