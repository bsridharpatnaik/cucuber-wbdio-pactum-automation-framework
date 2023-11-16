Feature: Verify login functionality for RudderStack App

  Scenario Outline: User should be able to login with valid credentials
    Given I launch RudderStack login page
    When I enter my <username> and <password>
    Then I should be able to login

    Examples: 
      | username                 | password     |
      | sridhar@evergreencity.in | te@mW0rk@123 |

Scenario Outline: User should be able to login with valid credentials using API
    Given I make Login API call using <username> and <password>
    Then I should get success response with access key

    Examples: 
      | username                 | password     |
      | sridhar@evergreencity.in | te@mW0rk@123 |