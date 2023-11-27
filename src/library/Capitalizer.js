export class Capitalizer {

	capitalizeFirstLetter(string) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}

}


