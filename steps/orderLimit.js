const { Given, Then, When } = require('cucumber');
const assert = require('assert');

let ordersCount;

/*
Business rules
1. Only validate orders for basic users
2. Only validate orders on version 1 of the code base.
3. Since v2 restricts prods by company, I think we need to apply it to all users on addToCart.
*/

/*
Questions.
Since only basic users need their orders validated, do we need to enforce the 1-5 product limit, and 3 order limit on special and super users?
Only basic users (sort of an assumption)

How do we only apply this on code version 1?

*/

// Assumption: This only applies to basic user, since only basic user orders need to be validated.
Given('a basic user has placed {int} orders', function(count) {
    ordersCount = count;
});
Given('user is placing order through codebase version 1', function(){
    // no code to run
});
When('they try to checkout', function () {
    // no code to run
});
Then('they should see {string}', function (expected) {
    var successMsg = "Checkout Successful";
    var failedMsg = "Sorry! You have placed the max number of orders";
    if (ordersCount >= 3) {
        assert.equal(failedMsg, expected);
    } else {
        assert.equal(successMsg, expected);
    }
});