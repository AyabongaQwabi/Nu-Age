var digits = {
					1:'abc',
					2:'def',
					3:'ghi',
					4:'jkl',
					5:'mno',
					6:'pqr',
					7:'stu',
					8:'vwx',
					9:'yz'
				}
function encode_word(text){
	var characters = text.split('');
    var encoded_msg=''
    //console.log(characters)
    characters.forEach(function(letter){
		letter=letter.toLowerCase();
		if(!isNaN(letter)){
			var chars='';
			for(var i=0;i<parseInt(letter);i++)
			{
				chars+='+'
			}
			if(characters.indexOf(letter)!= characters.length-1){
				encoded_msg+=(chars+'0');
			}
			else{
				encoded_msg+=chars;
			}	
			return;
		}
		var found=false;
		for(number in digits){
			if(digits[number].indexOf(letter)!=-1){
				found=!found;
				var code = number.toString();
				var randoms='';
				for(var i=0; i<digits[number].indexOf(letter);i++)
				{
					randoms+=(Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
				}
				code+=randoms
				if(characters.indexOf(letter)!= characters.length-1){
					encoded_msg+=(code+'0');
				}
				else{
					
					encoded_msg+=code;
				}
				
			}
			
		}
		if(!found){
			if(characters.indexOf(letter)!= characters.length-1){
				encoded_msg+=(letter+'0');
			}
			else{
				encoded_msg+=letter;
			}		
		}
		
	})
	return encoded_msg;
}
function decode_word(numero){
	var characters=numero.split('0');
	console.log(characters)
	var decoded_word=''
	characters.forEach(function(number){
		if(number.indexOf('+')!=-1){
			decoded_word+=number.length
			return;
		}
		number =number.split('')
		var frame = digits[number[0]]
		if(frame!=undefined){
			var char_=frame.split('')[number.length-1]
			decoded_word+=char_	
		}
		else{
			decoded_word+=number

		}
		
	})
	return decoded_word
}


console.log('aya@projectcodex.co')
var already = encode_word('aya1993@projectcodex.co')
console.log(already+'\n\n')

console.log(decode_word(already)+'\n\n')