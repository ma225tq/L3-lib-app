export class WordCounter {

	countWords(string) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
		if (string.length === 0) {
			throw new Error('Input must not be empty');
		}
		return string.split(' ').length;
	}
	

}


