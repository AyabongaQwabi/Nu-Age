module.exports = function() {
    var s = this;
    this.mWd = function(T) {
        var L = T.length;
        switch (L) {
            case (1):
                return T;
            case (2):
                return T.substring(1) + T.substring(0, 1);
            case (3):
                return T.substring(2) + T.substring(1, 2) + T.substring(0, 1)
            case (4):
                T = T.split('');
                return T[0] + T[3] + T[2] + T[1];
            default:
                T = T.split('');
                if (L % 2 == 0) {
                    var nT = T[T.length - 1]
                    var lC = T[0]
                    for (var i = 1; i != (T.length - 1); i += 2) {
                        nT += T[i + 1]
                        nT += T[i]
                    }
                    nT += lC;
                    return nT;
                } else {
                    var nT = T[T.length - 1]
                    var lC = T[T.length - 2] + T[0]
                    for (var i = 1; i != (T.length - 2); i += 2) {
                        nT += T[i + 1]
                        nT += T[i]
                    }
                    nT += lC;
                    return nT;
                }
        }
    }
    this.mnx = function(S) {
        S = S.split(' ')
        if (S[S.length - 1] == '') {
            S = S.slice(0, S.length - 1)
        }
        var OT = '';
        S.forEach(function(w) {
            var und = w
            w = s.mWd(w)
            if (S.indexOf(und) != (S.length - 1)) {
                OT += w + ' ';
            } else {
                OT += w;
            }
            return;
        })
        return OT;
    }


}
