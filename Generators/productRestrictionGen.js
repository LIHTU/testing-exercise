var fs = require('fs');
const _ = require('underscore');
// classes 
var Order = require('../models/order.js');
// data
const ordersData = require("../data/orders.json");
const productCompanies = require("../data/productCompany.json");
const users = require("../data/users.json");

// run with `node Generators/productRestrictionGen.js`;

fText = "# This file was generated by a function in Generators/productRestrictionGen.js\n\n";
fText += "Feature: Restrict products by company\n";
fText += "\tScenario Outline: Users can only order products that belong to their own company.\n";
fText += "\t\tGiven a user has an open order on codebase version 2\n";
fText += "\t\tAnd the user has a company id of <userCompanyId>\n";
fText += "\t\tWhen a user adds a product with <productCompanyId> to their cart\n";
fText += "\t\tThen the alert message should be <message>\n";
fText += "\t\tExamples:\n";
// TODO: maybe use tabs here. 🔻
fText += "\t\t\t| userCompanyId | productCompanyId\t| message                                                         |\n";

// TODO: determine if you want to utilize user, company, product classes.
// if not, explain why.

class Company {
    constructor(id, codebaseVersion) {
        this.codebaseVersion = codebaseVersion;
        this.id = id;
    }
}

/*
Assumption 1: only verify product restriction by company if order codebase version is 2
Ignore order's user's company's codebase version.
Also ignore order's product's company's codebase version.

Assumption 2: Codebase vesrion 2 should only verify user company and product company agree.  It should not also handle 
cart item and order limits that version 1 handles.
*/

ordersData.forEach(function(order) {
    if (order.codebaseVersion == 1) return;

    // create order object to implement class
    // This shows that we're using our application's actuall business logic in creating the test and determing the results.
    var myOrder = new Order(order.id, order.userId, order.codebaseVersion);

    // start building a flat object for each product in the order to populate the feature file examples table.
    // x products in 3 orders on version 2 should result in x rows. (in our case 5 rows).
    var flatOrder = order;

    // todo factor out flat order object.
    flatOrder.userCompanyId = _.findWhere(users, {id: flatOrder.userId}).company.id;

    flatOrder.products.forEach(function(product) {
        flatOrder.productCompanyId = _.findWhere(productCompanies, {productId: product.id}).companyId;
        try {
            myOrder.addProductToOrder(product, flatOrder.userCompanyId);
            // if no error thrown
            fText += "\t\t\t| "+flatOrder.userCompanyId+"\t\t\t\t| "+flatOrder.productCompanyId+"\t\t\t\t\t| 'Item added to cart!'                                           |\n"
        } catch (err) {
            if (err == "product restricted") {
                fText += "\t\t\t| "+flatOrder.userCompanyId+"\t\t\t\t| "+flatOrder.productCompanyId+"\t\t\t\t\t| 'Sorry. You can only add items from your company to your cart.' |\n"
            } else {
                console.log('err', err);
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