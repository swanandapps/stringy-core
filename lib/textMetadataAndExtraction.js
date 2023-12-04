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

function extractURLs(string) {
  /*
   Input: 'Visit https://example.com for more information.'
   Expected Output: ['https://example.com']
   Write your code here and export the function.
  */
  return string.match(/https?:\/\/\S+/g) || [];
}

function extractEmails(string) {
  /*
   Input: 'Contact us at info@example.com or support@test.org.'
   Expected Output: ['info@example.com', 'support@test.org']
   Write your code here and export the function.
  */
  return string.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g) || [];
}

function extractMentions(string) {
  /*
   Input: 'This is a @mention example.'
   Expected Output: ['@mention']
   Write your code here and export the function.
  */
  const matches = (typeof string === "string" || string instanceof String) ? string.match(/@\w+/g) : [];
  return matches ? matches : [];
}

function extractParenthesizedContent(string) {
  /*
   Input: 'This is (some content) within parentheses. Another (example).'
   Expected Output: ['(some content)', '(example)']
   Write your code here and export the function.
  */
  const matches = string.match(/\([^)]+\)/g) || [];
  return matches;
}

function extractQuotedText(string) {
  /*
   Input: 'She said, "This is a quoted text." He replied, "Another quote."'
   Expected Output: ['"This is a quoted text."', '"Another quote."']
   Write your code here and export the function.
  */
  return string.match(/"[^"]+"/g) || [];
}

function extractHTMLTags(string) {
  /*
   Input: '<p>This is a paragraph.</p> <a href="#">Click here</a>'
   Expected Output: ['<p>', '</p>', '<a href="#">', '</a>']
   Write your code here and export the function.
  */
  return string.match(/<[^>]+>/g) || [];
}

function extractDates(string) {
  /*
   Input: 'Meeting on 12/31/2022. Event: 01-15-2023'
   Expected Output: ['12/31/2022', '01-15-2023']
   Write your code here and export the function.
  */
  return string.match(/\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g) || [];
}

function extractPhoneNumbers(string) {
  /*
   Input: 'Contact us at 123-456-7890 or +1 (987) 654-3210.'
   Expected Output: ['123-456-7890', '+1 (987) 654-3210']
   Write your code here and export the function.
  */
  return string.match(/\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g) || [];
}

function extractIPv4Addresses(string) {
  /*
   Input: 'IP addresses: 192.168.1.1 and 10.0.0.1'
   Expected Output: ['192.168.1.1', '10.0.0.1']
   Write your code here and export the function.
  */
  return string.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g) || [];
}

function extractIPv6Addresses(string) {
  /*
    Input: 'IPv6 addresses: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 and fe80::1'
    Expected Output: ['2001:0db8:85a3:0000:0000:8a2e:0370:7334', 'fe80::1']
    Write your code here and export the function.
  */
  return string.match(/(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}\b/g) || [];
}

function extractFilePaths(string) {
  /*
    Input: 'File paths: /path/to/file1.txt and C:\Documents\file2.docx'
    Expected Output: ['/path/to/file1.txt', 'C:\Documents\file2.docx']
    Write your code here and export the function.
  */
  return string.match(/\/\S+\.\S+|\\[A-Za-z]:\\(?:\w+\\)+\w+\.\w+/g) || [];
}

function extractDomainNames(string) {
  /*
    Input: 'Visit https://www.example.com for more info.'
    Expected Output: ['www.example.com']
    Write your code here and export the function.
  */
  return string.match(/\b(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+)\b/g) || [];
}

function extractJSONStrings(string) {
  /*
    Input: '{"key": "value", "nested": {"inner": 42}}'
    Expected Output: ['{"key": "value", "nested": {"inner": 42}}']
    Write your code here and export the function.
  */
  return string.match(/\{(?:[^{}]|(?:\{[^{}]*\}))*\}/g) || [];
}

// Grouped exports
export { extractNumbers, countWords, countCharacter, findPositions, extractHashtags };
