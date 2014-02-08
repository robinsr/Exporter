var db = require(__dirname+"/main")

module.exports = function(exporter) {
    return exporter.define("MOD2",{
    	defaultVal: "World"
    },{
    	// class methods
		getValue:function(){
			return "Success"
		}
	},{
		// instance methods
		instanceMethod: function(){
			return this.defaultVal
		}
	})
}