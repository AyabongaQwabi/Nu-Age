module.exports = function() {
    var self = this;
    this.minxWord = function(text) {
        var length = text.length;
        switch (length) {
            case (1):
                return text;
            case (2):
                return text.substring(1) + text.substring(0, 1);
            case (3):
                return text.substring(2) + text.substring(1, 2) + text.substring(0, 1)
            case (4):
                text = text.split('');
                return text[0] + text[3] + text[2] + text[1];
            default:
                text = text.split('');
                if (length % 2 == 0) {
                    var newtext = text[text.length - 1]
                    var lastchar = text[0]
                    for (var i = 1; i != (text.length - 1); i += 2) {
                        newtext += text[i + 1]
                        newtext += text[i]
                    }
                    newtext += lastchar;
                    return newtext;
                } else {
                    var newtext = text[text.length - 1]
                    var lastchar = text[text.length - 2] + text[0]
                    for (var i = 1; i != (text.length - 2); i += 2) {
                        newtext += text[i + 1]
                        newtext += text[i]
                    }
                    newtext += lastchar;
                    return newtext;
                }
        }
    }
    this.minx = function(sentence) {
        sentence = sentence.split(' ')
        if (sentence[sentence.length - 1] == '') {
            sentence = sentence.slice(0, sentence.length - 1)
        }
        var outcome = '';
        sentence.forEach(function(word) {
            var unminxed = word
            word = self.minxWord(word)
            if (sentence.indexOf(unminxed) != (sentence.length - 1)) {
                outcome += word + ' ';
            } else {
                outcome += word;
            }
            return;
        })
        return outcome;
    }


}
