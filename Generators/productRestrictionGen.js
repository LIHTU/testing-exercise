var fs = require('fs');
const _ = require('underscore');
// classes 
var Order = require('../models/order.js');
// data
const ordersData = require("../data/orders.json");
const productCompanies = require("../data/productCompany.json");
const users = require("../data/users.json");

// run this script with `node Generators/productRestrictionGen.js`;

fText = "# This file was generated by a function in Generators/productRestrictionGen.js\n\n";
fText += "Feature: Restrict products by company\n";
fText += "\tScenario Outline: Users can only order products that belong to their own company.\n";
fText += "\t\tGiven a user has an open order on codebase version 2\n";
fText += "\t\tAnd the user has a company id of <userCompanyId>\n";
fText += "\t\tWhen a user adds a product with <productCompanyId> to their cart\n";
fText += "\t\tThen the alert message should be <message>\n";
fText += "\t\tExamples:\n";
fText += "\t\t\t| userCompanyId | productCompanyId\t| message                                                         |\n";

/*
Assumption 1: only verify product restriction by company if order codebase version is 2
Ignore order's user's company's codebase version.
Also ignore order's product's company's codebase version.

Assumption 2: Codebase version 2 should only verify user company and product company agree.  It should not also handle 
cart item and order limits that version 1 handles.
*/

ordersData.forEach(function(order) {
    if (order.codebaseVersion == 1) return;

    // create order object to implement class
    // This shows that we're using our application's actuall business logic in creating the test and determing the results.
    // create order with no products
    var myOrder = new Order(order.id, order.userId, order.codebaseVersion);

    // x number of products in 3 orders on version 2 should result in x rows in the examples table in the feature file. (in our case 5 rows).

    var userCompanyId = _.findWhere(users, {id: order.userId}).company.id;
    console.log('myOrder', myOrder);
    order.products.forEach(function(product) {
        var productCompanyId = _.findWhere(productCompanies, {productId: product.id}).companyId;
        try {
            // add order's products one by one.
            myOrder.addProductToOrder(product, userCompanyId);
            // if no error thrown
            fText += "\t\t\t| "+userCompanyId+"\t\t\t\t| "+productCompanyId+"\t\t\t\t\t| 'Item added to cart!'                                           |\n"
        } catch (err) {
            if (err == "product restricted") {
                fText += "\t\t\t| "+userCompanyId+"\t\t\t\t| "+productCompanyId+"\t\t\t\t\t| 'Sorry. You can only add items from your company to your cart.' |\n"
            } else {
                console.log('err', err); // print uncaught errors
            }
        }
    })
});

fs.writeFile(
    "features/productRestrictionGen.feature", 
    fText, 
    (err) => {
        if (err) throw err;
        console.log('The productRestrictionGen.feature file has been saved!');
    }
);