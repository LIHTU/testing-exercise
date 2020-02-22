class Order {

    constructor(startQuantity) {
        // this.userId = userId;
        // this.products = [];
        // this.productsQuantity = 0;
        this.quantity = startQuantity;
        // this.codebaseVersion = codebaseVersion;
    }

    addProduct(product) {
        this.products.push(product);
    }

    addItem() {
        this.quantity += 1;
    }
}

const orderIdGen = OrderIdGenerator();

function* OrderIdGenerator() {
    var i = 0;
    while (true)
        yield i++;
}

module.exports = Order;