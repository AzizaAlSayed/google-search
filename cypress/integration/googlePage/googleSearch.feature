Feature: Search for Foothill Solutions
  
  Scenario: Verify that user can search for Foothill Solutions using the google browser by pressing the Enter key 
    Given A user was on the Google page
    When  The user fills in the Search field with "Foothill Solutions"
    When  The user presses the enter key
    Then  The Foothill Solutions website should be appear
    And   The Facebook page should be shown in the results
  
  Scenario: Verify that user can search for Foothill Solutions using google browser by clicks on the Search button 
    Given A user was on the Google page
    When  The user fills in the Search field with "Foothill Solutions"
    When  The user clicks on the the Google Search button
    Then  The Foothill Solutions website should be appear
    And   The Facebook page should be shown in the results