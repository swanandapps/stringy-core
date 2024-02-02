<p align="center"><a href="kalaam.io" target="_blank" rel="noopener noreferrer"><img width="100" src="https://firebasestorage.googleapis.com/v0/b/topdev-93530.appspot.com/o/logo%20Background%20Removed.png?alt=media&token=d53f5793-30e8-4122-81d9-869e80a76914" alt="Kalaam logo"></a></p>

# Stringy

✨ Lodash but for Strings!

[![npm version](https://img.shields.io/npm/v/stringy-core.svg)](https://npmjs.org/package/stringy-core)
![Minified Size](https://img.shields.io/bundlephobia/min/stringy-core.svg)
![Minzipped Size](https://img.shields.io/bundlephobia/minzip/stringy-core.svg)
![Monthly Downloads](https://img.shields.io/npm/dm/stringy-core.svg)

## Overview

Stringy is a swiss army knife of string manipulation methods.

Designed to ace string manipulation, a crucial aspect in many applications. It's a go to tool for formatting user-generated content, ensuring uniformity in blogs or comments. E-commerce sites use it to enhance product descriptions for SEO and readability. Data analysts find it invaluable for cleaning datasets, like trimming whitespace or standardizing formats.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [All Available Methods](#all-available-methods)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Installation

Install stringy-core package and watch your strings do backflips:

```bash
npm install stringy-core
```

Or if you're more of a yarn person:

```bash
yarn add stringy-core
```

## Usage

1. ### Extract Numbers from a String

Got numbers hiding in your text? We'll find them. It's like hide and seek, but with digits.

```javascript
import { extractNumbers } from 'stringy-core';

const text = 'Order 500 units of item 1234.';
const numbers = extractNumbers(text); // Found them! [500, 1234]
```

2. ### Check for Balanced Brackets

Ever wonder if your brackets are socially balanced? Let's find out together.

```javascript
import { isBalancedBrackets } from 'stringy-core';

const validString = '(Hello [World])';
const isValid = isBalancedBrackets(validString); // True, these brackets are in harmony
```

3. ### Masking Sensitive Data

Run a user data centric app? Give your id's a subtle disguise. You choose the disguise.
We cover emails, phones, and cards!

```javascript
const email = 'user@example.com';
const maskedEmail = maskEmail(email, '*'); // Use '*' for disguise
const dashedEmail = maskEmail(email, '-'); // Use '-' for disguise

console.log(maskedEmail); // 'u***@e******.com'
console.log(dashedEmail); // 'u---@e------.com'
```

4. ### Moderate Content

Ensure your text stays in the safe zone with moderate. This function is like the diligent editor of your strings, replacing those not-so-appropriate words with a mask of your choice, ensuring every sentence is audience-friendly.

```javascript
import { moderate } from 'stringy-core';

const originalText = 'Stringy is awesome but some words need moderation.';
const wordsToCensor = ['awesome', 'moderation'];
const safeText = moderate(originalText, wordsToCensor, '*');

console.log(safeText); // 'Stringy is a****** but some words need m*********.'
```

5. ### Turn into a Title

Give your text the royal treatment – each word's first letter ascends to its uppercase throne.

```javascript
import { toTitleCase } from 'stringy-core';

const humbleText = 'i am stringy';
const titled = toTitleCase(humbleText); // "I Am Stringy"
```

6. ### Trim Whitespace

Give your string a neat trim, because everyone loves a well-groomed text.

```javascript
import { trimWhitespace } from 'stringy-core';

const messy = '  Too much space?   ';
const neat = trimWhitespace(messy); // "Too much space?"
```

7. ### Word Wrapper

Wrap your text neatly with wordWrap, the function that ensures your strings never spill out of their bounds. Ideal for crafting perfectly formatted paragraphs, be it in a console, an article, or anywhere text needs to stay within the lines.

```javascript
const longText =
  'This is a long string that needs to be wrapped at a specific width.';
const wrappedText = wordWrap(longText, 20);

console.log(wrappedText);
// Output:
// This is a long
// string that needs
// to be wrapped at a
// specific width.
```

8. ### Shorten

trims your string to the desired length and tastefully tops it off with an ellipsis (...) and a custom ending, hinting there's more for the eager reader.

```javascript
import { shorten } from 'stringy-core';

const blog =
  "Meet Stringy, the latest JavaScript library designed to revolutionize how we handle strings. Whether you're a seasoned developer";
const shortened = shorten(blog, 40, 'Read More');
// "Meet Stringy, the latest JavaScript library designed to ...Read More"
```

9. ### Create a Random String

Create a custom string with a sprinkle of unpredictability. Perfect for generating unique IDs, playful codes, or testing your apps with diverse inputs.

```javascript
import { randomString } from 'stringy-core';

const desiredLength = 10;
const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const uniqueString = randomString(desiredLength, characters); // Example: 'A1b2C3d4E5' (actual output will vary)
```

Dive into a world where each call brings a surprise, tailor-made just for you! 🎲✨🔡

10. ### Hunt a Word

a treasure hunt in your strings, where you discover the hidden postions of your sought-after substrings.

```javascript
import { findPositions } from 'stringy-core';

const narrative = 'Echoes in the echoes in the echoes';
const echoLocations = findPositions(narrative, 'echoes'); // [0, 14, 28]
```

11. ### Number Makeover

Spruce up your digits with formatNumber – it's like a spa day for your numbers, turning them from plain to absolutely fabulous, all dressed up with commas and style.

```javascript
import { formatNumber } from 'stringy-core';

const largeNumber = 1234567;
const beautifiedNumber = formatNumber(largeNumber); // "1,234,567"
```

12. ### Time Makeover

Step into the time machine with formatDateTime. Transform dates and times from mundane to meaningful, showcasing them in a format that speaks to humans, not just machines.

```javascript
import { formatDateTime } from 'stringy-core';

const eventTimestamp = new Date('2023-07-21T19:30:00');
const formattedDateTime = formatDateTime(eventTimestamp); // "July 21, 2023, 7:30 PM"
```

13. ### Bracket Balancer

Navigate the tightrope of syntax with isBalancedBrackets. It's like a gymnast gracefully ensuring every leap has a landing – every open bracket finds its closing match.

```javascript
import { isBalancedBrackets } from 'stringy-core';

const codeSnippet = '{[()]}';
const isBalanced = isBalancedBrackets(codeSnippet); // true
```

14. ### The Levenshtein Distance

Measure the steps between strings with levenshteinDistance. It's like having a pedometer for your text, counting the edits required to transition from one string to another.

```javascript
import { levenshteinDistance } from 'stringy-core';

const stringA = 'kitten';
const stringB = 'sitting';
const editDistance = levenshteinDistance(stringA, stringB); // 3
```

## All Available Methods

- **`capitalize`**: Capitalizes the first letter of a string.
- **`camelCase`**: Converts a string to camel case.
- **`snakeCase`**: Converts a string to snake case.
- **`toAlternateCase`**: Converts a string to alternate case (e.g., "hElLo WoRlD").
- **`capitalizeFirstLetter`**: Capitalizes the first letter of each word in a string.
- **`toTitleCase`**: Converts a string to title case.
- **`invertCase`**: Inverts the case of each character in a string.
- **`reverseString`**: Reverses the characters in a string.
- **`isBlank`**: Checks if a string is blank or consists only of whitespace.
- **`truncate`**: Shortens a string to a specified length and adds an ellipsis.
- **`countVowels`**: Counts the number of vowels in a string.
- **`findPositions`**: Finds all occurrences of a substring and returns their indices.
- **`formatNumber`**: Formats a number within a string for readability.
- **`formatDateTime`**: Formats a date and time string into a more readable format.
- **`isBalancedBrackets`**: Checks if brackets in a string are balanced.
- **`levenshteinDistance`**: Calculates the Levenshtein distance between two strings.
- **`toggleCase`**: Toggles the case of each character in a string.
- **`sliceString`**: Extracts a portion of a string.
- **`toUpperCase`**: Converts a string to uppercase.
- **`toLowerCase`**: Converts a string to lowercase.
- **`countWords`**: Counts the number of words in a string.
- **`highlightPattern`**: Highlights occurrences of a pattern within a string.
- **`shuffleString`**: Randomizes the order of characters in a string.
- **`matchesPattern`**: Checks if a string matches a regular expression pattern.
- **`spliceString`**: Modifies a string by removing, replacing, or inserting characters.

## How to Contribute

Got ideas? Tricks up your sleeve? Join the \_S circus! Fork the repo, make your feature branch, and let the pull requests fly!

[Check out our contribution guide for more details.](CONTRIBUTE.md)

## License

This code is freer than a string in the wild. Check out [appropriate license name] for the details.

## Support

Running into strings attached? Let us know! Open an issue or send a pull request. We're here to untangle the mess.
