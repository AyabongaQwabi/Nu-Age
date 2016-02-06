module.exports = function(){

	var digits = {1:'abc',2:'def',3:'ghi',4:'jkl',5:'mno',6:'pqr',7:'stu',8:'vwx',9:'yz'}
	function endChar(arr,chr){
			if(arr.indexOf(chr)!= arr.length-1){
				return '0';
			}
			return '';
	}
	this.convert = function(text){		
	    
		var characters = text.split('');
	    var encoded_msg='';
	    characters.forEach(function(letter){
			letter=letter.toLowerCase();
			if(!isNaN(letter)){
				var chars='';
				for(var i=0;i<parseInt(letter);i++)
				{
					chars+='+'
				}
				chars+=endChar(characters,letter);
				encoded_msg+=chars;
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
					code+=randoms;
					code+=endChar(characters,letter);
					encoded_msg+=code;
					
				}
				
			}
			if(!found){
				encoded_msg+=letter;
				encoded_msg+=endChar(characters,letter);
			}
			
		})
		return encoded_msg;
	}

	this.revert=function(numero){
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

}




