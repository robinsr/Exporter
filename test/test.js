var assert = require("assert");
var models = require(__dirname+"/../examples/main.js")


describe("mod1",function(){
	describe("#classMethod1",function(){
		it("Should return 'Success'",function(){
			assert.equal("Success", models.mod1.classMethod1());
		});
	});
	describe("#classMethod2",function(){
		it("Should return undefined",function(){
			assert.equal('undefined', typeof models.mod1.classMethod2());
		});
	});
	describe("#getAValFromMod2",function(){
		it("Should return 'Success'",function(){
			assert.equal('Success', models.mod1.getAValFromMod2());
		});
	});
	describe("#create",function(){
		it("Should return a new mod1 with instance methods",function(){
			var myMod1 = models.mod1.create();
			assert.equal(typeof myMod1, "object");
			assert.equal(typeof myMod1.defaultFunction,"function");
			assert.equal(myMod1.instanceMethod1(), "MOD1");
			assert.equal(myMod1.defaultVal, "Hello");
			assert.equal(myMod1.name, "MOD1");
		});
	});
	describe("#load()",function(){
		it("Should load the options object into a new instance",function(){
			var options = {
				defaultVal: "I am a loaded object",
				defaultFunction: function(){
					return "I am a loaded function"
				}
			}
			var myMod = models.mod1.load(options);
			assert.equal(myMod.defaultVal, "I am a loaded object");
			assert.equal(myMod.defaultFunction(), "I am a loaded function");
		});
		it("Should load the defaul properties",function(){
			var myMod = models.mod1.load({});
			assert.equal(myMod.defaultVal, "Hello")
		});
	});
});

describe("mod2",function(){
	describe("#instanceMethod",function(){
		it("Should return the default value for this model",function(){
			var myMod2 = models.mod2.create();
			assert.equal(myMod2.defaultVal, "World");
		});
	});
});

describe("Reference error",function(){
	it("Should make objects that do not share references",function(){
		var mod1 = models.mod1.create();
		var mod2 = models.mod1.create();

		// a change in mod1's deep object should not change mod2
		mod1.deep.nested.obj = "deep message";
		assert.notEqual(mod1.deep.nested.obj, mod2.deep.nested.obj);


	})
})
