export class Orderer {
	orderAlphabetically(string) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
	
		return string.split(' ').sort().join(' ');
	}

	makeStringNumbered(string) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
	
		return string.split(' ')
			.map((word, index) => `${index + 1}. ${word}`)
			.join('\n');
	}
}
