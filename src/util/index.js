/**
 * @param {string} word word to capitalize
 * @returns {string} capitalized version of word
 */
export const capitalized = (word) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();
