Feature: Add Item to Cart
    Scenario Outline: Don't let cart overfill
        Given a cart has <startQuantity> products
        When I add an item to the cart
        Then I should see <message>

        Examples:
            | startQuantity | message                                                 |
            | 0             | "Item successfully added to cart"                       |
            | 1             | "Item successfully added to cart"                       |
            | 4             | "Item successfully added to cart"                       |
            | 5             | "Sorry! Your cart already has the max number of items"  |
            | 6             | "Sorry! Your cart already has the max number of items"  |