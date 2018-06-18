module.exports = function() {
    var nua = require('./.qry/nua');
    var mnx = require('./.qry/mnx');
    var ne = require('./.qry/ne');

    var sqc = new nua();
    var nr = new ne();
    var mnxr = new mnx();

    this.c = function(Q) {
        return sqc.ct(sqc.ct(mnxr.mnx(Q)))
    }
    this.u = function(Q) {
        return mnxr.mnx(sqc.rt(nr.ne(Q)))
    }
}
