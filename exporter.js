function a(){}

a.prototype.define = function(objName, defaultProps, classMethods, instanceMethods){
	var returnObj = classMethods;
	returnObj.create = function(){
		var defaultCopy = {
			name: {
				value: objName
			}
		}
		for (n in defaultProps){
			defaultCopy[n] = {
				value: defaultProps[n]
			}
		}
		return Object.create(instanceMethods || {},defaultCopy)
	}
	return returnObj
}

a.prototype.import = function(path){
	var newMod = require(path);;
	return newMod(this);
}

module.exports = a