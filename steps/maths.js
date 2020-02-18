const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const Calculator = require('../lib/calculator.js');

let calculator;

let answer = 0;

// Empty Example step
// Given('the numbers {int} and {int}', function (int, int2, callback) {
//     // Write code here that turns the phrase above into concrete actions
//     callback(null, 'pending');
// });
// When('they are added together', function (callback) {
//     // Write code here that turns the phrase above into concrete actions
//     callback(null, 'pending');
// });
// Then('should the result be {int}', function (int, callback) {
//     // Write code here that turns the phrase above into concrete actions
//     callback(null, 'pending');
// });


// Finished example step
Given('the numbers {int} and {int}', function (x, y, callback) {
    calculator = new Calculator(x, y);
    callback(); // callback is the original way of dealing with non-blocking asynchronous operations in Node.js 
});
When('they are added together', function () {
    // Write code here that turns the phrase above into concrete actions
    // callback(null, 'pending'); // if using 'callback()', be sure to include as param in invoking fn
    calculator.add()
});
Then('the result should be {int}', function (expected) {
    // Write code here that turns the phrase above into concrete actions
    // callback(null, 'pending');
    assert.equal(calculator.getResult(), expected)
});
