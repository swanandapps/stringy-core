// Generates a random string of a specified length using specified characters.
function generateRandomString(
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

// 🚀 Contribution Station - Create a function to generate a  Lorem Ipsum random sentence.

function generateLoremIpsum(wordsCount, startWithLorem = true) {
  /*
      Input: (5, true)
      Expected Output: 'Lorem ipsum dolor sit amet' (example output, actual content will vary)
      Craft a sentence with the magic of Lorem Ipsum! Customize the number of words, and decide whether to start with 'Lorem ipsum'. Unleash your creativity and don't forget to export the function.
    */
}

export { generateLoremIpsum, generateRandomString };
