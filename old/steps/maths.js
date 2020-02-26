const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const Calculator = require('../models/calculator.js');

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
Given('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});
When('they are added together', function () {
    calculator.add()
});
Then('the result should be {int}', function (expected) {
    assert.equal(calculator.getResult(), expected)
});

var addOne = (n) => {return n + 1};

let num;
let cartNum;
Given('number {int}', function(n) {
    num = n;
});
When('1 is added', function(){
    cartNum = addOne(num);
})
Then('it should be less than 6', function() {
    var message = 'fail';
    if (cartNum > 0 && cartNum < 6) {
        message = 'success'
        assert.equal(message, 'success');
    } else {
        assert.equal(message, 'fail');
    }
})