var numero = require('./numero');
var minx = require('./minx');
var numersie = require('./numerise');

var sequencer = new numero();
var numeriser = new numerise();
var minxer = new minxer();
var text ="Where are you now?"

//Conversion
console.log("Converting")
text = minxer.minx(text)
console.log('minxed: '+text)
text = sequencer.convert(text)
console.log('Sequenced: '+text)
text = numerise('Numerised: '+text)

