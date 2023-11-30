export class Truncater {

	truncate(string, length) {
		this.#validateInput(string, length);
		return string.slice(0, length) + '...';
	}

	#validateInput(string, length) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
		if (typeof length !== 'number') {
			throw new Error('Length must be a number');
		}
		if (length <= 0) {
			throw new Error('Length must be a positive number');
		}
		if (length >= string.length) {
			return string + '...';
		}
	}

}




