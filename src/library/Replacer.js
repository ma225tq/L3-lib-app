export class Replacer {
   
	replaceChar(string, charToReplace, newChar) {
		if (typeof string !== 'string') {
			throw new Error('string must be a string');
		}
    
		if (string.length === 0) {
			throw new Error('string must not be empty');
		}
    
		if (typeof charToReplace !== 'string') {
    
			throw new Error('charToReplace must be a string');
		}
		if (charToReplace.length !== 1) {
			throw new Error('charToReplace must be a single character');
		}
    
    
		if (typeof newChar !== 'string') {
			throw new Error('newChar must be a string');
		}
    
		if (newChar.length !== 1) {
			throw new Error('newChar must be a single character');
		}
    
		let manipulatedString = '';
    
		for (let i = 0; i < string.length; i++) {
			if (charToReplace.includes(string[i])) {
				manipulatedString += newChar;
			} else {
				manipulatedString += string[i];
			}
		}
    
		return manipulatedString;
	}

    
}