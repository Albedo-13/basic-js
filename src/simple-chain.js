const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {    
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || position <= 0 || typeof position != 'number') {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString = "";
    for (let i = 0; i < this.chain.length; i++) {
      chainString += `( ${this.chain[i]} )~~`;
    }
    chainString = chainString.slice(0, -2);
    this.chain = [];
    return chainString;
  }
};

module.exports = {
  chainMaker
};
