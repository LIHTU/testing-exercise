const _ = require('underscore');
const productCompanies = require("../data/productCompany.json");

class Order {

    products = [];
    quantity = 0;

    constructor(id, userId, codebaseVersion) {
        this.id = id;
        this.userId = userId;
        this.codebaseVersion = codebaseVersion;
    }

    setQuantity(quantity){
        this.quantity = quantity;
    }

    // "add to cart"
    addProductToOrder(product, userCompanyId) {
        console.log('adding prod')
        if (this.codebaseVersion == 1) {
            this.products.push(product);
        } else {
            // get product company id
            let productCompanyId = _.findWhere(productCompanies, { productId: product.id}).companyId;
            if (productCompanyId != userCompanyId) {
                throw("product restricted");
            }
        }
    }

    addItem() {
        this.quantity += 1;
    }
}

module.exports = Order;