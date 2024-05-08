Feature: Intersession communication

  Scenario: PSS-URS-1046 - A CLINICAL_USER shall be able to add USER_NOTEs before and during the COURSE_OF_TREATMENT.
    Given user logs in as 'SERVICE_USER_1'
    And user selects patient "67890" from the patient list
    And user saves enrollments settings

    When user enters the notes modal
    And user creates a new note: "Test note"
    Then note is displayed: "Test note"
    # And take a full page screenshot as "Note created by service user 1"

  Scenario: PSS-URS-1047 - A CLINICAL_USER shall be able to review USER_NOTEs.
  # TODO: implement SERVICE_USER_2
    Given user logs in as 'SERVICE_USER_2'
    And user clicks on any "Machine" page tile

    When user enters the notes modal
    Then 'SERVICE_USER_1' note is displayed
    # And take a full page screenshot as "Note exists for service user 2"