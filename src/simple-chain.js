const chainMaker = {
  listLinks: [],
  getLength() {
    return this.listLinks.length;
  },
  addLink(value) {
    let template = `( ${value} )~~`;
    this.listLinks.push(template);
    return this;
  },
  removeLink(position) {
    if (position > this.getLength() || position < 1 || typeof(position) !== 'number' ) {
      this.listLinks = [];
      throw new Error('Error');
    }
    this.listLinks.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.listLinks.reverse();
    return this;
  },
  finishChain() {
    let finish = this.listLinks.join('').slice(0, -2);
    this.listLinks = [];
    return finish;
  }
};

module.exports = chainMaker;
