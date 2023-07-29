// tests/textMaskingAndSecurity.test.js

import { escapeHTML, unescapeHTML } from '../lib/textMaskingAndSecurity';

describe('escapeHTML', () => {
	test('escapes the 5 reserved HTML characters', () => {
		expect(escapeHTML(`<div class="a">Tom & Jerry's</div>`)).toBe(
			'&lt;div class=&quot;a&quot;&gt;Tom &amp; Jerry&#39;s&lt;/div&gt;'
		);
	});

	test('returns a string with no reserved characters unchanged', () => {
		expect(escapeHTML('Hello World')).toBe('Hello World');
	});

	test('returns an empty string for non-string input', () => {
		expect(escapeHTML(123)).toBe('');
	});
});

describe('unescapeHTML', () => {
	test('unescapes the 5 reserved HTML entities', () => {
		expect(
			unescapeHTML(
				'&lt;div class=&quot;a&quot;&gt;Tom &amp; Jerry&#39;s&lt;/div&gt;'
			)
		).toBe(`<div class="a">Tom & Jerry's</div>`);
	});

	test('returns a string with no entities unchanged', () => {
		expect(unescapeHTML('Hello World')).toBe('Hello World');
	});

	test('returns an empty string for non-string input', () => {
		expect(unescapeHTML(123)).toBe('');
	});
});
