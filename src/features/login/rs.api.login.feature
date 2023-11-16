Feature: Verify login functionality for RudderStack API

  Scenario Outline: User should be able to login with valid credentials using API
    Given I make Login API call using <email> and <password>
    Then I should get success response with access key

    Examples: 
      | email      | password      |
      | validEmail | validPassword |
