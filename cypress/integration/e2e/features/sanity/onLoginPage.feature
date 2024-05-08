Feature: Login page validations

  Scenario: San-1 Validate redirection to login page and expected components
    Then login page components are displayed
    # And take a full page screenshot as "Login Page"

  Scenario: San-2 - User enters credentials and logs into OnlineAdaptive
    When user enters 'admin' credentials
    Then login button is enabled
    # And take a full page screenshot as "Login button enabled"