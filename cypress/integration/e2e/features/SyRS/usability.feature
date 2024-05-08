Feature: Usability

Background: Navigate to Machine page
  Given user navigates to a Machine page

  Scenario: PSS-SyRS-1242 - Where there is a photograph of the patient, ONLINE_ADAPTIVE shall provide a means for a CLINICAL_USER to display the photograph.
    Then patient photo is displayed
    # And take a full page screenshot as "Patient photo"

