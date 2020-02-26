Feature: Cart Limits
    Scenario Outline: Don't let cart overfill
        Given a cart has <startQuantity> products on codebase vesrsion 1
        When a user adds an item to the cart
        Then they should see <message>

        Examples:
            | startQuantity | message                                                 |
            | 0             | "Item successfully added to cart"                       |
            | 1             | "Item successfully added to cart"                       |
            | 4             | "Item successfully added to cart"                       |
            | 5             | "Sorry! Your cart already has the max number of items"  |
            | 6             | "Sorry! Your cart already has the max number of items"  |

    Scenario: 0 items in cart
        Given a basic user tries to place an empty order on codebase version 1
        When they try to checkout
        Then they shold see error message "Must have at least on item in cart to check out"
