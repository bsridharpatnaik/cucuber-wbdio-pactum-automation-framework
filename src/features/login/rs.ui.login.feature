Feature: Verify login functionality for RudderStack App

  Scenario Outline: User should be able to login with valid credentials
    Given I launch RudderStack login page
    When I enter my <email> and <password> and submit
    When I select later on add mfa page
    Then I should be able to login

    Examples: 
      | email                 | password      |
      | validEmail               | validPassword |