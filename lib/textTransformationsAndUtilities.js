// Generates a random string of a specified length using specified characters.
function randomString(
  length,
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  // Input: 10
  // Output: 'A1b2C3d4E5' (example output, actual output will vary)
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Shuffles the characters in a string randomly.
function shuffle(string) {
  // Input: 'abcdef'
  // Output: 'cdfeba' (example output, actual output will vary)
  const array = string.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array.join("");
}

function shuffleString(inputString) {
  // Convert the string to an array of characters for shuffling
  let charArray = inputString.split("");

  // Fisher-Yates shuffle algorithm
  for (let i = charArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }

  // Convert the shuffled array back to a string
  let shuffledString = charArray.join("");

  return shuffledString;
}
// Removes duplicate characters from a string.
function removeDuplicates(string) {
  // Input: 'aabbcddd'
  // Output: 'abcd'
  return Array.from(new Set(string.split(""))).join("");
}

// Shortens a string to a specified length and appends a custom ending.
function shorten(string, length, ending) {
  // Input: 'This is a long string', 10
  // Output: 'This is a ...read more'
  if (string.length <= length) return string;
  return string.substring(0, length) + "..." + ending;
}

// Wraps text to a specified width.
function wordWrap(string, width) {
  // Input: 'This is a long string that needs to be wrapped.', 20
  // Output: 'This is a long\nstring that needs\nto be wrapped.'
  return string.replace(
    new RegExp(`(?![^\\n]{1,${width}}$)([^\\n]{1,${width}})\\s`, "g"),
    "$1\n"
  );
}

// Grouped exports
export { randomString, wordWrap, shuffle, shuffleString, removeDuplicates };
