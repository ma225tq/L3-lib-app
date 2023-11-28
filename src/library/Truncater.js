export class Truncater {

	truncate(string, length) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
		if (typeof length !== 'number') {
			throw new Error('Length must be a number');
		}
		if (length <= 0) {
			throw new Error('Length must be a positive number');
		}
	
		let charCount = 0;
        let truncatedString = '';

        for (let char of string) {
            if (charCount >= length) break;
            truncatedString += char;
            if (char !== ' ') charCount++;
        }

        return truncatedString.trimEnd() + '...';
    }
	}







