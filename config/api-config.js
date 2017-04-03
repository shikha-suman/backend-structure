var express = require("express");
var app = express();

var path  = require('path');

//var cors = require('cors');
var mongoose =  require('mongoose');
var config = require('./database');
//var bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');
var UserRoute = require('../app/routes/user.route');
// const User = require('./server/models/user-model');
// var responseTime = require('response-time');
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
    console.log("connected to databse"+config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log("connected to databse"+err);
});
 

// app.use(responseTime);

var router = express.Router();

//cors middle ware
//app.use(cors());

//set static folder
// app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
//app.use(bodyParser.json());

app.use(busboyBodyParser({ limit: '5mb' }));
// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(bodyParser.urlencoded({ limit: '10mb', "extended": false }));
// corsFilter(router);
app.use('/app',router);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
//app.use('/users', users);

// // // index route
// app.get('/', (req,res) => {
//     res.send('Invalid endpoint');
// });

//


var ApiConfig = {
  app: app
}

UserRoute.init(router);

console.log("inside app");
module.exports = ApiConfig;


//start server
// http.createServer(app).listen(port,()=>{
//     console.log("server connected to port"+port);