// tests/textTransformations.test.js

import { shuffle, removeDuplicates } from '../lib/textTransformations';

describe('shuffle', () => {
  test('string should be shuffled and not have the same order', () => {
    const originalString = 'abcdefghijklmnopqrstuvwxyz';

    const shuffledString = shuffle(originalString);

    // sorting the strigns to check they equal
    const sortedOriginal = originalString.split('').sort().join('');
    const sortedShuffled = shuffledString.split('').sort().join('');

    expect(sortedOriginal).toEqual(sortedShuffled);
    // Assert that at least one character is in a different position
    expect(originalString).not.toEqual(shuffledString);
  });

  test('return an empty string if string is not passed to shuffle', () => {
    const nums = 1234; // Numbers

    // Remove Duplicate on passing any other type except string like number here
    const emptyString = shuffle(nums);

    // Check if the result contains empty string or not
    expect(emptyString).toEqual('');
  });
});

describe('removeDuplicates', () => {
  test('string should have duplicates removed', () => {
    const stringWithDuplicates = 'aabbccddeeff';

    // Remove duplicates from the string
    const stringWithOutDuplicates = removeDuplicates(stringWithDuplicates);

    // Check that the result contains unique characters
    expect(stringWithOutDuplicates).toEqual('abcdef');
  });

  test('removeDuplicates should not change a string with no duplicates', () => {
    const stringWithOutDuplicates = 'abcdef';

    // Remove duplicates from the string
    const stringWithOutDuplicates2 = removeDuplicates(stringWithOutDuplicates);

    // Check that the result contains unique characters
    expect(stringWithOutDuplicates2).toEqual('abcdef');
  });

  test('return empty string if string is not passed to removeDuplicates', () => {
    const bool = true; // Boolean

    // Remove duplicates on type boolean should return empty string
    const emptyString = removeDuplicates(bool);

    // Check if the result contains empty string or not
    expect(emptyString).toEqual('');
  });
});
