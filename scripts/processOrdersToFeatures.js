const ordersData = require("../data/orders.json");
const users = require("../data/users.json");
const fs = require('fs');
const _ = require('underscore');

// let ordersData = {}

// fs.readFile('./data/orders.json', 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     // console.log('data', data);
//     ordersData = JSON.parse(data);
//     // console.log('ordersData', ordersData);
// });

// console.log('ordersData glob', ordersData);
// console.log('typeof(ordersData)', typeof(ordersData));

ordersData.forEach(function(order){
    // join user info into new "user" property
    var orderFlat = order;
    var orderUser = _.findWhere(users, function(user){
        return user.id = order.userId;
    })
    orderFlat.userType = orderUser.type;
    orderFlat.companyId = orderUser.companyId;
    // and maybe delete userId property since it will be redundant.

    

    order.products.forEach((product, index) => {
        console.log(index, product);
    })
})

