Feature: Landing page validations

Background: Navigate to Landing page
  Given user navigates to the Landing page

  Scenario: San-6 - Validate Landing page expected components
    Then landing page components are displayed
    # And take a full page screenshot as "Landing Page"

  Scenario: San-7 - Machine tile redirection in Landing page
    When user clicks on any "Machine" page tile
    Then user is redirected to the Machine page
    # And take a full page screenshot as "Machine Page"

  Scenario: San-8 - Offline Review tile redirection in Landing page
    When user clicks on any "Offline Review" page tile
    Then user is redirected to patient list
    # And take a full page screenshot as "Patient List"

  Scenario: San-9 - Demo/training tile redirection in Landing page
    When user clicks on any "Demo/training" page tile
    Then user is redirected to patient list
    # And take a full page screenshot as "Patient List"
