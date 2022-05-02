const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (!value) {
      this.chain.push('(  )')
      return this
    } else {
      this.chain.push(`( ${value} )`)
      return this
    }
  },
  removeLink(position) {
    if (typeof position !== 'number' || position % 2 !== 0 || position >= this.length || position <= 0) {
      this.chain = []
      this.length = 0;
      throw new Error ('You can\'t remove incorrect link!')
    } else {
      this.chain.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    this.chain = this.chain.join('~~')
    return this.chain
  }
};

module.exports = {
  chainMaker
};
