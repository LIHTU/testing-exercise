Feature: Add Item to Cart
    Scenario Outline: Don't let cart overfill
        Given a cart has <startQuantity> products
        When I add an item to the cart
        Then I should see <message>

        Examples:
            | startQuantity | message   |
            | 0             | "Success" |
            | 1             | "Success" |
            | 5             | "Failed"  |
            | 6             | "Failed"  |