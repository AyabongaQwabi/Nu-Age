module.exports = function(){
    var numero = require('./numero')
    this.numerise = function(str) {

        str = str.split(' ');
        var converted='';
        //console.log('\n\n'+str)
        str.forEach( function(rep) {
            if(rep!=''){
                //console.log(rep+'  is not zero')
                if(rep.indexOf('+')!=(-1)){
                    //console.log('represents a number ')
                    converted+=(new String(rep.length));
                    //console.log('thus converted = '+ converted)

                }else{
                    console.log('does not represent a number')
                    converted+=rep;
                    //console.log('thus converted = '+converted)
                }
            }
            else{converted+=' '}
        })
        ////console.log(str)
        //console.log('\n\n\tConverted\n')
        return converted;
    }
}

/*var sequencer = new numero();
var classic = sequencer.convert('194056102001026036025017028042309207')
numersise(classic)
//numersise("+++++++0++++0+++++++++0+++++00+0++++++0++00000+0++++++0++0+++000++++++0+++++0++0+000+++++++0++++++++0++0++++00+++0++0+++++++++000++0+0")
*/
