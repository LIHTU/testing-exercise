const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const User = require('../models/user.js');
// const Cart = require('../models/cart.js');
const orders = require('../data/orders.json');

let cart = {};

Given('a cart has {int} products', function(startQuantity) {
    // user = new User('basic')
    // callback(null, 'pending');
    cart.quan = startQuantity;
});
When('I add an item to the cart', function () {
    // cart.addProduct(product)
    // callback(null, 'pending');
    cart.quan += 1;
});
Then('I should see {string}', function (expected) {
    var successMsg = "Item successfully added to cart";
    var failedMsg = "Sorry! Your cart already has the max number of items";
    if (cart.quan <= 5) {
        assert.equal(successMsg, expected);
    } else {
        assert.equal(failedMsg, expected);
    }
});