var models = require(__dirname+"/main");


// Use class methods

models.mod1.classMethod1();

// create an instance

var myMod1 = models.mod1.create();

// use instance methods

myMod1.instanceMethod1();

// mod1 can access mod2 anc viceversa

mod1.getAValFromMod2(); 