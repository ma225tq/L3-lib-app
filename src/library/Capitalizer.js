export class Capitalizer {

	capitalizeFirstLetter(string) {
		this.#validateInput(string);
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}

	#validateInput(string) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
	}

}

