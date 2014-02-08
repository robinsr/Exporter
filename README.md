# Exporter

### Simple model exporter/manager for nodejs

====

## Usage


Main.js

```javascript
var exporter = require(__dirname+'/exporter');
var myExporter = new exporter();

module.exports.model1 = myExxporter.import(__dirname+"/model1")
```

model1.js

```javascript
module.exports = function(exporter){
	exporter.define("Model1",{
		// default properties here
	},{
		// class methods here
	}.{
		// instance methods here
	})
}
```

### Features

* Use methods from any model without creating circular dependencies
* Create instances of models using `create()`
* Instances have all the default properties and instance methods