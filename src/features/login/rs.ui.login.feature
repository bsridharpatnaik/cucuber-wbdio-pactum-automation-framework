Feature: Verify login functionality for RudderStack App

  @UI
  Scenario Outline: Login Button should be disabled on page load
    Given I launch RudderStack login page
    Then Login button should be disabled

  @UI
  Scenario Outline: Login Button should be disabled on page load
    Given I launch RudderStack login page
    Then Login button should be disabled

  @UI
  Scenario Outline: User should be able to login with valid credentials
    Given I launch RudderStack login page
    When I enter my <email> and <password> and submit
    When I select later on add mfa page
    Then I should land on Dashboard

    Examples: 
      | email        | password        |
      | <validEmail> | <validPassword> |

  @UI
  Scenario Outline: User should NOT be able to login with invalid credentials
    Given I launch RudderStack login page
    When I enter my <email> and <password> and submit
    Then I should see wrong email or password message

    Examples: 
      | email          | password          |
      | <inValidEmail> | <inValidPassword> |
