const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const User = require('../models/user.js');
const Order = require('../models/order.js');
const orders = require('../data/orders.json');

let order; 

Given('a cart has {int} products', function(startQuantity) {
    // user = new User('basic')
    order = new Order(startQuantity);
});
When('I add an item to the cart', function () {
    order.addItem();
});
Then('I should see {string}', function (expected) {
    var successMsg = "Item successfully added to cart";
    var failedMsg = "Sorry! Your cart already has the max number of items";
    if (order.quantity <= 5) {
        assert.equal(successMsg, expected);
    } else {
        assert.equal(failedMsg, expected);
    }
});