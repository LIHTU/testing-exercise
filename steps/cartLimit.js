const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const Order = require('../models/order.js');

let order; 

Given('a cart has {int} products on codebase vesrsion 1', function(startQuantity) {
    order = new Order(null, null, 1);
    order.setProductCount(startQuantity);
});
When('a user adds an item to the cart', function () {
    order.addProductToOrder();
});
Then('they should see {string}', function (expected) {
    var successMsg = "Item successfully added to cart";
    var failedMsg = "Sorry! Your cart already has the max number of items";
    if (order.products.length <= 5) {
        assert.equal(successMsg, expected);
    } else {
        assert.equal(failedMsg, expected);
    }
});

var noItemsMsg;

Given("a basic user tries to place an empty order on codebase version 1", function(){
    order = new Order(0, 0, 1);
    order.setProductCount(0);
})
When('they try to checkout', function() {
    try {
        order.checkout();
    } catch(err) {
        if (err == "no items") {
            noItemsMsg = "Must have at least on item in cart to check out";
        } else {
            console.log('err:', err);
        }
    }
})
Then('they shold see error message {string}', function(expectedMsg){
    assert.equal(expectedMsg, noItemsMsg);
})