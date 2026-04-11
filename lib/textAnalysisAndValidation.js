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

// Validates whether a given string is a valid URL.
function isValidURL(string) {
  /*
    Input: 'https://google.com'
    Expected Output: true
  */
  if (typeof string !== "string") return false;

  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

// Grouped exports
export { matchesPattern, isPalindrome, isValidURL};
