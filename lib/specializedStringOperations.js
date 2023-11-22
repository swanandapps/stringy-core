// Checks if a string is a palindrome.
function isPalindrome(string) {
  // Input: 'A man, a plan, a canal: Panama'
  // Output: true
  const cleanedString = string.replace(/[\W_]/g, "").toLowerCase();
  return cleanedString === cleanedString.split("").reverse().join("");
}

// Checks if brackets in a string are balanced.
function isBalancedBrackets(string) {
  // Input: '(Hello [World])'
  // Output: true
  const stack = [];
  const brackets = { "(": ")", "[": "]", "{": "}" };

  for (const char of string) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if ([")", "]", "}"].includes(char)) {
      if (stack.pop() !== char) return false;
    }
  }

  return stack.length === 0;
}

// Calculates the Levenshtein distance between two strings.
function levenshteinDistance(a, b) {
  // Input: 'kitten', 'sitting'
  // Output: 3
  // ... Implementation of the function
}

// Grouped exports
export { isPalindrome, isBalancedBrackets, levenshteinDistance };
