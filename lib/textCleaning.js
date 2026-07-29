// Removes only leading whitespace from a string.
function trimStart(string) {
  // Input: '  Hello World'
  // Output: 'Hello World'
  return string.replace(/^\s+/, '');
}

// Removes only trailing whitespace from a string.
function trimEnd(string) {
  // Input: 'Hello World  '
  // Output: 'Hello World'
  return string.replace(/\s+$/, '');
}

// Safely trims whitespace from a string, handling null/undefined inputs.
function safeTrim(string) {
  /*
    Input: null
    Output: ''

    Input: '  hello  '
    Output: 'hello'
  */
  if (typeof string !== "string") return "";

  return string.trim();
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
    Expected Output: 'HelloWorldfromSTRINGUtils!'.
  */
  if (typeof string !== 'string' || string == null) {
    return 'Invalid String';
  }

  return string.replace(/\s/g, '');
}

// Grouped exports
export { trimStart, trimEnd, normalizeWhitespace, removeWhitespace };
