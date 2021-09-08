import { NotImplementedError } from '../extensions/index.js';
//Complete

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let maxNum = 0
  let stringNum = String(n)

  for( let i = 0; i < stringNum.length; i++ ){
    let candidate = changeNum(stringNum, i) 

    if( candidate > maxNum){
      maxNum = candidate
    }

  }

  function changeNum(n, index) {
    let res = n.substring(0, index) + n.substring(index + 1, n.length)

    return +res
  } 
  
  return maxNum

}

