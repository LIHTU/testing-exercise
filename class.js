var fs = require('fs');


// users


// orders
class Order {
    products = []; // store entire product objects, not just ids, as per schema.
    // product min 1, max 5

    constructor(id, userId, codebaseVersion) {
        this.id = id;
        this.userId = userId;
        this.codebaseVersion = codebaseVersion;
    }

    addProduct(product) {
        this.products.push(product);
    }
}

const orderIdGen = OrderIdGenerator();

var orders = [];
const carPartsOrder = new Order(orderIdGen.next().value, sam.id, "1.0");

function* OrderIdGenerator() {
    var i = 0;
    while (true)
        yield i++;
}



// Company 
class Company {
    constructor(id, codebaseVersion) {
        this.codebaseVersion = codebaseVersion;
        this.id = id;
    }
}

const companyIdGen = CompanyIdGenerator();
const carPartsCompany = new Company(companyIdGen.next().value, "1.0");
const petToysCompany = new Company(companyIdGen.next().value, "2.0");

function* CompanyIdGenerator() {
    var i = 0;
    while (true)
        yield i++;
}

let companiesJson = {
    companies: [
        carPartsCompany,
        petToysCompany
    ]
}

// write companies data to file companies.json
// run `node class.js` to generate this file and other files of this nature.
if (!fs.existsSync('./data/companies.json')){
    fs.writeFile("data/companies.json", JSON.stringify(companiesJson), (err) => {
        if (err) throw err;
        console.log('The companies.json file has been saved!');
    });
}