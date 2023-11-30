import {
  capitalize,
  extractNumbers,
  countWords,
  isBalancedBrackets,
  levenshteinDistance,
  maskEmail,
  maskPhone,
  extractHashtags,
  formatTime,
} from "../index";

describe("capitalize", () => {
  test("capitalizes the first letter of a word", () => {
    expect(capitalize("stringy")).toBe("Stringy");
  });
});

describe("extractNumbers", () => {
  test("extracts numbers from a string containing multiple numbers", () => {
    expect(extractNumbers("Order 500 units of item 1234.")).toEqual([
      500, 1234,
    ]);
  });

  test("returns an empty array when the string contains no numbers", () => {
    expect(extractNumbers("No numbers here!")).toEqual([]);
  });

  // More tests for extractNumbers...
});

describe("countWords", () => {
  test("counts the number of words in a regular sentence", () => {
    expect(countWords("Hello world, this is a test.")).toBe(6);
  });

  test("counts correctly with multiple spaces between words", () => {
    expect(countWords("Hello    world")).toBe(2);
  });

  // More tests for countWords...
});

describe("isBalancedBrackets", () => {
  test("returns true for a string with balanced brackets", () => {
    expect(isBalancedBrackets("(Hello [World])")).toBe(true);
  });

  test("returns false for a string with unbalanced brackets", () => {
    expect(isBalancedBrackets("(Hello [World)")).toBe(false);
  });
});

describe("levenshteinDistance", () => {
  test("returns 0 for identical strings", () => {
    expect(levenshteinDistance("hello", "hello")).toBe(0);
  });

  test("calculates the correct distance between two different strings", () => {
    expect(levenshteinDistance("kitten", "sitting")).toBe(3);
  });

  // More tests for levenshteinDistance...
});

describe("maskEmail", () => {
  test("masks a standard email address correctly", () => {
    expect(maskEmail("user@example.com")).toBe("u***@e******.com");
  });

  // More tests for maskEmail...
});

describe("maskPhone", () => {
  test("masks phone number with default visibleDigits", () => {
    const phoneNumber = "1234567890";
    expect(maskPhone(phoneNumber)).toBe("******7890");
  });

  test("masks phone number with custom visibleDigits", () => {
    const phoneNumber = "9876543210";
    const visibleDigits = 3;
    expect(maskPhone(phoneNumber, visibleDigits)).toBe("*******210");
  });

  test("throws error for invalid phone number with special characters", () => {
    const invalidPhoneNumber = "1-23-45-67-890";
    expect(() => maskPhone(invalidPhoneNumber)).toThrowError(
      "Invalid input. Please provide a non-negative integer for visibleDigits, and ensure it is not greater than the length of the phone number."
    );
  });

  // Add more test cases as needed...
});

describe("extractHashtags", () => {
  test("extracts hashtags from a string containing multiple hashtags", () => {
    expect(extractHashtags("This is a #sample string with #hashtags")).toEqual(["#sample", "#hashtags"]);
  });
  
  test("returns an empty array when the string contains no hashtags", () => {
    expect(extractHashtags("No hashtags here!")).toEqual([]);
  });

  test("returns an empty array when the string is not a string", ()=> {
    expect(extractHashtags(1234)).toEqual([]);
  })

  // More tests for extractHashtags...
});

describe("formatTime", () => {
    test("formats a time string", () => {
      expect(formatTime("2023-03-01T15:30:00")).toBe("3:30 PM");
    });

    test("formats a time string with locale", () => {
        expect(formatTime("2023-03-01T15:30:00", "en-IN")).toBe("3:30 pm");
    });

    test("formats a time string with invalid date", () => {
        expect(formatTime("abcd", "en-IN")).toBe("Invalid Date");
    })

    // More test for formatTime...
});
