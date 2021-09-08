import { NotImplementedError } from '../extensions/index.js';
//Complete

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

export default function createDreamTeam(members) {
  if( !members || !members.length )  return false 
  let team = []
  members.forEach(el => {
    if (typeof el === 'string' ) {
      team.push(el.trim()[0].toUpperCase())
    }
  })
  return team.sort().join('')
}

