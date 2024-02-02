// Masks a part of a string, typically used for hiding sensitive data.
function maskString(string, visibleCount = 4, maskChar = '*') {
  // Input: 'This is a file for government', 20, '*'
  // Output: 'This is a file for *********'
  return (
    string.slice(0, visibleCount) +
    maskChar.repeat(string.length - visibleCount)
  );
}
// Masks an email address for privacy.
function maskEmail(givenstring, symbol = '*') {
  // Input: 'user@example.com'
  // Output: 'u***@example.com'

  let maskSymbol = symbol; //symbol || '*'

  let [leftpart, rightpart] = givenstring.split('@');

  leftpart = leftpart.charAt(0) + maskSymbol.repeat(leftpart.length - 1);

  let [company, domain] = rightpart.split('.');

  company = company.charAt(0) + maskSymbol.repeat(company.length - 1);

  let finalstring = leftpart + '@' + company + '.' + domain;

  return finalstring;
}

function moderate(text, wordsArray, mask = '*') {
  //Input : 'This is an example sentence with some sensitive words.'
  //Output: 'This is an e****** sentence with some s******** words.'

  let moderatedText = text;

  wordsArray.forEach((word) => {
    const regExp = new RegExp(`\\b${word}\\b`, 'gi');
    moderatedText = moderatedText.replace(
      regExp,
      word.charAt(0) + mask.repeat(word.length - 1)
    );
  });

  return moderatedText;
}

// Mask a phone number.
function maskPhone(phone, visibleDigits = 4) {
  // Input: '1234567890'
  // Output: '******7890'
  const phoneNumber = phone.toString();
  const phoneNumberLength = phoneNumber.length;

  if (
    !Number.isInteger(visibleDigits) ||
    visibleDigits < 0 ||
    phoneNumberLength !== 10 ||
    phoneNumber.replace(/\D/g, '').length !== 10
  ) {
    throw new Error(
      'Invalid input. Please provide a non-negative integer for visibleDigits, and ensure it is not greater than the length of the phone number.'
    );
  }

  const maskedPart = '*'.repeat(phoneNumberLength - visibleDigits);
  const visiblePart = phoneNumber.slice(-visibleDigits);

  return maskedPart + visiblePart;
}

// 💳 Contribution Station - Compose a function to mask credit card numbers.
function maskCreditCard(cardNumber, visibleDigits = 4) {
  // Input:  '1234567890123456'
  // Output: '************3456'
  if (
    !Number.isInteger(visibleDigits) ||
    visibleDigits < 0 ||
    cardNumber.length !== 16 ||
    !/^\d+$/.test(cardNumber)
  ) {
    throw new Error(
      'Invalid input. Please provide a 16-digit card number containing only numeric characters and a non-negative integer for visibleDigits.'
    );
  }

  const maskedPart = '*'.repeat(16 - visibleDigits);
  const visiblePart = cardNumber.slice(-visibleDigits);

  return maskedPart + visiblePart;
}
// Grouped exports
export { maskEmail, maskCreditCard, maskString, moderate, maskPhone };
