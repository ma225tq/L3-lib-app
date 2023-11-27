export class Mover {

	moveChar(string, charToMove, steps, direction) {
		if (typeof string !== 'string') {
			throw new Error('Input must be a string');
		}
	
		if (typeof charToMove !== 'string') {
			throw new Error('Character to move must be a string');
		}
	
		if (typeof steps !== 'number') {
			throw new Error('Steps must be a number');
		}
	
		if (steps <= 0) {
			throw new Error('Steps must be a positive number');
		}
	
		if (typeof direction !== 'string') {
			throw new Error('Direction must be a string');
		}
	
		let result = string.split('');
		const indices = [];
	
		for (let i = 0; i < result.length; i++) {
			if (result[i] === charToMove) {
				indices.push(i);
			}
		}
	
		if (direction === 'right') {
			for (let i = indices.length - 1; i >= 0; i--) {
				let newIndex = indices[i] + steps;
				if (newIndex > result.length - 1) newIndex = result.length - 1;
	
				result.splice(newIndex, 0, result.splice(indices[i], 1)[0]);
			}
		} else if (direction === 'left') {
			for (let i = 0; i < indices.length; i++) {
				let newIndex = indices[i] - steps;
				if (newIndex < 0) newIndex = 0;
	
				result.splice(newIndex, 0, result.splice(indices[i], 1)[0]);
			}
		} else {
			throw new Error('Direction must be either "left" or "right"');
		}
	
		return result.join('');
	}

} 
