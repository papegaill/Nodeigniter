var fs = require('fs');

/*-----------------------------------------------------------
| directoryExists
|------------------------------------------------------------
|
| @param d (string) - directory to test
|
*/
var directoryExists = function(d){

	var dir = app.settings.controllerDirectory + '/' + d;
	
  try{
  	return fs.statSync(dir).isDirectory();
  } 
  catch(e){
  	return false;
  }
  
}

exports.directoryExists = directoryExists;