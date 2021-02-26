/**var chai = require('chai');
var addition = require('../addition.js');
var assert = chai.assert;
describe("Addition", function(){
	it("adds 1+2 parameters", function(){
	assert.equal(addition.testAddition(1,2),3);
	});
	it("does not accept string as input", function(){
		assert.equal(addition.testAddition("hello", "goodbye"), -1);
	});

});
**/

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});