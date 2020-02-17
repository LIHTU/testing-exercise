Feature: Addition
    # Scenario: 1 + 0
    #     Given I start with 1
    #     When I add 0
    #     Then I end up with 1

    # Scenario: 1 + 1
    #     Given I start with 1
    #     When I add 1
    #     Then I end up with 2

    Scenario: Add two number
        Given the numbers 1 and 3
        When they are added together
        Then should the result be 4