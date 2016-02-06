var numero = require('./numero')
var converter = new numero();


var already = converter.convert('aya1993@projectcodex.co')
console.log(already+'\n\n')

console.log(converter.revert(already)+'\n\n')