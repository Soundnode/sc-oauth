var express = require('express')
    , morgan = require('morgan')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , app = express()
    , port = process.env.PORT || 3700;

app.use(express.static(__dirname + '/views')); // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser());                      // pull information from html in POST
app.use(methodOverride());                  // simulate DELETE and PUT

// call the Router
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index.html');
});

router.get('/callback', function(req, res, next) {
    
});

router.post('/callback', function(req, res, next) {
    // 
});

// call our router we just created
app.use('/', router);

app.listen(port);
console.log('Magic happens on port', port);