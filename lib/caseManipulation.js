// Capitalizes the first letter of a string and lowercases the rest.
function capitalize(string) {
  // Input: 'hello world'
  // Output: 'Hello world'
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Converts a string to camel case.
function camelCase(string) {
  // Input: 'Hello world'
  // Output: 'helloWorld'
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// Converts a string to snake case.
function snakeCase(string) {
  // Input: 'Hello World'
  // Output: 'hello_world'
  return string
    .toLowerCase()
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .join("_");
}

// Converts a string to alternate case.
function toAlternateCase(string) {
  // Input: 'hello world'
  // Output: 'HeLlO WoRlD'
  return string
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}

// Capitalizes the first letter of every word in a string.
function capitalizeEveryWord(string) {
  // Input: 'hello world from string utils'
  // Output: 'Hello World From String Utils'
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Converts a string to title case.
function toTitleCase(string) {
  // Input: 'hello world from STRING utils'
  // Output: 'Hello World From STRING Utils'
  return string
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}

// Inverts the case of each character in a string.
function invertCase(string) {
  // Input: 'Hello World'
  // Output: 'hELLO wORLD'
  return string
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}
function swapCase(string) {
  return string
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}

// Grouped exports
export {
  swapCase,
  capitalize,
  camelCase,
  snakeCase,
  toAlternateCase,
  toTitleCase,
  invertCase,
};
