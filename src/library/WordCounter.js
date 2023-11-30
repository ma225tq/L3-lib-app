export class WordCounter {

	countWords(string) {
		this.#validateInput(string);
		return string.split(' ').length;
	}

	#validateInput(string){
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
		if (string.length === 0) {
			throw new Error('Input must not be empty');
		}
	}
	

}

