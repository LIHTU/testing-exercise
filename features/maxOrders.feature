Feature: limit orders per user
    Basic users have an order limit of 3.  When a basic user tries to checkout
    make sure they have not already placed 3 orders.

    Scenario Outline: Users are allowed only 3 orders
        Given a basic user has placed <prevOrdersCount> orders
        And user is placing order through codebase version 1
        When they try to checkout
        Then they should see <message>

        Examples:
            | prevOrdersCount | message                                           |
            | 0               | "Checkout Successful"                             |
            | 2               | "Checkout Successful"                             |
            | 3               | "Sorry! You have placed the max number of orders" |
            | 4               | "Sorry! You have placed the max number of orders" |