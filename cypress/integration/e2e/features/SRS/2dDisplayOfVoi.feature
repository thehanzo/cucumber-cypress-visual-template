Feature: 2D Display of Volumes of Interest

Background: Navigate to Machine page
  Given user navigates to a Machine page

  Scenario: PSS-SRS-1283 - The Image Viewer shall allow displaying VOIs as contours.
    When user disables all VOIs
    And user enables 'prostate' VOI
    # And take a full page screenshot as "Prostate contour present"

  Scenario: PSS-SRS-1285 - The Image Viewer shall allow changing the visibility of a REFERENCE_VOI.	
    When user disables 'prostate' VOI
    # And take a full page screenshot as "Prostate contour not present"
