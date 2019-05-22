'use strict';

const Products = require('../../../src/models/products.js');

const supergoose = require('./supergoose.js');
beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

