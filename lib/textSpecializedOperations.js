// Checks if brackets in a string are balanced.
function isBalancedBrackets(string) {
  // Input: '(Hello [World])'
  // Output: true
  const stack = [];
  const brackets = { '(': ')', '[': ']', '{': '}' };

  for (const char of string) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if ([')', ']', '}'].includes(char)) {
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

  const matrix = [];

  // Initialize the matrix with 0...n in the first row and column
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Calculate distances
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // Substitution
          matrix[i][j - 1] + 1, // Insertion
          matrix[i - 1][j] + 1 // Deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Grouped exports
export { isBalancedBrackets, levenshteinDistance };
