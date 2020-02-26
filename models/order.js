const _ = require('underscore');
const productCompanies = require("../data/productCompany.json");
const users = require("../data/users.json");

class Order {

    products = [];

    constructor(id, userId, codebaseVersion) {
        this.id = id;
        this.userId = userId;
        this.codebaseVersion = codebaseVersion;
    }

    setProductCount(quantity) {
        this.products.length = quantity;
    }

    // "add to cart"
    addProductToOrder(product, userCompanyId) {
        if (this.codebaseVersion == 1) {
            if (!product) {
                this.products.length += 1;
            } else {
                this.products.push(product);
            }
        } else {
            // get product company id
            let productCompanyId = _.findWhere(productCompanies, { productId: product.id}).companyId;
            if (productCompanyId != userCompanyId) {
                throw("product restricted");
            }
        }
    }

    checkout() {
        if (this.userId) {
            var userType = _.find(users, {id: this.userId}).type;
        }
        if (this.products.length == 0) {
            throw('no items');
        } else if (userType == "super") {
            throw("supers can't checkout");
        } 
        // else if (userOrdersCount >= 5) {
        //     // would need to track placed orders
        // }
    }
}

module.exports = Order;