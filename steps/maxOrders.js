const { Given, Then, When } = require('cucumber');
const assert = require('assert');

let ordersCount;

Given('a user has placed {int} orders', function(count) {
    ordersCount = count;
});
When('they try to checkout', function () {
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


// class UserOrdersCollection {
//     constructor(count){
//         this.count = count;
//     }
//     printCount() {
//         console.log('count', this.count);
//     }
// }

//Undefined. Implement with the following snippet:

// Given('a user has placed <prevOrdersCount> orders', function (count) {
//     // Write code here that turns the phrase above into concrete actions
//     ordersCount = new UserOrdersCollection(count);
// });
//Error: function timed out, ensure the callback is executed within 5000 milliseconds


// Given('a user has placed {int} orders', function(count, callback) {
//     ordersCount = count;
// });
// Undefined. Implement with the following snippet:

// Given('a user has placed <prevOrdersCount> orders', function (count) {
//     ordersCount = count;
//     console.log(ordersCount);
// });
// Error: function timed out, ensure the callback is executed within 5000 milliseconds