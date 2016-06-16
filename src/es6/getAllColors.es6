const MIN_LENGTH = 3;
const TOTAL_LENGTH = 6;
const CHARACTERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

export default function getAllColors(inputWord) {
	// Check for errors
	if (inputWord.length < MIN_LENGTH) {
		return `Your word must contain at least ${MIN_LENGTH} characters`;
	} else if (inputWord.length > TOTAL_LENGTH) {
		return `Your word must contain at most ${TOTAL_LENGTH} characters`;
	} else if (!/^[0-9a-f]+$/i.test(inputWord)) {
		return 'Your word may only use hexadecimal digits (0-9 and A-F)';
	}

	const word = inputWord.toUpperCase();
	const colors = [];

	for (let pos = 0; pos + word.length <= 6; pos++) {
		let results = [''];
		for (let i = 0; i + word.length <= 6; i++) {
			if (i === pos) {
				// Insert the word
				for (let j = 0; j < results.length; j++) {
					results[j] = results[j] + word;
				}
			} else {
				// Create variations for each possible character
				const newResults = [];
				while (results.length) {
					const r = results.pop();
					for (let charCode = 0; charCode < 16; charCode++) {
						newResults.push(r + CHARACTERS[charCode]);
					}
				}
				results = newResults;
			}
		}

		Array.prototype.push.apply(colors, results);
	}

	return colors;
}
