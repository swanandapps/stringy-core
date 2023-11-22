# \_S Library - Your String's Best Friend

## Overview

Welcome to \_S, where strings come to have fun! Our library is like a Swiss Army knife for strings in JavaScript. Need to make a string look pretty? Check. Turn it upside down? Maybe not yet, but we're getting there. We've got everything from basic string operations to fancy stuff like extracting data, validating content, and keeping secrets (shh, don't tell the passwords!).

## Features

- **Data Extraction and Analysis**: Like a detective, but for strings. We find numbers, words, and probably Waldo if he's hiding in there.
- **Specialized String Operations**: It's like string gymnastics – we calculate distances, check balance, and more.
- **Masking and Security**: We're the mask heroes for your strings, protecting identities and sensitive data.
- **String Analysis and Validation**: String therapists, at your service. We listen, analyze, and validate.
- **Case Manipulation**: Ever wanted to shout in text or whisper quietly? We've got the case changes for every mood.
- **Whitespace Handling**: Managing whitespace like a pro – we trim, we squish, we expand.
- **Date and Time Formatting**: We're basically time travelers, formatting your dates and times like it's no big deal.
- **Text Transformations and Utilities**: General magic tricks for your text. Poof! And it's transformed.

## Installation

Install \_S and watch your strings do backflips:

```bash
npm install _S
```

Or if you're more of a yarn person:

```bash
yarn add _S
```

## Usage Examples

### Extract Numbers from a String

Got numbers hiding in your text? We'll find them. It's like hide and seek, but with digits.

```javascript
import { extractNumbers } from "_S";

const text = "Order 500 units of item 1234.";
const numbers = extractNumbers(text); // Found them! [500, 1234]
```

### Check for Balanced Brackets

Ever wonder if your brackets are socially balanced? Let's find out together.

```javascript
import { isBalancedBrackets } from "_S";

const validString = "(Hello [World])";
const isValid = isBalancedBrackets(validString); // True, these brackets are in harmony
```

### Mask Email Address

Protect your email like a superhero protects their identity.

```javascript
import { maskEmail } from "_S";

const email = "user@example.com";
const maskedEmail = maskEmail(email); // Secret identity: "u***@example.com"
```

### Reverse String

Flip your string on its head, because why not?

```javascript
import { reverseString } from "_S";

const original = "desserts";
const reversed = reverseString(original); // Stressed out? Have some "stressed"
```

### Turn into a Title

Give your text the royal treatment – each word's first letter ascends to its uppercase throne.

```javascript
import { toTitleCase } from "_S";

const humbleText = "i am stringy";
const titled = toTitleCase(humbleText); // "I Am Stringy"
```

### Trim Whitespace

Give your string a neat trim, because everyone loves a well-groomed text.

```javascript
import { trimWhitespace } from "_S";

const messy = "  Too much space?   ";
const neat = trimWhitespace(messy); // "Too much space?"
```

### Shorten

trims your string to the desired length and tastefully tops it off with an ellipsis (...) and a custom ending, hinting there's more for the eager reader.

```javascript
import { shorten } from "_S";

const blog =
  "Meet Stringy, the latest JavaScript library designed to revolutionize how we handle strings. Whether you're a seasoned developer";
const shortened = shorten(blog, 40, "Read More");
// "Meet Stringy, the latest JavaScript library designed to ...Read More"
```

### String Scatter

Mix it up! Randomize the characters in your string for a bit of fun or some serious unscrambling challenges.

```javascript
import { shuffleString } from "_S";

const word = "Randomize";
const jumbled = shuffleString(word); // Example: "mnaodRzi"
```

### Hunt a Word

a treasure hunt in your strings, where you discover the hidden indices of your sought-after substrings.

```javascript
import { findPositions } from "_S";

const narrative = "Echoes in the echoes in the echoes";
const echoLocations = findPositions(narrative, "echoes"); // [0, 14, 28]
```

### Number Makeover

Spruce up your digits with formatNumber – it's like a spa day for your numbers, turning them from plain to absolutely fabulous, all dressed up with commas and style.

```javascript
import { formatNumber } from "_S";

const largeNumber = 1234567;
const beautifiedNumber = formatNumber(largeNumber); // "1,234,567"
```

### Time Makeover

Step into the time machine with formatDateTime. Transform dates and times from mundane to meaningful, showcasing them in a format that speaks to humans, not just machines.

```javascript
import { formatDateTime } from "_S";

const eventTimestamp = new Date("2023-07-21T19:30:00");
const formattedDateTime = formatDateTime(eventTimestamp); // "July 21, 2023, 7:30 PM"
```

### Bracket Balancer

Navigate the tightrope of syntax with isBalancedBrackets. It's like a gymnast gracefully ensuring every leap has a landing – every open bracket finds its closing match.

```javascript
import { isBalancedBrackets } from "_S";

const codeSnippet = "{[()]}";
const isBalanced = isBalancedBrackets(codeSnippet); // true
```

### The Levenshtein Distance

Measure the steps between strings with levenshteinDistance. It's like having a pedometer for your text, counting the edits required to transition from one string to another.

```javascript
import { levenshteinDistance } from "_S";

const stringA = "kitten";
const stringB = "sitting";
const editDistance = levenshteinDistance(stringA, stringB); // 3
```

### All Availiable Methods

## Available Methods

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
- **`startsWith`**: Checks if a string starts with a given substring.
- **`substring`**: Extracts a substring from a string.
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
- **`trim`**: Trims whitespace from both ends of a string.
- **`pad`**: Adds padding to a string to reach a specified length.
- **`shuffleString`**: Randomizes the order of characters in a string.
- **`matchesPattern`**: Checks if a string matches a regular expression pattern.
- **`spliceString`**: Modifies a string by removing, replacing, or inserting characters.

## Contributing

Got ideas? Tricks up your sleeve? Join the \_S circus! Fork the repo, make your feature branch, and let the pull requests fly!

## Licensing

This code is freer than a string in the wild. Check out [appropriate license name] for the details.

## Support

Running into strings attached? Let us know! Open an issue or send a pull request. We're here to untangle the mess.

## Stay Connected

Got string theories? Share them with us. Follow us on [Social Media Link] and stay updated with all the string magic.

```

```
