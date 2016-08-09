import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import { Products } from '../api/products.js';

import './body.html';

Template.body.helpers({
  products() {
    return Products.find({});
  },
});

Template.body.events({
  'submit .new-product'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const picture = "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/s851x315/12705607_10103717453026164_2358672917172140078_n.jpg?oh=693280520e86da80af0a76874294fc29&oe=5812F87C"
    const text = target.name.value;
    const description = target.description.value;
    const price = target.price.value;
    const modal = document.getElementById('myModal');


    // Insert a task into the collection
    Products.insert({
      picture,
      text,
      description,
      price,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
    modal.style.display = "none";

  },
  'click #myBtn' (event) {
    event.preventDefault();

    const modal = document.getElementById('myModal');

    modal.style.display = "block";
  },
  'click .close' (event) {
    event.preventDefault();

    const modal = document.getElementById('myModal');

    modal.style.display = "none";
  },
  'mouseenter .product-price' (event) {
    event.preventDefault();

    console.log('enter')
  },
  'mouseleave .product-price' (event) {
    event.preventDefault();

    console.log('exit')
  },
  // 'mouseenter .product-price': (event, template) ->
  //   console.log "mousehover", event
  // "mouseleave #elementID": (event, template) ->
  //   console.log "mouseout", event

});
