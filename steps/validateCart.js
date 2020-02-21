const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const User = require('../models/user.js');
const Cart = require('../models/cart.js');
const orders = require('../data/orders.json');

let cart;
let codebaseVesrion;

// Feature: Add Item to Cart
//     Scenario: Order product quantity
//         Given codebase is version 1
//         And user is type basic
//         When user adds product to cart
//         Then cart should have at least 1 products
//         And cart should have no more than 5 products

Given('codebase is version 1', function () {
    console.log('orders', orders);
    // codebaseVesrion = version;
    // callback(null, 'pending'); // callback is the original way of dealing with non-blocking asynchronous operations in Node.js 
});
Given('user is type basic', function() {
    user = new User('basic')
    // callback(null, 'pending');
});
When('user adds product to cart', function (callback) {
    // cart.addProduct(product)
    callback(null, 'pending');
});
Then('cart should have at least 1 products', function (expected) {
    callback(null, 'pending');
});
Then('cart should have no more than 5 products', function (expected) {
    callback(null, 'pending');
});
