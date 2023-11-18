Feature: Verify Source, Destination and Connection on RudderStack Dashboard

  Background: 
    Given I launch RudderStack login page
    When I enter my <validEmail> and <validPassword> and submit
    And I select later on add mfa page
    And I click "Go to Dashboard" on addmfa later page
    Then I should land on Dashboard

  @Dashboard
  Scenario Outline: I am able to create a connection if it does not exists
    Given Connection does not exist
    When I navigate to Sources page
    And I click on source <sourceName>
    And I click on "Add Destination" button and select "use existing destination"
    And I select radio button against <destinationName> and click Continue
    And I Click Continue again on configuration page
    Then I verify that connection line exists on Connections page
    Then I verify that <destinationName> is displayed under source <sourceName>

    Examples: 
      | sourceName | destinationName   |
      | HTTP Dev   | SampleWebhookDest |

  @Dashboard
  Scenario Outline: I am able to disconnect a connection
    Given Connection exists
    When I navigate to Sources page
    And I click on source <sourceName>
    And I click on three dots against <destinationName> and click disconnect
    Then I verify that connection line does exists on Connections page
    Then I verify that <destinationName> is not displayed under source <sourceName>

    Examples: 
      | sourceName | destinationName   |
      | HTTP Dev   | SampleWebhookDest |