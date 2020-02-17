const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const Calculator = require('../lib/calculator.js');

let calculator;

let answer = 0;

Given('the numbers {int} and {int}', function (x, y, callback) {
    calculator = new Calculator(x, y);
    callback();
});

When('they are added together', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
});

Then('should the result be {int}', function (int, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
});

// Given('I start with {int}', function (input) {
//     // Write code here that turns the phrase above into concrete actions
//     // calculator = new Calculator();    
//     callback(null, 'pending');
// });
// When('I add {int}', function (input) {
//     // Write code here that turns the phrase above into concrete actions
//     // callback(null, 'pending');
//     answer = input + answer;
// });
// Then('I end up with {int}', function (input) {
//     // Write code here that turns the phrase above into concrete actions
//     // callback(null, 'pending');
//     assert.equal(answer, input);
// });
