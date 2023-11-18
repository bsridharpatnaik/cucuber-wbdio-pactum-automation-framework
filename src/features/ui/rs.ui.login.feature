Feature: Verify login functionality for RudderStack App

  @UI @Login
  Scenario Outline: Login Button should be disabled on page load
    Given I launch RudderStack login page
    Then Login button should be disabled

  @UI @Login
  Scenario Outline: Login Button should be disabled on page load
    Given I launch RudderStack login page
    Then Login button should be disabled

  @UI @Login
  Scenario Outline: Login Button should be disabled if random text is entered in email
    Given I launch RudderStack login page
    When I enter any <randomText> as email
    Then Login button should be disabled

    Examples: 
      | randomText |
      | abcdef     |

  @UI @Login
  Scenario Outline: User should be able to login with valid credentials
    Given I launch RudderStack login page
    When I enter my <email> and <password> and submit
    When I select later on add mfa page
    When I click "Go to Dashboard" on addmfa later page
    Then I should land on Dashboard

    Examples: 
      | email        | password        |
      | <validEmail> | <validPassword> |

  @UI @Login
  Scenario Outline: User should NOT be able to login with invalid credentials
    Given I launch RudderStack login page
    When I enter my <email> and <password> and submit
    Then I should see wrong email or password message

    Examples: 
      | email          | password          |
      | <inValidEmail> | <inValidPassword> |
