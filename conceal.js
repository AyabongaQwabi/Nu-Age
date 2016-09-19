

module.exports = function(){
        var numero = require('./numero');
        var minx = require('./minx');
        var numerise = require('./numerise');
        var sequencer = new numero();
        var numeriser = new numerise();
        var minxer = new minx();

        this.conceal = function(text) {
           return sequencer.convert(sequencer.convert(minxer.minx(text)))
        }
        this.unseal = function(text) {
            return minxer.minx(sequencer.revert(numeriser.numerise(text)))
        }
}
/*
var conceal = require('./conceal')
var c = new conceal();
console.log(c.conceal('The story of my life ...'))
*/
