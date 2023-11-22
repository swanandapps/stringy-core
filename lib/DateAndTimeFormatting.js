// Formats a number within a string.
function formatNumber(string) {
  // Input: 'The population is 1234567'
  // Output: 'The population is 1,234,567'
  return string.replace(/\d+/g, (num) => new Intl.NumberFormat().format(num));
}

// Formats a number in a string as a currency value.
function formatCurrency(string, locale = "en-US", currency = "USD") {
  // Input: '1234.56'
  // Output: '$1,234.56'
  return string.replace(/\d+(\.\d+)?/g, (num) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(num)
  );
}

// Converts date strings into a more readable format.
function formatDate(string, locale = "en-US", options = {}) {
  // Input: '2023-03-01'
  // Output: '3/1/2023' (in 'en-US' locale)
  return string.replace(/(\d{4}-\d{2}-\d{2})/g, (date) =>
    new Intl.DateTimeFormat(locale, options).format(new Date(date))
  );
}

// Formats the time portion of a date.
function formatTime(string, locale = "en-US") {
  // Input: new Date('2023-03-01T15:30:00')
  // Output: '3:30 PM'
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(string));
}

// Formats a date and time.
function formatDateTime(string, locale = "en-US") {
  // Input: new Date('2023-03-01T15:30:00')
  // Output: '1/3/2023, 3:30 PM'
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(string));
}

// Formats a date as a relative time string.
function formatRelativeTime(date, baseDate = new Date(), locale = "en-IN") {
  // Input: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
  // Output: '3 days ago'
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const elapsedTime = date - baseDate;

  const units = [
    { unit: "year", length: 365 * 24 * 60 * 60 * 1000 },
    { unit: "month", length: 30 * 24 * 60 * 60 * 1000 },
    { unit: "day", length: 24 * 60 * 60 * 1000 },
    { unit: "hour", length: 60 * 60 * 1000 },
    { unit: "minute", length: 60 * 1000 },
    { unit: "second", length: 1000 },
  ];

  for (const { unit, length } of units) {
    if (Math.abs(elapsedTime) > length || unit === "second") {
      return formatter.format(Math.round(elapsedTime / length), unit);
    }
  }
}

// Grouped exports
export {
  formatNumber,
  formatCurrency,
  formatDate,
  formatTime,
  formatDateTime,
  formatRelativeTime,
};
