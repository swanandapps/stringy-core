// tests/textSpecializedOperations.test.js

import { similarity } from '../lib/textSpecializedOperations';

describe('similarity', () => {
	test('returns 1 for identical strings', () => {
		expect(similarity('hello', 'hello')).toBe(1);
	});

	test('returns 1 for two empty strings', () => {
		expect(similarity('', '')).toBe(1);
	});

	test('returns 0 for completely different strings of equal length', () => {
		expect(similarity('abc', 'xyz')).toBe(0);
	});

	test('returns a normalized score between 0 and 1 for partially similar strings', () => {
		// levenshteinDistance('kitten', 'sitting') === 3, maxLength === 7
		expect(similarity('kitten', 'sitting')).toBeCloseTo(1 - 3 / 7);
	});
});
