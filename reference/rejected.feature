# Feature: Add Item to Cart
#     Scenario: Order product quantity
#         Given codebase is version 1
#         And user is type basic
#         When user adds product to cart
#         Then cart should have at least 1 products
#         And cart should have no more than 5 products

#     Scenario: Cart has room
#         Given carts that contain the following amounts of products:
#             | amount |
#             | 0      |
#             | 1      |
#             | 5      |
#             | 6      |
#         And user is type basic
#         When user adds an item to the cart
#         Then cart should have 2 items.

#     Scenario: Cart has room
#         Given codebase is version 1
#         And user is type basic
#         And the cart has 1 items
#         When user adds an item to the cart
#         Then cart should have 2 items.

#     Scenario: Cart has room
#         Given the cart has 4 or fewer items
#         When user adds an item to the cart
#         Then user should see message "Success: Item added to cart."

#     Scenario: Cart is full
#         Given the cart has 5 or more items
#         When user adds an item to the cart
#         Then user should see message "Warning: cart is too full."

