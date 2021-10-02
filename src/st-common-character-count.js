import { NotImplementedError } from '../extensions/index.js';

//complete

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let commons = s2

  for (let sym of s1) {
    if (s2.includes(sym)) {
      commons = commons.replace(sym, '');
    }
  }
  return s2.length - commons.length
}

