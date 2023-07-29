// tests/textFormatting.test.js

import { formatBytes } from '../lib/textFormatting';

describe('formatBytes', () => {
	test('formats 0 bytes', () => {
		expect(formatBytes(0)).toBe('0 B');
	});

	test('formats bytes below 1 KB', () => {
		expect(formatBytes(512)).toBe('512 B');
	});

	test('formats kilobytes with default decimal precision', () => {
		expect(formatBytes(1536)).toBe('1.5 KB');
	});

	test('formats megabytes', () => {
		expect(formatBytes(1048576)).toBe('1 MB');
	});

	test('respects a custom decimals argument', () => {
		expect(formatBytes(1536, 0)).toBe('2 KB');
	});
});
