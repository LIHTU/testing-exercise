Feature: Restrict products by company
    In version 2 of the software users can add products to their carts
    only if the products belong to the company that the user belongs to.

    Scenario Outline: Users can only order products that belong to their own company.
        Given a user places an order on codebase version 2
        And a company exists on codebase version 2
        And the user's company id is <userCompanyId>
        When a user add a product with <productCompanyId> to their cart
        Then the alert message should be <message>

        Examples:
            | userCompanyId | productCompanyId | message                                                         |
            | 1             | 1                | "Item added to cart!"                                           |
            | 1             | 2                | "Sorry. You can only add items from your company to your cart." |
            | 2             | 1                | "Sorry. You can only add items from your company to your cart." |
            | 1             | 1                | "Item added to cart!"                                           |