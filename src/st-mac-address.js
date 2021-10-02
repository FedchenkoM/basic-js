import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {

  const validationString = 'ABCDEF1234567890-'

  for (let i = 0; i < n.length; i++) {

    let cur = n[i]

    if (!validationString.includes(cur)) {
      return false
    }
  }
  
  return n.split('-').length === 6
}

