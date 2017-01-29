module.exports = function() {
    var nu_age_sequencer = require('./nu-age');
    var minx = require('./minx');
    var numerise = require('./numerise');
    var sequencer = new nu_age_sequencer();
    var numeriser = new numerise();
    var minxer = new minx();

    this.conceal = function(text) {
        return sequencer.convert(sequencer.convert(minxer.minx(text)))
    }
    this.unseal = function(text) {
        return minxer.minx(sequencer.revert(numeriser.numerise(text)))
    }
}
