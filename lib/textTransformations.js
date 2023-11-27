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

// Shuffles the characters in a string.
function shuffle(string) {
  // Input: 'abcdef'
  // Output: 'cdfeba' (Note: Actual output will vary as shuffle is random)
  const characters = string.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  return characters.join('');
}

// 🧹 Contribution Station - Create a function to remove duplicate characters from a string.
function removeDuplicates(string) {
  /*
    Input: 'aabbcddd'
    Expected Output: 'abcd'
    Sweep away those duplicates! Implement your logic and don't forget to export the function.
  */
}

// Grouped exports
export { shuffle, removeDuplicates, shorten, wordWrap };
