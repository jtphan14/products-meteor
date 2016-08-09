import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  products: [
    { text: 'This is product 1' },
    { text: 'This is product 2' },
    { text: 'This is product 3' },
  ],
});
