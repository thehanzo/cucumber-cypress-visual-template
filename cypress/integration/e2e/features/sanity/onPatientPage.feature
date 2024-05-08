Feature: Patient List Validation

Background: Navigate to Patient page
  Given user logs in as 'SERVICE_USER_1'

  Scenario: San-19 - Validate Patient list expected component
    Then patient list components are displayed correctly