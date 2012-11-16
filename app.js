/**
 *  Module dependencies.
 */
var express     = require('express')
  , routes      = require('./routes')
  , modules     = require('./modules')
  , controllers = require('./controllers')
  , http        = require('http')
  , path        = require('path')
  , sio         = require('socket.io');

/**
 *  Configuration and Middleware.
 */
 
 //Edit 
var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({'secret': '326-project'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/**
 *  Routes.
 */
app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
