Feature: Verify login functionality for RudderStack App

  Scenario Outline: User should be able to login with valid credentials
    Given I launch RudderStack login page
    When I enter my <email> and <password>
    Then I should be able to login

    Examples: 
      | email                 | password      |
      | validEmail               | validPassword |

Scenario Outline: User should be able to login with valid credentials using API
    Given I make Login API call using <email> and <password>
    Then I should get success response with access key

    Examples: 
      | email                 | password      |
      | validEmail               | validPassword |