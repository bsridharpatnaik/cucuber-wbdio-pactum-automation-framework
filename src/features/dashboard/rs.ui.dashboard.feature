Feature: Verify login functionality for RudderStack App

  Background: 
    Given I launch RudderStack login page
    When I enter my <validEmail> and <validPassword> and submit
    When I select later on add mfa page
    When I click "Go to Dashboard" on addmfa later page
    Then I should land on Dashboard

  @UI
  Scenario Outline: I should be able to see leftpane menu with required links
    Given Left pane menu is displayed
    Then All required links should be displayed
    Then I click on Connections link