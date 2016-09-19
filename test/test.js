var conceal = require('./../conceal');
var assert = require('assert');

describe('Numero Text Converter', function() {
    it('should convert string to numerical sequence', function() {
        var concealer = new conceal();
        var mypassword = 'saf3key@word!'
        assert.notEqual((-1), concealer.conceal(mypassword).indexOf('+'))
        assert.equal(('a').length, concealer.conceal('a').length)
        assert.equal(concealer.conceal('z').split(' ').length, 2)

    })

    it('should revert numerical sequence to string/text', function() {
        var concealer = new conceal();
        var mypassword = 'securit@aya.com'
        var sequence = concealer.conceal(mypassword)
        assert.notEqual(mypassword, concealer.conceal(mypassword))
        assert.equal('securit@aya.com', concealer.unseal(sequence))
    })

})
