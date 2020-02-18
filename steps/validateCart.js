const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const User = require('../class.js');

let cart;
let codebaseVesrion;

Given('codebase is version {int}', function (version) {
    codebaseVesrion = version;
    // callback(null, 'pending'); // callback is the original way of dealing with non-blocking asynchronous operations in Node.js 
});
Given('user is type basic', function() {
    user = new User('basic')
    console.log('getType:', user.getType(user));
    // callback(null, 'pending');
});
When('user adds product to cart', function (callback) {
    callback(null, 'pending');
});
Then('cart should have at least 1 products', function (expected) {
    callback(null, 'pending');
});
Then('cart should have no more than 5 products', function (expected) {
    callback(null, 'pending');
});
