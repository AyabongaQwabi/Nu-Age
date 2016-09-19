var minx = require('./minx')
module.exports = function() {
    var minxer = new minx();
    var digits = {
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

    function endChar(arr, chr) {
        if (arr.indexOf(chr) != arr.length - 1) {
            return ' ';
        }
        return '';
    }
    var self = this;
    /** Convert string / text to numerical sequence **/
    this.convert = function(text) {
            var characters = text.split('');
            var encoded_msg = '';
            characters.forEach(function(letter) {
                letter = letter.toLowerCase();
                if (!isNaN(letter)) { // if the its a number in the string use '+' to symbolise the digit e.g if 2 ++ or 3 +++
                    var chars = '';
                    for (var i = 0; i < parseInt(letter); i++) {
                        chars += '+'
                    }
                    chars += endChar(characters, letter);
                    encoded_msg += chars;
                    return;
                }
                var found = false;
                for (number in digits) {
                    if (digits[number].indexOf(letter) != -1) {
                        found = !found;
                        var code = number.toString();
                        var randoms = '';
                        for (var i = 0; i < digits[number].indexOf(letter); i++) {
                            randoms += (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
                        }
                        code += randoms;
                        code += endChar(characters, letter);
                        encoded_msg += code;
                    }
                }
                if (!found) { //if the letter is not a digit i.e a char e.g @ or % just add it as it is
                    encoded_msg += letter;
                    encoded_msg += endChar(characters, letter);
                }
            })
            return encoded_msg;
        }
        /** revert numerical sequence back to a string **/
    this.revertWord = function(numero) {

        var characters = numero.split(' ');
        var decoded_word = ''
        characters.forEach(function(number) {
            if (number.indexOf('+') != -1) {
                decoded_word += number.length
                return;
            }
            number = number.split('')
            var frame = digits[number[0]]
            if (frame != undefined) {
                var char_ = frame.split('')[number.length - 1]
                decoded_word += char_
            } else {
                decoded_word += number
            }
        })
        return decoded_word;
    }
    this.revert = function(numero) {
        var words = numero.split('  ');
        var outcome = '';
        words.forEach(function(word) {

            if (words.indexOf(word) != (words.length - 1)) {
                outcome += self.revertWord(word) + ' ';
            } else {
                outcome += self.revertWord(word);
            }
        })
        return outcome
    }
}
