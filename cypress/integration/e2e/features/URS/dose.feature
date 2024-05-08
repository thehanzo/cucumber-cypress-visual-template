Feature: Dose

Background: Navigate to Machine page
  Given user navigates to a Machine page

  Scenario: PSS-URS-1067 - A CLINICAL_USER shall be able to view the PRESCRIPTIVE_OBJECTIVEs.	
    When user selects "dose" tab
    And user selects "metrics" tab
    And user selects "fxDose" option from Dose panel
    # TODO: implement validations
    # Then "Prescriptive_Objectives" are displayed
    # And take a full page screenshot as "Prescriptive objectives"

