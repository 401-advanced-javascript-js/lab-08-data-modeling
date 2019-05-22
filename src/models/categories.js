'use strict';

// version 4 uses random id
// uuid() will return djflkajfoihoioi23h423r9u
const uuid = require('uuid/v4');

const schema = {
  _id: {required: true},
  name: {required: true},
};

// Categories data model
class Categories {

  constructor() {
    this.database = [];
  }

  /**
   * Get category of passed id
   * 
   * @param {integer} _id 
   * @returns {Promise|null} promise that resolves to category of passed in id, null if category with id doesn't exist
   */
  get(_id) {
    // if no id passed, return all categories
    if (!_id) return Promise.resolve(this.database);
    for (const cat of this.database) {
      if (cat._id === _id) {
        return Promise.resolve(cat);
      }
    }
    // if id not found, return all categories
    return Promise.resolve(this.database);
  }
  
  /**
   * 
   * 
   * @param {Object} record, contains category data
   * @returns {Promise}
   */
  post(record) {
    // validate
    // add to db
    // return record 
  }

  /**
   * Update data for category with passed id
   * 
   * @param {integer} _id 
   * @param {Object} record 
   * @returns {Promise}
   */
  put(_id, record) {
  }

  /**
   * Delete category with passed id
   * @param {integer} _id 
   * @returns {Promise}
   */
  delete(_id) {
  }

  

}

module.exports = Categories;
