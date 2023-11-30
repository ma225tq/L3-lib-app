export class Remover {
	removeChar(string, charToRemove) {

		this.#validateInputForRemoveChar(string, charToRemove);

		let manipulatedString = '';

		for (let i = 0; i < string.length; i++) {
			if (string[i] !== charToRemove) {
				manipulatedString = manipulatedString.concat(string[i]);
			}
		}

		return manipulatedString;
	}

	removeLineBreaks(string) {
		this.#validateInput(string);
		return string.replace(/\r?\n|\r/g, ' ');
	}

	removeSpecialChars(string) {
		this.#validateInput(string);
		return string.replace(/[^\w\s]/gi, '');
	}

	removeWhiteSpaces(string) {
		this.#validateInput(string);
		return string.replace(/\s/g, '');
	}

	#validateInputForRemoveChar(string, charToRemove) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}

		if (typeof charToRemove !== 'string') {
			throw new Error('Character to remove must be a string');
		}
	}

	#validateInput(string) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
	}
}