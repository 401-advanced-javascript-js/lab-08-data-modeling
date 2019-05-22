'use strict';


// version 4 uses random id
// uuid() will return djflkajfoihoioi23h423r9u
const uuid = require('uuid/v4');

const schema = {
  _id: {required: true},
  name: {required: true}
};

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
  }
  
  post(entry) {
  }

  put(id, entry) {
  }

  delete(id) {
  }

  sanitize(entry) {
  }

}

module.exports = Products;