Feature: General Patient Display

Background: Navigate to Machine page
  Given user navigates to a Machine page

Scenario: PSS-SRS-1121 - For a loaded patient plan, the SOFTWARE shall display the patient's picture.
  Then the SOFTWARE shall display the patient's picture

Scenario: PSS-SRS-1122 - For a loaded patient plan, the SOFTWARE shall display the first 48 characters of the patient's concatenated name (or the entire name if shorter than 48).
  Then patient entire name shorter than 48

Scenario: PSS-SRS-1125 - For a loaded patient plan, the SOFTWARE shall display the patient's gender.
  Then the SOFTWARE shall display the patient's gender

Scenario: PSS-SRS-1129 - For a loaded patient plan, the SOFTWARE shall display the plan's Name.
  Then the SOFTWARE shall display the plan's name: "TD_Plan"