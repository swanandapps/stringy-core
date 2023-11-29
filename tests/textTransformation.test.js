// tests/textTransformations.test.js

import { shuffle, removeDuplicates } from "../lib/textTransformations";

describe("textTransformation", () => {
  test("string should be shuffled and not have the same order", () => {
    const originalString = "abcdefghijklmnopqrstuvwxyz";

    // Shuffle the string
    const shuffledString = shuffle(originalString);

    // Check that the order of characters has changed
    const originalArray = originalString.split("");
    const shuffledArray = shuffledString.split("");

    // sorting the strigns to check they equal
    const sortedOriginal = originalString.split("").sort().join("");
    const sortedShuffled = shuffledString.split("").sort().join("");


    expect(sortedOriginal).toEqual(sortedShuffled);
    // Assert that at least one character is in a different position
    expect(
      originalArray.some((char, index) => char !== shuffledArray[index])
    ).toBe(true);
  });

  test("string should have duplicates removed", () => {
    const stringWithDuplicates = "aabbccddeeff";

    // Remove duplicates from the string
    const stringWithoutDuplicates = removeDuplicates(stringWithDuplicates);

    // Check that the result contains unique characters
    const uniqueCharacters = Array.from(
      new Set(stringWithoutDuplicates.split(""))
    ).join("");

    expect(uniqueCharacters).toEqual("abcdef");
  });
});
