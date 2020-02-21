Feature: Expect Result to be less than 6
    Scenario Outline: Compare an integer to 6
        Given number <int>
        When 1 is added
        Then it should be less than 6

    Examples:
        | int |
        |0|
        |4|
        |  6  |

# Feature: Warn customers if cart is too full
# Scenario Outline: Adding Item to full Cart
#     Given 5 or more products in the cart already
#     When number of products is increased by 1
#     Then warn customer that their cart is too full

# Examples:
#     | int | eat |
#     |  12 |   5 |
#     |  20 |   5 |