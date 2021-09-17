import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * 
 * //Complete
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
  let arr = []
  let [current, counter] = [str[0], 1]
  for( let i = 1; i <= str.length; i++) {
    if( str[i] === current) {
      counter++
    } else {
      counter > 1 ? arr.push([counter, current]) : arr.push([current]) 
      current = str[i]
      counter = 1
    }
  }
  return arr.flat().join('');
}

