const { Given, Then, When } = require('cucumber');
const assert = require('assert');
const _ = require('underscore');
const Order = require('../models/order.js');
const users = require("../data/users.json");

var order;
var errMsg;
var userType;

Given("a super user has an order on codebase version 1", function() {
    // grab a super user from users
    var superUser = _.find(users, {type: "super"});
    order = new Order(null, superUser.id, 1); // create order with super user id 5
})
When("they attempt to place their order", function(){
    // add a prod to make the order otherwise valid
    order.addProductToOrder();
    try {
        order.checkout();
    } catch (err) {
        if (err == "supers can't checkout") {
            errMsg = "Super users cannot place orders";
        } else {
            console.log("unhandled err:", err);
        }
    }
})
Then("they will be alerted {string}", function(expectedErrMsg){
    assert.equal(expectedErrMsg, errMsg);
})