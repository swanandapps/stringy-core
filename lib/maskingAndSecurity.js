// Masks an email address for privacy.
function maskEmail(email) {
  // Input: 'user@example.com'
  // Output: 'u***@example.com'
  const [username, domain] = email.split("@");
  const maskedUsername = username[0] + "*".repeat(username.length - 1);
  return `${maskedUsername}@${domain}`;
}

// Masks a phone number, keeping only the last few digits visible.
function maskPhone(phone, visibleDigits = 4) {
  // Input: '1234567890'
  // Output: '******7890'
  const maskedSection = "*".repeat(phone.length - visibleDigits);
  return maskedSection + phone.slice(-visibleDigits);
}

// Masks a credit card number, showing only the last four digits.
function maskCreditCard(cardNumber) {
  // Input: '1234567890123456'
  // Output: '************3456'
  return "*".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
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

// Grouped exports
export { maskEmail, maskPhone, maskCreditCard, maskString };
