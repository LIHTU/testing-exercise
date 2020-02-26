# Inseego Exercise 
### submitted by Robin Nelson

## About
The separate file that contains the orders data that tests all requirments is in data/orders.json
I included object structure examples also in ./data/
I added a "name" property to the order class for the sake of identifying what requirements the order tested, albeit the name property was not defined in exercise description.

I also included class definitions for most of the object types.  The only one I call in my code is the Order class because it encapsulates some of the business logic that is required for the tests.  The other classes really just reflect the object strutures (i.e. company, user, productCompany...) and I didn't see any point in implementing them as instances of their class and instead just query data from their respective json files when necessary.

## Programatically Generated Tests
cartLimit and orderLimit are static tests that don't draw from the oject data.
The productRestriction.feature on the other hand is a generated feature file whose examples table is populated from the orders data.  It may not technically be necessary to generate a feature file from data since we're just testing for equality of 2 values but this was the best way I could think of to couple the orders data with the actual tests, which I think is a requirement per the instruction "Run your tests to validate the orders fulfill your test plan".  I wrote generation script for the cart limit feature as well but it seemed like overkill since the test was basically just testing if product count was greater than 5, so I reverted back to the static test.  The generation script is in the old/steps if you care to look.

To add more test cases, simply add more orders objects to the orders.json file and make sure their codebaseVersion is 2.
To regenerate the productRestrictionGen.feature file just run `node Generators/productRestrictionGen.js` from the top level directory.  You'll have to have nodeJs installed to do this.
Then run the cucumber tests to see the results.

## How to run the cucumber tests
In the top level directory run:
`npm run cucumber`