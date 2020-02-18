# You could procedurally generate this file from order data with node.
Feature: Add Item to Cart
    Scenario: Order product quantity
        Given codebase is version 1
        And user is type basic
        When user adds product to cart
        Then cart should have at least 1 products
        And cart should have no more than 5 products

