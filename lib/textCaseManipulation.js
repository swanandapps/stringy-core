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

// Converts a string to title case.
function toTitleCase(string) {
  // Input: 'hello world from STRING utils'
  // Output: 'Hello World From STRING Utils'
  return string.replace(/\b\w/g, (match) => match.toUpperCase());
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

// Inverts the case of each character.
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

// 👨🏻‍💻 Contribution Station - Write a function that converts a string into snake_case
function snakeCase(string) {
  // Input: 'Hello World'
  // Expected Output: 'hello_world'
  try {
    return string?.toLowerCase()?.split(" ")?.join("_");
  } catch (error) {
    return error?.message;
  }
}

// Grouped exports
export {
  swapCase,
  capitalize,
  camelCase,
  toAlternateCase,
  toTitleCase,
  invertCase,
  snakeCase,
};
