
module.exports = function() {
    var dSt = {
        1: 'abc',
        2: 'def',
        3: 'ghi',
        4: 'jkl',
        5: 'mno',
        6: 'pqr',
        7: 'stu',
        8: 'vwx',
        9: 'yz'
    }

    function eC(a, c) {
        if (a.indexOf(c) != a.length - 1) {
            return ' ';
        }
        return '';
    }
    var s = this;
    this.ct = function(R) {
            var crs = R.split('');
            var ecg= '';
            crs.forEach(function(rtl) {
                rtl = rtl.toLowerCase();
                if (!isNaN(rtl)) { 
                    var cs = '';
                    for (var i = 0; i < parseInt(rtl); i++) {
                        cs += '+'
                    }
                    cs += eC(crs, rtl);
                    ecg+= cs;
                    return;
                }
                var F = false;
                for (nb in dSt) {
                    if (dSt[nb].indexOf(rtl) != -1) {
                        F = !F;
                        var code = nb.toString();
                        var rs = '';
                        for (var i = 0; i < dSt[nb].indexOf(rtl); i++) {
                            rs += (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
                        }
                        code += rs;
                        code += eC(crs, rtl);
                        ecg+= code;
                    }
                }
                if (!F) { 
                    ecg+= rtl;
                    ecg+= eC(crs, rtl);
                }
            })
            return ecg;
        }

    this.rWd = function(n) {

        var crs = n.split(' ');
        var dd = ''
        crs.forEach(function(nb) {
            if (nb.indexOf('+') != -1) {
                dd += nb.length
                return;
            }
            nb = nb.split('')
            var fme = dSt[nb[0]]
            if (fme != undefined) {
                var cr_ = fme.split('')[nb.length - 1]
                dd += cr_
            } else {
                dd += nb
            }
        })
        return dd;
    }
    this.rt = function(n) {
        var ws = n.split('  ');
        var o = '';
        ws.forEach(function(word) {

            if (ws.indexOf(word) != (ws.length - 1)) {
                o += s.rWd(word) + ' ';
            } else {
                o += s.rWd(word);
            }
        })
        return o
    }
}
