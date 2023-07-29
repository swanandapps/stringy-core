// tests/textAnalysisAndValidation.test.js

import {
	isNumeric,
	isAlpha,
	isAlphanumeric,
} from '../lib/textAnalysisAndValidation';

describe('isNumeric', () => {
	test('returns true for a string of only digits', () => {
		expect(isNumeric('12345')).toBe(true);
	});

	test('returns true for a decimal number string', () => {
		expect(isNumeric('12.5')).toBe(true);
	});

	test('returns false for a string containing letters', () => {
		expect(isNumeric('123a')).toBe(false);
	});

	test('returns false for an empty string', () => {
		expect(isNumeric('')).toBe(false);
	});

	test('returns false for non-string input', () => {
		expect(isNumeric(12345)).toBe(false);
	});
});

describe('isAlpha', () => {
	test('returns true for a string of only letters', () => {
		expect(isAlpha('HelloWorld')).toBe(true);
	});

	test('returns false for a string containing digits', () => {
		expect(isAlpha('Hello123')).toBe(false);
	});

	test('returns false for a string containing spaces', () => {
		expect(isAlpha('Hello World')).toBe(false);
	});

	test('returns false for an empty string', () => {
		expect(isAlpha('')).toBe(false);
	});

	test('returns false for non-string input', () => {
		expect(isAlpha(null)).toBe(false);
	});
});

describe('isAlphanumeric', () => {
	test('returns true for a string of letters and digits', () => {
		expect(isAlphanumeric('Hello123')).toBe(true);
	});

	test('returns false for a string containing spaces', () => {
		expect(isAlphanumeric('Hello 123')).toBe(false);
	});

	test('returns false for a string containing punctuation', () => {
		expect(isAlphanumeric('Hello123!')).toBe(false);
	});

	test('returns false for an empty string', () => {
		expect(isAlphanumeric('')).toBe(false);
	});

	test('returns false for non-string input', () => {
		expect(isAlphanumeric(undefined)).toBe(false);
	});
});
