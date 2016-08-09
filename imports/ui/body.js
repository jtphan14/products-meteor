import { Template } from 'meteor/templating';

import { Products } from '../api/products.js';

import './body.html';

Template.body.helpers({
  products() {
    return Products.find({});
  },
});
