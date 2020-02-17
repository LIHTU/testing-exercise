

var sumsFeature = {
    name: 'Sums',
    data: [
        [0,0],
        [1,0],
        [1,1]
    ]
}

// Feature: Addition
// Scenario: 1 + 0
//     Given I start with 1
//     When I add 0
//     Then I end up with 1

// Scenario: 1 + 1
//     Given I start with 1
//     When I add 1
//     Then I end up with 2

function createFeatureFromData(fObj) {
    var featureText = 'Feature: ' + fObj.name;
    console.log('featureText', featureText);

    // data.forEach(num, function(){
        
    // })
}

createFeatureFromData(sumsFeature);

