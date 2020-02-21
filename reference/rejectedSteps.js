// v1
// Feature: Add Item to Cart
//     Scenario: Order product quantity
//         Given codebase is version 1
//         And user is type basic
//         When user adds product to cart
//         Then cart should have at least 1 products
//         And cart should have no more than 5 products

// Given('codebase is version 1', function (callback) {
//     console.log('orders', orders);
//     // codebaseVesrion = version;
//     callback(null, 'pending'); // callback is the original way of dealing with non-blocking asynchronous operations in Node.js 
// });
// Given('user is type basic', function(callback) {
//     user = new User('basic')
//     callback(null, 'pending');
// });
// Given('cart has {int} items', function(callback) {
//     user = new User('basic')
//     callback(null, 'pending');
// });
// When('I add an item to the cart', function (callback) {
//     // cart.addProduct(product)
//     callback(null, 'pending');
// });
// Then('cart should have {int} plus one items.', function (expected) {
//     callback(null, 'pending');
// });

// Given('the cart has 4 or fewer items', function() {
//     // user = new User('basic')
//     // callback(null, 'pending');
// });
// When('user adds an item to the cart', function () {
//     // cart.addProduct(product)
//     // callback(null, 'pending');
// });
// Then('user should see message ', function (expected) {
//     callback(null, 'pending');
// });


// Given('the cart has 5 or more items', function(callback) {
//     user = new User('basic')
//     callback(null, 'pending');
// });
// When('user adds an item to the cart', function (callback) {
//     // cart.addProduct(product)
//     callback(null, 'pending');
// });
// Then('user should see message "Warning: cart is too full."', function (expected) {
//     callback(null, 'pending');
// });
