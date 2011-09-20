var dbLibrary = 'mongoskin';
var dbName = 'localhost/node-mvc';

var mongo = require(dbLibrary);
var db = mongo.db(dbName);

exports.db = db;