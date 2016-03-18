/// <reference path="types/express.d.ts" />
/// <reference path="types/mongoose.d.ts" />
/// <reference path="types/node.d.ts" />
var express = require("express");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var nconf = require('nconf');
var dungeon = require("./dungeon/dungeon.route");
var player = require("./player/player.route");
var artifact = require("./artifact/artifact.route");
var room = require("./room/room.route");
var app = express();
nconf.argv().env().file({ file: __dirname + '/settings.json' });
// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Pass to next layer of middleware
    next();
});
var lpath = __dirname.substring(0, __dirname.indexOf("server"));
console.log(lpath);
// ALL ROUTES HERE!!!!
app.post('/api/dungeons', dungeon.save);
app.get('/api/dungeons', dungeon.load);
app.get('/api/dungeons/:id', dungeon.loadById);
console.log('player');
app.get('/api/dungeons/:id/players/', player.loadByDungeonId);
app.post('/api/players', player.save);
app.get('/api/players', player.load);
app.get('/api/players/:id', player.loadById);
app.post('/api/players/:id', player.copyFromTemplate);
console.log('rooms');
app.get('/api/dungeons/:id/rooms/', room.loadByDungeonId);
app.post('/api/rooms', room.save);
app.get('/api/rooms', room.load);
app.get('/api/rooms/:id', room.loadById);
app.get('/api/rooms/:id/players', player.loadByRoomId);
console.log('slartifarts');
app.get('/api/dungeons/:id/artifacts/', artifact.loadByDungeonId);
app.get('/api/room/:id/artifacts/', artifact.loadByRoomId);
app.post('/api/artifacts', artifact.save);
app.get('/api/artifacts', artifact.load);
app.get('/api/artifacts/:id', artifact.loadById);
console.log('routes done');
//app.get('/projects', project.list);
// NO ROUTES BELOW HERE !!!!
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.log("inside 404");
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        console.log("inside 500");
        console.log(err.message);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log("inside 500b");
    console.log(err.message);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//var mongoose = require('mongoose');
var db = nconf.get('username') + ':' + nconf.get('password') + '@' + nconf.get('server') + ':' + nconf.get('port');
//mongoose.connect('mongodb://AdvReaderWriter:PH3AKYIHY0FBrer@localhost:27017/advent1', function(err: any) {
mongoose.connect('mongodb://' + db + '/advent1', function (err) {
    if (err) {
        console.log('connection error', err);
    }
    else {
        console.log('connection successful');
    }
});
module.exports = app;
//startup.startup();
console.log("pong");
//# sourceMappingURL=app.js.map