const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const User = require('../models/user.js');
// const Cart = require('../models/cart.js');
const orders = require('../data/orders.json');

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
    // callback(null, 'pending');
    if (cart.quan <= 5) {
        var message = "Success";
        assert.equal(message, expected);
    } else {
        var message = "Failed";
        assert.equal(message, expected);
    }
});