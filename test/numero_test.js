var numero = require('../numero');
var sequencer = new numero();
 var mypassword = 'my email is ayabonga@projectcodex.co  I live in 1541'
//var mypassword = 'i am aya'
var seqd = sequencer.convert(mypassword)
console.log(seqd)
console.log(sequencer.revert(seqd))
