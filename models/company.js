var fs = require('fs');

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

module.export = Company;