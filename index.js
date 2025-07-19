const SMALL_WORDS = [
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for',
  'in', 'nor', 'of', 'on', 'or', 'the', 'to', 'up', 'yet'
];

function titleCase(str) {
  if (!str || typeof str !== 'string') return '';

  const words = str
    .trim()
    .replace(/\s+/g, ' ') // normalize whitespace
    .split(' ');

  return words
    .map((word, index) => {
      const lower = word.toLowerCase();

      // Always capitalize first and last word
      if (index === 0 || index === words.length - 1) {
        return capitalizeWord(word);
      }

      // Lowercase small words
      if (SMALL_WORDS.includes(lower)) {
        return lower;
      }

      return capitalizeWord(word);
    })
    .join(' ');
}

// Capitalize complex words like "john's", "re-entry"
function capitalizeWord(word) {
  return word
    .split(/([-])/) // keep dashes
    .map(part =>
      /^[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(part) ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() : part
    )
    .join('');
}

module.exports = titleCase;
