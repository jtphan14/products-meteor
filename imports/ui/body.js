import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  products: [
    { picture: 'insert pic here', text: 'This is product 1',  description: 'This is sample description for those who need a description', price: '$100'},
    { picture: 'insert pic here', text: 'This is product 2',  description: 'This is sample description for those who need a description', price: '$100'},
    { picture: 'insert pic here', text: 'This is product 3',  description: 'This is sample description for those who need a description', price: '$100'},
  ],
});
