// tests/textCaseManipulation.test.js

import {
	kebabCase,
	pascalCase,
	constantCase,
	slugify,
} from '../lib/textCaseManipulation';

describe('kebabCase', () => {
	test('converts a space-separated string to kebab-case', () => {
		expect(kebabCase('Hello World')).toBe('hello-world');
	});

	test('handles multiple spaces and mixed case', () => {
		expect(kebabCase('Some   MIXED Case String')).toBe(
			'some-mixed-case-string'
		);
	});

	test('returns an empty string for an empty string', () => {
		expect(kebabCase('')).toBe('');
	});

	test('returns an empty string for non-string input', () => {
		expect(kebabCase(123)).toBe('');
	});
});

describe('pascalCase', () => {
	test('converts a lowercase space-separated string to PascalCase', () => {
		expect(pascalCase('hello world')).toBe('HelloWorld');
	});

	test('handles a hyphenated/underscored string', () => {
		expect(pascalCase('hello-world_example')).toBe('HelloWorldExample');
	});

	test('returns an empty string for an empty string', () => {
		expect(pascalCase('')).toBe('');
	});

	test('returns an empty string for non-string input', () => {
		expect(pascalCase(123)).toBe('');
	});
});

describe('constantCase', () => {
	test('converts a lowercase space-separated string to CONSTANT_CASE', () => {
		expect(constantCase('hello world')).toBe('HELLO_WORLD');
	});

	test('handles mixed separators and case', () => {
		expect(constantCase('Hello-world_example')).toBe('HELLO_WORLD_EXAMPLE');
	});

	test('returns an empty string for an empty string', () => {
		expect(constantCase('')).toBe('');
	});

	test('returns an empty string for non-string input', () => {
		expect(constantCase(123)).toBe('');
	});
});

describe('slugify', () => {
	test('converts a sentence with punctuation into a URL-safe slug', () => {
		expect(slugify('Hello, World! 123')).toBe('hello-world-123');
	});

	test('collapses repeated whitespace and dashes', () => {
		expect(slugify('  Hello   --  World  ')).toBe('hello-world');
	});

	test('returns an empty string for an empty string', () => {
		expect(slugify('')).toBe('');
	});

	test('returns an empty string for non-string input', () => {
		expect(slugify(123)).toBe('');
	});
});
