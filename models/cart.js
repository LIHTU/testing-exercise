class Cart {
    // store entire product objects, not just ids, as per schema.
    quantity = 0;

    constructor(startingQuantity) {
        // this.userId = userId;
        this.products = [];
        this.quantity = startingQuantity;
        // this.codebaseVersion = codebaseVersion;
    }

    addProduct(product) {
        this.products.push(product);
    }

    addItem() {
        this.quantity += 1;
    }
}

const cartIdGen = CartIdGenerator();

function* CartIdGenerator() {
    var i = 0;
    while (true)
        yield i++;
}

module.exports = Cart;