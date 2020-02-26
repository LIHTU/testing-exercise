Feature: Super Users can't checkout
    Scenario: Super tries to checkout
        Given a super user has an order on codebase version 1
        When they attempt to place their order
        Then they will be alerted "Super users cannot place orders"