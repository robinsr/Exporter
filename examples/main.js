var exporter = require(__dirname+"/../exporter");

var myExporter = new exporter();


var mod2 = myExporter.import(__dirname+"/mod2");
module.exports.mod2 = mod2;

var mod1 = myExporter.import(__dirname+"/mod1");
module.exports.mod1 = mod1;


