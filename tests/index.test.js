import {
  capitalize,
  extractNumbers,
  countWords,
  isBalancedBrackets,
  levenshteinDistance,
  maskEmail,
  maskPhone,
  invertCase,
  extractHashtags,
  formatTime,
  extractURLs,
  extractEmails,
  extractMentions,
  extractParenthesizedContent,
  extractQuotedText,
  extractHTMLTags,
  extractDates,
  extractPhoneNumbers,
  extractIPv4Addresses,
  extractIPv6Addresses,
  extractFilePaths,
  extractDomainNames,
  extractJSONStrings,
  removeWhitespace
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

describe("extractURLs", () => {
  test("extracts URLs from a string containing multiple URLs", () => {
    expect(extractURLs("Visit https://example.com for more information.")).toEqual([
      "https://example.com",
    ]);
  });

  test("returns an empty array when the string contains no URLs", () => {
    expect(extractURLs("No URLs here.")).toEqual([]);
  });
});

describe("extractEmails", () => {
  test("extracts email addresses from a string containing multiple emails", () => {
    expect(extractEmails("Contact us at info@example.com or support@test.org.")).toEqual([
      "info@example.com", "support@test.org",
    ]);
  });

  test("returns an empty array when the string contains no email addresses", () => {
    expect(extractEmails("No emails here.")).toEqual([]);
  });
});

describe("extractMentions", () => {
  test("extracts mentions from a string containing mentions", () => {
    expect(extractMentions("This is a @mention example.")).toEqual([
      "@mention",
    ]);
  });

  test("returns an empty array when the string contains no mentions", () => {
    expect(extractMentions("No mentions here.")).toEqual([]);
  });
});

describe("extractParenthesizedContent", () => {
  test("extracts content within parentheses from a string", () => {
    expect(extractParenthesizedContent("This is (some content) within parentheses.")).toEqual([
      "(some content)",
    ]);
  });

  test("returns an empty array when the string contains no content within parentheses", () => {
    expect(extractParenthesizedContent("No parentheses here.")).toEqual([]);
  });
});

describe("extractQuotedText", () => {
  test("extracts quoted text from a string containing quotes", () => {
    expect(extractQuotedText('She said, "This is a quoted text."')).toEqual([
      '"This is a quoted text."',
    ]);
  });

  test("returns an empty array when the string contains no quoted text", () => {
    expect(extractQuotedText("No quotes here.")).toEqual([]);
  });
});

describe("extractHTMLTags", () => {
  test("extracts HTML tags from a string containing HTML", () => {
    expect(extractHTMLTags('<p>This is a paragraph.</p> <a href="#">Click here</a>')).toEqual([
      '<p>', '</p>', '<a href="#">', '</a>',
    ]);
  });

  test("returns an empty array when the string contains no HTML tags", () => {
    expect(extractHTMLTags("No HTML tags here.")).toEqual([]);
  });
});

describe("extractDates", () => {
  test("extracts dates from a string containing dates", () => {
    expect(extractDates("Meeting on 12/31/2022. Event: 01-15-2023")).toEqual([
      '12/31/2022', '01-15-2023',
    ]);
  });

  test("returns an empty array when the string contains no dates", () => {
    expect(extractDates("No dates here.")).toEqual([]);
  });
});

describe("extractPhoneNumbers", () => {
  test("extracts phone numbers from a string containing phone numbers", () => {
    expect(extractPhoneNumbers("Contact us at 123-456-7890 or +1 (987) 654-3210.")).toEqual([
      '123-456-7890', '+1 (987) 654-3210',
    ]);
  });

  test("returns an empty array when the string contains no phone numbers", () => {
    expect(extractPhoneNumbers("No phone numbers here.")).toEqual([]);
  });
});

describe("extractIPv4Addresses", () => {
  test("extracts IPv4 addresses from a string containing IPv4 addresses", () => {
    expect(extractIPv4Addresses("IP addresses: 192.168.1.1 and 10.0.0.1")).toEqual([
      '192.168.1.1', '10.0.0.1',
    ]);
  });

  test("returns an empty array when the string contains no IPv4 addresses", () => {
    expect(extractIPv4Addresses("No IPv4 addresses here.")).toEqual([]);
  });
});

describe("extractIPv6Addresses", () => {
  test("extracts IPv6 addresses from a string containing IPv6 addresses", () => {
    expect(extractIPv6Addresses("IPv6 addresses: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 and fe80::1")).toEqual([
      '2001:0db8:85a3:0000:0000:8a2e:0370:7334', 'fe80::1',
    ]);
  });

  test("returns an empty array when the string contains no IPv6 addresses", () => {
    expect(extractIPv6Addresses("No IPv6 addresses here.")).toEqual([]);
  });
});

describe("extractFilePaths", () => {
  test("extracts file paths from a string containing file paths", () => {
    expect(extractFilePaths("File paths: /path/to/file1.txt and C:\\Documents\\file2.docx")).toEqual([
      '/path/to/file1.txt', 'C:\\Documents\\file2.docx',
    ]);
  });

  test("returns an empty array when the string contains no file paths", () => {
    expect(extractFilePaths("No file paths here.")).toEqual([]);
  });
});

describe("extractDomainNames", () => {
  test("extracts domain names from a string containing domain names", () => {
    expect(extractDomainNames("Visit https://www.example.com for more info.")).toEqual([
      'www.example.com',
    ]);
  });

  test("returns an empty array when the string contains no domain names", () => {
    expect(extractDomainNames("No domain names here.")).toEqual([]);
  });
});

describe("extractJSONStrings", () => {
  test("extracts JSON strings from a string containing JSON strings", () => {
    expect(extractJSONStrings('{"key": "value", "nested": {"inner": 42}}')).toEqual([
      '{"key": "value", "nested": {"inner": 42}}',
    ]);
  });

  test("returns an empty array when the string contains no JSON strings", () => {
    expect(extractJSONStrings("No JSON strings here.")).toEqual([]);
  });
});

describe("removeWhitespace", () => {
    test("removes whitespace from a string", () => {
        expect(removeWhitespace(' Hello  World from STRING  Utils! ')).toEqual('HelloWorldfromSTRINGUtils!');
    });

    test("handles a string with multiple spaces between words", () => {
        expect(removeWhitespace('Multiple    Spaces    Between    Words')).toEqual('MultipleSpacesBetweenWords');
    });

    test("handles an empty string", () => {
        expect(removeWhitespace('')).toEqual('');
    });

    test("handles an number", () => {
      expect(removeWhitespace(123)).toEqual('Invalid String');
    });

    // Add more test cases as needed...
});
