Feature: Verify Source, Destination and Connection on RudderStack Dashboard

  Background: 
    Given I launch RudderStack login page
    When I enter my <validEmail> and <validPassword> and submit
    When I select later on add mfa page
    When I click "Go to Dashboard" on addmfa later page
    Then I should land on Dashboard

  @Dashboard
  Scenario Outline: I should be able to see leftpane menu with required links
    Given Left pane menu is displayed
    Then All required links should be displayed

  @Dashboard
  Scenario Outline: I am able to create a connection if it does not exists
    Given Connection does not exist
    When I navigate to Sources page
    When I click on source <sourceName>
    When I click on "Add Destination" button and select "use existing destination"
    When I select radio button against <destinationName> and click Continue
    When I Click Continue again on configuration page
    Then I verify that connection line exists on Connections page
    Then I verify that <destinationName> is displayed under source page

    Examples: 
      | sourceName | destinationName   |
      | HTTP Dev   | SampleWebhookDest |
