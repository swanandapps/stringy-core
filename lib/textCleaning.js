// Removes only leading whitespace from a string.
function trimStart(string) {
  // Input: '  Hello World'
  // Output: 'Hello World'
  let startIndex = 0;
  while (startIndex < string.length && string[startIndex] === " ") {
    startIndex++;
  }
  return string.substring(startIndex);
}

// Removes only trailing whitespace from a string.
function trimEnd(string) {
  // Input: 'Hello World  '
  // Output: 'Hello World'
  let endIndex = string.length - 1;
  while (endIndex >= 0 && string[endIndex] === " ") {
    endIndex--;
  }
  return string.substring(0, endIndex + 1);
}

// Normalizes whitespace in a string, converting all sequences of whitespace characters to a single space, and trims the string.
function normalizeWhitespace(string) {
  // Input: '  Hello   World   from   STRING   Utils!  '
  // Output: 'Hello World from STRING Utils!'
  return string.replace(/\s+/g, " ").trim();
}

// 🌬️ Contribution Station - Forge a function to eliminate all whitespace from a string.
function removeWhitespace(string) {
  /*
    Input: ' Hello  World from STRING  Utils! '
    Expected Output: 'HelloWorldfromSTRINGUtils!'
    Clear the space clutter! Write your code and export the function.
  */
}

// Grouped exports
export { trimStart, trimEnd, normalizeWhitespace };
