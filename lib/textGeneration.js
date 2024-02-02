// Generates a random string of a specified length using specified characters.
function generateRandomString(
  length,
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
) {
  // Input: 10
  // Output: 'A1b2C3d4E5' (example output, actual output will vary)
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Generate a Lorem Ipsum random sentence.
function generateLoremIpsum(wordsCount, startWithLorem = true) {
  // Input: (5, true)
  // Output: 'Lorem ipsum dolor sit amet' (example output, actual content will vary)
  const loremIpsumStart = startWithLorem ? 'Lorem ipsum' : '';
  const loremIpsumText =
    'dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

  const loremIpsumWords = loremIpsumText.split(' ');
  const modifiedWordsCount = startWithLorem ? wordsCount - 2 : wordsCount;

  const randomSentence = [];
  for (let i = 0; i < modifiedWordsCount; i++) {
    const randomIndex = Math.floor(Math.random() * loremIpsumWords.length);
    randomSentence.push(loremIpsumWords[randomIndex]);
  }

  randomSentence[0] =
    randomSentence[0].charAt(0).toUpperCase() + randomSentence[0].slice(1);

  const generatedSentence = `${loremIpsumStart} ${randomSentence.join(' ')}.`;

  return generatedSentence;
}

export { generateLoremIpsum, generateRandomString };
