// Masks a part of a string, typically used for hiding sensitive data.
function maskString(string, visibleCount = 4, maskChar = "*") {
  // Input: 'This is a file for government', 20, '*'
  // Output: 'This is a file for *********'
  return (
    string.slice(0, visibleCount) +
    maskChar.repeat(string.length - visibleCount)
  );
}
// Masks an email address for privacy.
function maskEmail(givenstring, symbol = "*") {
  // Input: 'user@example.com'
  // Output: 'u***@example.com'

  let maskSymbol = symbol; //symbol || '*'

  let [leftpart, rightpart] = givenstring.split("@");

  leftpart = leftpart.charAt(0) + maskSymbol.repeat(leftpart.length - 1);

  let [company, domain] = rightpart.split(".");

  company = company.charAt(0) + maskSymbol.repeat(company.length - 1);

  let finalstring = leftpart + "@" + company + "." + domain;

  return finalstring;
}

function moderate(text, wordsArray, mask = "*") {
  //Input : 'This is an example sentence with some sensitive words.'
  //Output: 'This is an e****** sentence with some s******** words.'

  let moderatedText = text;

  wordsArray.forEach((word) => {
    const regExp = new RegExp(`\\b${word}\\b`, "gi");
    moderatedText = moderatedText.replace(
      regExp,
      word.charAt(0) + mask.repeat(word.length - 1)
    );
  });

  return moderatedText;
}

// 📞 Contribution Station - Design a function to mask a phone number.
function maskPhone(phone, visibleDigits = 4) {
  /*
    Input: '1234567890'
    Expected Output: '******7890'
    Keep the last digits in sight while the rest go incognito. Ready to code? Export function when done.
  */
}

// 💳 Contribution Station - Compose a function to mask credit card numbers.
function maskCreditCard(cardNumber, visibleDigits = 4) {
  /*
    Input: '1234567890123456'
    Expected Output: '************3456'
    Mask all but the digits provided in arguments by user for secure display. Code your solution and make sure to export it.
  */
}
// Grouped exports
export { maskEmail, maskCreditCard, maskString, moderate };
