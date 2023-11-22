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
// Masks a phone number, keeping only the last few digits visible.
function maskPhone(phone, visibleDigits = 4) {
  // Input: '1234567890'
  // Output: '******7890'
  const maskedSection = "*".repeat(phone.length - visibleDigits);
  return maskedSection + phone.slice(-visibleDigits);
}

// Masks a credit card number, showing only the last four digits.
function maskCreditCard(cardNumber, visibleDigits = 4) {
  // Input: '1234567890123456'
  // Output: '************3456'
  return (
    "*".repeat(cardNumber.length - visibleDigits) +
    cardNumber.slice(-visibleDigits)
  );
}

// Masks a part of a string, typically used for hiding sensitive data.
function maskString(string, visibleCount = 4, maskChar = "*") {
  // Input: '123456789', 4, '*'
  // Output: '1234*****'
  return (
    string.slice(0, visibleCount) +
    maskChar.repeat(string.length - visibleCount)
  );
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

// Grouped exports
export { maskEmail, maskPhone, maskCreditCard, maskString, moderate };
