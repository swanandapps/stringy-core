import {
  capitalize,
  extractNumbers,
  countWords,
  isBalancedBrackets,
  levenshteinDistance,
  maskEmail,
  maskPhone,
  invertCase,
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

describe("invertCase", () => {
  test("Inverts the case of each character in a given string", () => {
    expect(invertCase("Hello World")).toBe("hELLO wORLD");
  });

  test("Check for whitespace", () => {
    expect(invertCase(" ")).toBe(" ");
  });

  test("Check for all uppercase words", () => {
    expect(invertCase("ABCD")).toBe("abcd");
  });

  test("Check for all lowercase words", () => {
    expect(invertCase("abcd")).toBe("ABCD");
  });

  test("Check for Mixed Case with Numbers and Symbols", () => {
    expect(invertCase("aBc 123 !@#")).toBe("AbC 123 !@#");
  });

  test("Check for String with Special Characters", () => {
    expect(invertCase("HeLLo @WorLD!")).toBe("hEllO @wORld!");
  });

  test("Check for String with Whitespaces", () => {
    expect(invertCase("  InVeRt   CaSe  ")).toBe("  iNvErT   cAsE  ");
  });

  test("Check for Long String", () => {
    expect(
      invertCase(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      )
    ).toBe(
      "lOREM iPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY."
    );
  });

  test("Check for String with Non-alphabetic Characters", () => {
    expect(invertCase("!@#%^&*()")).toBe("!@#%^&*()");
  });

  test("Check for String with Newline and Tab Characters", () => {
    expect(invertCase("Hello\n\tWorld")).toBe("hELLO\n\twORLD");
  });
});
