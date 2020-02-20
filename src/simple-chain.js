const chainMaker = {
  link: [],
  linksub: '',
  linkLength: 0,
  getLength() {
  this.linkLength = link.length;  
  return this;
  },
  addLink(value) {
    this.link.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    
  if(Number.isInteger(position) && position > 0 && position < this.link.length + 1){
    this.link.splice(position-1, 1);
  }else{
    this.link = [];
    throw new Error('error');
  }
  return this;
  },
  reverseChain() {
  this.link.reverse();
  return this;
  },
  finishChain() {
    this.linksub = this.link.join('~~');
    this.link = [];
    return this.linksub;
  }
  
};

module.exports = chainMaker;
