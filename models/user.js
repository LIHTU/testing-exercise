class User {
    // todo: handle id and company
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

// NodeJS uses CommonJS Module syntax (module.exports) not ES6 module syntax (export keyword).

module.exports = User;