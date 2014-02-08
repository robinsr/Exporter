var db = require(__dirname+"/main")

module.exports = function(exporter) {
    return exporter.define("MOD1",{
    	defaultVal: "Hello",
    	defaultFunction: function(){
    		console.log("Im not sure what I am")
    	}
    },{
    	// class methods
		classMethod1:function(){
			return "Success"
		},
		classMethod2:function(){
			return this.name
		},
		classMethod3:function(){
			// accesses module 2
			return db.mod2.getValue()
		}
	},{
		// instance methods
		instanceMethod1: function(){
			return this.name
		}
	})
}


//mods.mod2.method1()