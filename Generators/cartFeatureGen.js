var fs = require('fs');
const _ = require('underscore');
// classes 
var Order = require('../models/order.js');
// data
const ordersData = require("../data/orders.json");
const users = require("../data/users.json");

// run with `node Generators/cartFeatureGen.js`;

// TODO: handle case where order has no products and user checks out

var cart = [];
fText = "# This file was generated by a function in Generators/cartFeatureGen.js\n\n";

var cartFeature = {
    name: 'Order product quantity between 1 and 5',
    scenarios: [
        {
            name: "add another order to the cart"
        }
    ]
}

ordersData.forEach(function(order){
    createCartQuanFeature(order);
});

fs.writeFile(
    "features/cart_generated.feature", 
    fText, 
    (err) => {
        if (err) throw err;
        console.log('The cart_generated.feature file has been saved!');
    }
);

function createCartQuanFeature(order) {
    // Feature: Add Item to Cart
    //     Scenario: Order product quantity
    //         Given codebase is version 1
    //         And user is type basic
    //         When user adds product to cart
    //         Then cart should have at least 1 products
    //         And cart should have no more than 5 products

    // Feature: Add Item to Cart
    //     Scenario: Cart has room
    //         Given the cart has 4 or fewer items
    //         When user adds another item to the cart
    //         Then user should see message "Success: Item added to cart."

    //     Scenario: Cart is full
    //         Given the cart has 5 or more items
    //         When user adds another item to the cart
    //         Then user should see message "Warning: cart is too full."

    // QUITE SURE YOU DON'T NEED A SCENARIO OUTLINE FOR THIS FEATURE!

    var order = joinUserToOrder(order);

    fText += 'Feature: Testing an order with ' + Number(order.products.length)  + ' products\n';
    fText += "\tScenario: " + order.name + "\n";

    order.products.forEach(function(product) {
        // cart.push(product);
        
        // exec("node cucumber /features -r /steps");
        // if you want to use exec() see link: https://stackabuse.com/executing-shell-commands-with-node-js/

        fText += "\t\tGiven codebase is version 1\n";
        fText += "\t\tAnd user is type basic\n";
        fText += "\t\tWhen user adds product to cart\n"
        fText += "\t\tThen cart should have at least 1 products" + "\n"
        fText += "\t\tAnd cart should have no more than 5 products" + "\n\n"
    })
}

function joinUserToOrder(order) {
    var orderUser = _.findWhere(users, function(user){
        return user.id = order.userId;
    })
    order.userType = orderUser.type;
    order.companyId = orderUser.companyId;
    return order;
}
