import { NotImplementedError } from '../extensions/index.js';
//Complete
export default {

  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(val) {
    this.chain.push(`( ${val} )`)

    return this
  },

  removeLink(pos) {
    if (pos < 1 || typeof pos !== 'number' || pos > this.chain.length) {
      this.chain = []
      throw new Error(`You can't remove incorrect link!`)
    }

    this.chain.splice(pos-1, 1)

    return this;
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let result = this.chain.join('~~')

    this.chain = []
    
    return result
  },

};
