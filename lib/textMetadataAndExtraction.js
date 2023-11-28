// Extracts all numbers from a string and returns them as an array.
function extractNumbers(string) {
  // Input: 'Order 500 units of item 1234.'
  // Output: [500, 1234]
  const matches = string.match(/\d+/g);
  return matches ? matches.map(Number) : [];
}

// Counts the number of words in a string.
function countWords(string) {
  // Input: 'Hello world, this is a test.'
  // Output: 6
  return string.split(/\s+/).filter(Boolean).length;
}

// Counts the number of occurrences of a specific character in a string.
function countCharacter(string, char) {
  // Input: 'Hello world', 'o'
  // Output: 2
  return string.split(char).length - 1;
}

// Finds all occurrences of a substring in a string and returns their indices.
function findPositions(string, substring) {
  // Input: 'This is a test. This is only a test.', 'test'
  // Output: [10, 31]
  const positions = [];
  let pos = string.indexOf(substring);
  while (pos > -1) {
    positions.push(pos);
    pos = string.indexOf(substring, pos + 1);
  }
  return positions;
}

// 👨🏻‍💻 Contribution Station - Write a function to Extract all hashtags from a string.

function extractHashtags(string) {
  /*
   Input: 'This is a #sample string with #hashtags'
   Expected Output: ['#sample', '#hashtags']
   Write your code here and export the function.
  */
  const matches = (typeof string === "string" || string instanceof String) ? string.match(/#\w+/g) : [];
  return matches ? matches : [];
}

// Grouped exports
export { extractNumbers, countWords, countCharacter, findPositions, extractHashtags };
