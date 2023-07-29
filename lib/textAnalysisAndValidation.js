// Checks if a string matches a given regular expression pattern.
function matchesPattern(string, pattern) {
	// Input: 'hello@example.com', /^\S+@\S+$/
	// Output: true
	return pattern.test(string);
}

// 🔄 Contribution Station - Develop a function to check if a string is a palindrome.
function isPalindrome(string) {
	/*
    Input: 'A man, a plan, a canal: Panama'
    Expected Output: true
    Determine if a string reads the same backward as forward. Write your code, then export this mirror magic.
  */
	const checkPalindrome = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	return checkPalindrome;
}

// Checks if a string contains only digits, with an optional single decimal point.
function isNumeric(string) {
	// Input: '12.5'
	// Output: true
	if (typeof string !== 'string' || string === '') return false;
	return /^\d+(\.\d+)?$/.test(string);
}

// Checks if a string contains only letters.
function isAlpha(string) {
	// Input: 'HelloWorld'
	// Output: true
	if (typeof string !== 'string' || string === '') return false;
	return /^[a-zA-Z]+$/.test(string);
}

// Checks if a string contains only letters and digits.
function isAlphanumeric(string) {
	// Input: 'Hello123'
	// Output: true
	if (typeof string !== 'string' || string === '') return false;
	return /^[a-zA-Z0-9]+$/.test(string);
}

// Grouped exports
export { matchesPattern, isPalindrome, isNumeric, isAlpha, isAlphanumeric };
