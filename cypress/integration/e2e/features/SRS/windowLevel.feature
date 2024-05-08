Feature: Window Levels

Background: Navigate to Machine page
  Given user navigates to a Machine page

  Scenario: PSS-SRS-4163 - The Image Viewer shall allow changing the currently displayed slice of an image set using the mouse wheel while in pointer mode.		
    When user changes the current slice by using the mouse wheel
    # And take a full page screenshot as "Patient information card"

  Scenario: PSS-SRS-1357 - The Image Viewer shall allow changing the slice display one slice at a time.			
    When user changes to next slice
    # And take a full page screenshot as "Canvas next slice using arrows"
