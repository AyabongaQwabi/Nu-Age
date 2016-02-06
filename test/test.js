var numero = require('../numero');
var assert = require('assert');

describe('Numero Text Converter',function(){
	it('should convert string to numerical sequence',function(){

		var sequencer = new numero();
		var mypassword = 'securit@s11sky'
		assert.equal(('702301830718063803810760@070+0+0704709').indexOf('@'),sequencer.convert(mypassword).indexOf('@'))
		assert.equal(('702301830718063803810760@070+0+0704709').length,sequencer.convert(mypassword).length)
		assert.equal(('702301830718063803810760@070+0+0704709').substring(5,6),sequencer.convert(mypassword).substring(5,6))
	})

	it('should revert numerical sequence to string/text',function(){
		var sequencer = new numero();
		var mypassword = 'securit@s11sky'
		var sequence = sequencer.convert(mypassword)
		assert.equal(mypassword,sequencer.revert('702301830718063803810760@070+0+0704709'))
		assert.equal('securit@s11sky',sequencer.revert(sequence))
	})
	
})