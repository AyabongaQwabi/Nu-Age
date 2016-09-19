module.exports = function() {
    var numero = require('./numero')
    this.numerise = function(str) {
        str = str.split(' ');
        var converted = '';
        str.forEach(function(rep) {
            if (rep != '') {
                if (rep.indexOf('+') != (-1)) {
                    converted += (new String(rep.length));

                } else {
                    converted += rep;
                }
            } else {
                converted += ' '
            }
        })
        return converted;
    }
}
