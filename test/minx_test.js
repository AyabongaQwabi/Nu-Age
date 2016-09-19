var minx = require('./minx')
var minxer = new minx();
console.log(minxer.minxWord('is'))
var converted =minxer.minxSentence('freewill is power from the sky')
console.log('('+converted+')')
var averted = minxer.minxSentence(converted)
console.log(averted)