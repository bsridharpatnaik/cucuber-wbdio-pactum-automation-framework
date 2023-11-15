Feature: Verify login functionality for RudderStack App

  Scenario Outline: User should be able to login with valid credentials
    Given I launch RudderStack app
    When I enter my <username> and <password>
    Then I should be able to login

    Examples: 
      | username                 | password     |
      | sridhar@evergreencity.in | te@mW0rk@123 |
