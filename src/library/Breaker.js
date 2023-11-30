export class Breaker {
	
	insertLineBreakAfterEachWord(string) {
		this.#validateInput(string);
		return string.split(' ').join('\n');
	}

	#validateInput(string){
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
	}
	
} 