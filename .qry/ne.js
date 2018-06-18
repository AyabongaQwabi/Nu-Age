module.exports = function() {
    this.ne = function(R) {
        R = R.split(' ');
        var ctd = '';
        R.forEach(function(pr) {
            if (pr != '') {
                if (pr.indexOf('+') != (-1)) {
                    ctd += (new String(pr.length));

                } else {
                    ctd += pr;
                }
            } else {
                ctd += ' '
            }
        })
        return ctd;
    }
}
