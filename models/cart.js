class Cart {
    // store entire product objects, not just ids, as per schema.
    // product min 1, max 5
    products = []; 

    // constructor(userId, codebaseVersion) {
    //     this.userId = userId;
    //     this.codebaseVersion = codebaseVersion;
    // }

    addProduct(product) {
        this.products.push(product);
    }

    getProductCount() {
        return this.products.length;
    }
}

const cartIdGen = CartIdGenerator();

function* CartIdGenerator() {
    var i = 0;
    while (true)
        yield i++;
}

module.exports = Cart;