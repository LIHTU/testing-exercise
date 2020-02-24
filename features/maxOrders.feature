Feature: limit orders per user
    Scenario Outline: Users are allowed only 3 orders
        Given a user has placed <prevOrdersCount> orders
        When they try to checkout
        Then they should see <message>

        Examples:
            | prevOrdersCount | message                                           |
            | 0               | "Checkout Successful"                             |
            | 2               | "Checkout Successful"                             |
            | 3               | "Sorry! You have placed the max number of orders" |
            | 4               | "Sorry! You have placed the max number of orders" |