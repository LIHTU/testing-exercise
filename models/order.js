class Order {

    constructor(startQuantity) {
        // this.userId = userId;
        // this.codebaseVersion = codebaseVersion;
        this.quantity = startQuantity;
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