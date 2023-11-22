// Checks if a string is a palindrome.
function isPalindrome(string) {
  // Input: 'A man, a plan, a canal: Panama'
  // Output: true
  const cleanedString = string.replace(/[\W_]/g, "").toLowerCase();
  return cleanedString === cleanedString.split("").reverse().join("");
}

// Checks if a string matches a given regular expression pattern.
function matchesPattern(string, pattern) {
  // Input: 'hello@example.com', /^\S+@\S+$/
  // Output: true
  return pattern.test(string);
}

// Grouped exports
export { isPalindrome, matchesPattern };
