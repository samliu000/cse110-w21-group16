var chai = require('chai');
var addition = require('../addition.js');
var assert = chai.assert;
describe("Addition", function(){
	it("adds 1+2 parameters", function(){
	assert.equal(addition.testAddition(1,2),3);
	})
	it("does not accept string as input", function(){
		assert.equal(addition.testAddition("hello", "goodbye"), -1);
	})

});
