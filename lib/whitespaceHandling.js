// Removes leading whitespace from a string.
function trimStart(string) {
  // Input: '  Hello World'
  // Output: 'Hello World'
  let startIndex = 0;
  while (startIndex < string.length && string[startIndex] === " ") {
    startIndex++;
  }
  return string.substring(startIndex);
}

// Removes trailing whitespace from a string.
function trimEnd(string) {
  // Input: 'Hello World  '
  // Output: 'Hello World'
  let endIndex = string.length - 1;
  while (endIndex >= 0 && string[endIndex] === " ") {
    endIndex--;
  }
  return string.substring(0, endIndex + 1);
}

// Removes all whitespace from a string.
function removeWhitespace(string) {
  // Input: ' Hello  World from STRING  Utils! '
  // Output: 'HelloWorldfromSTRINGUtils!'
  return string.replace(/\s+/g, "");
}

// Normalizes whitespace in a string, converting all sequences of whitespace characters to a single space, and trims the string.
function normalizeWhitespace(string) {
  // Input: '  Hello   World   from   STRING   Utils!  '
  // Output: 'Hello World from STRING Utils!'
  return string.replace(/\s+/g, " ").trim();
}

// Grouped exports
export { trimStart, trimEnd, removeWhitespace, normalizeWhitespace };
