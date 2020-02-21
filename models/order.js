// orders
class Order {
    // store entire product objects, not just ids, as per schema.
    // product min 1, max 5
    products = []; 

    constructor(userId, codebaseVersion) {
        this.userId = userId;
        this.codebaseVersion = codebaseVersion;
    }

    addProduct(product) {
        this.products.push(product);
    }
}

const orderIdGen = OrderIdGenerator();

var orders = [];
// const carPartsOrder = new Order(orderIdGen.next().value, sam.id, "1.0");

function* OrderIdGenerator() {
    var i = 0;
    while (true)
        yield i++;
}

module.exports = Order;