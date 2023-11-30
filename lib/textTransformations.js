// Shortens a string to a specified length and appends a custom ending.
//Can add a HTML flag to function, if yes, ending will be formatted in bold <b>Read More</b>
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

// 🎲 Contribution Station - Craft a function to shuffle the characters in a string.
function shuffle(string) {
  /*
    Input: 'abcdef'
    Example Output: 'cdfeba' (Note: Actual output will vary as shuffle is random)
    Mix up those characters! Write your shuffle logic and export the function.
  */
}
// Removes duplicate characters from a string.
function removeDuplicates(string) {
  // Input: 'aabbcddd'
  // Output: 'abcd'
  return [...new Set(string)].join('');
}

// Grouped exports
export { shuffle, removeDuplicates, shorten, wordWrap };
