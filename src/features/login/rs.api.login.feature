Feature: Verify login functionality for RudderStack API

  @API
  Scenario Outline: User should be able to login with valid credentials using API
    Given I make Login API call using <email> and <password> and receive 200 with access token

    Examples: 
      | email        | password        |
      | <validEmail> | <validPassword> |

  @API
  Scenario Outline: User should be able to call IdentifyURL using writeKey
    Given I make Login API call using <email> and <password> and receive 200 with access token
    Then I should be able to make call to IdentifyURL

    Examples: 
      | email        | password        |
      | <validEmail> | <validPassword> |

  @API
  Scenario Outline: User should be able to call IdentifyURL using writeKey
    Given I make Login API call using <email> and <password> and receive 200 with access token
    Then I should be able to get total events

    Examples: 
      | email        | password        |
      | <validEmail> | <validPassword> |
