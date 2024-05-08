Feature: Display Control

Background: Navigate to Machine page
  Given user navigates to a Machine page

  Scenario: PSS-SyRS-1386 - PSS shall provide a means for a CLINICAL_USER to enable or disable the display of graphical items associated with a VOI.
    When user selects "dose" tab
    And user opens the DVH options modal
    Then DVH options are displayed
    # And take a full page screenshot as "DVH settings modal"

