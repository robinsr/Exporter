var util = require('util')

function a(){}

a.prototype.define = function(objName, defaultProps, classMethods, instanceMethods){
	var returnObj = classMethods;
	returnObj.create = function(){
		var defaultCopy = {
			name: { value: objName }
		}
		for (n in defaultProps){
			defaultCopy[n] = { value: clone(defaultProps[n]), enumerable: true, writable: true }
		}
		return Object.create(instanceMethods || {},defaultCopy)
	}
	returnObj.load = function(options){
		var defaultCopy = {
			name: { value: objName }
		}
		for (n in defaultProps){
			defaultCopy[n] = { value: clone(options[n]) || defaultProps[n], enumerable: true, writable: true }
		}
		return Object.create(instanceMethods || {},defaultCopy)
	}
	return returnObj
}

a.prototype.import = function(path){
	var newMod = require(path);;
	return newMod(this);
}

module.exports = a;

function clone(obj){
// return primitives
	if(obj == null || typeof(obj) != 'object') return obj;
	// create a blank obkect {} or array []
	var temp = obj.constructor();
	// copy keys over recursive
	for(var key in obj)
		temp[key] = clone(obj[key]);
	return temp;
}