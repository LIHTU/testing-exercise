const { Given, Then, When } = require('cucumber');
const assert = require('assert');

let userCompanyId;
let productCompanyId;
let message;

Given('a user places an order on codebase version 2', function() {
    // no code to run
});
Given('a company exists on codebase version 2', function(){
    // no code to run
});
Given('the user\'s company id is {int}', function(userCompId){
    userCompanyId = userCompId;
});
When('a user add a product with {int} to their cart', function (productCompId) {
    productCompanyId = productCompId;
});
Then('the alert message should be {string}', function (expected) {
    var successMsg = "Item added to cart!";
    var failedMsg = "Sorry. You can only add items from your company to your cart.";
    if (userCompanyId == productCompanyId) {
        assert.equal(successMsg, expected);
    } else {
        assert.equal(failedMsg, expected);
    }
});