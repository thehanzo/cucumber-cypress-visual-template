Feature: General Display

  Background: Navigate to Machine page
    Given user navigates to a Machine page

  Scenario: PSS-SRS-1042 - The software shows the current time
    Then The software shows the current time
  # And take a full page screenshot of OA machine home page

  Scenario: PSS-SRS-1043 - The software shall display labels for units of time that use more than one character
    Then The software shall display labels for units of time that use more than one character

  Scenario Outline: <ticket> The Image Viewer shall allow display of a <image> slice from an image volume.
    Then a <image> slice image should be displayed from an image volume
    Examples:
      | ticket         | image        |
      | 'PSS-SRS-1205' | 'coronal'    |
      | 'PSS-SRS-1203' | 'transverse' |
      | 'PSS-SRS-1208' | 'sagittal'   |

  Scenario Outline: <ticket> The SOFTWARE shall provide the short cut key <keyword> to change to the zoom mode
    When user performs the <mode> mode shortcut
    Then <mode> image options is selected in the toolbar
    Examples:
      | ticket          | mode   |keyword|
      | 'PSS-SRS-1220 ' | 'zoom' |'z'|
      | 'PSS-SRS-1221'  | 'pan'  |'p'|

  Scenario Outline: PSS-SRS-1223 The SOFTWARE shall provide the short cut key "esc" to change to the selection mode.
    When user performs the <mode> mode shortcut
    Then Pointer options is not selected in the toolbar
    When user performs the <modeExpected> mode shortcut
    Then Pointer options is selected in the toolbar
    Examples:
      | mode   | modeExpected |
      | 'zoom' | 'esc'        |
      | 'pan'  | 'esc'        |

  Scenario: PSS-SRS-1329 While backspace is pressed and the mouse is moved into the canvas the pan mode should be activated
    When the user leaves pressed the backspace key then the Pan mode is activated
  
  # And take a full page screenshot of OA machine home page
  Scenario: PSS-SRS-1044 - The SOFTWARE shall display the Current Date in form DD-MMM-YYYY
    Then The software shows the current time in format DD-MMM-YYYY
  # And take a full page screenshot of OA machine home page
  Scenario: PSS-SRS-1211 - The Image Viewer shall display a label indicating the patient orientation.
  # And take a full page screenshot as "Patient Orientation"

  Scenario: PSS-SRS-1212 - The Image Viewer shall display a label indicating the patient's Anterior.
  # And take a full page screenshot as "Patient Anterior"

  Scenario: PSS-SRS-1213 - The Image Viewer shall display a label indicating the patient's Posterior.
  # And take a full page screenshot as "Patient Posterior"

  Scenario: PSS-SRS-1214 - The Image Viewer shall display a label indicating the patient's Right.
  # And take a full page screenshot as "Patient Right"

  Scenario: PSS-SRS-1215 - The Image Viewer shall display a label indicating the patient's Left.
  # And take a full page screenshot as "Patient Left"

  Scenario: PSS-SRS-1216 - The Image Viewer shall display a label indicating the patient's Superior.
  # And take a full page screenshot as "Patient Superior"

  Scenario: PSS-SRS-1217 - The Image Viewer shall display a label indicating the patient's Inferior.
  # And take a full page screenshot as "Patient Inferior"

  Scenario: PSS-SRS-1055- The version number of the software is displayed.
  Then The version number of the software is displayed
  # And take a full page screenshot of OA machine home page
