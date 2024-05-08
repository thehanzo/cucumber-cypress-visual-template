Feature: Machine page validations

Background: Navigate to Machine page
  Given user navigates to a Machine page

  Scenario: San-10 - Validate Machine Page Patient information card
    Then patient information components are displayed
    # And take a full page screenshot as "Patient information card"

  Scenario: San-11 - Validate Machine Page toolbar elements
    Then 'rigid' toolbar components are displayed
    # And take a full page screenshot as "Rigid Registration Tab"

  Scenario: San-12 - Contour tab redirection in Machine Page
    When user selects 'contour' tab
    Then 'contour' toolbar components are displayed
    # And take a full page screenshot as "Contour Tab"

  Scenario: San-13 - Contour tab validate layout and components
    When user selects 'contour' tab
    Then Contour tab components are displayed
    # And take a full page screenshot as "Contour Tab Layout and Components"

  Scenario: San-14 - Dose tab redirection in Machine Page
    When user selects 'dose' tab
    Then 'dose' toolbar components are displayed
    # And take a full page screenshot as "Daily Dose Tab"

  Scenario: San-15 - Dose tab validate layout and components
    When user selects 'dose' tab
    Then Dose tab components are displayed
    # And take a full page screenshot as "Daily Dose Tab Layout and Components"

  Scenario: San-16 - Notes modal validate layout and components
    When user enters the notes modal
    Then Notes Modal components are displayed
    # And take a full page screenshot as "Notes modal Layout and Components"

  Scenario: San-17 - Enrollment settings redirection in Machine Page
    When user selects 'settings' tab
    Then Enrollment settings components are displayed
    # And take a full page screenshot as "Enrollment Settings Layout and Components"

  Scenario: San-18 - Registration Panel validate layout and components
    Then Registration Panel components are displayed
    # And take a full page screenshot as "Registration Panel Layout and Components"
