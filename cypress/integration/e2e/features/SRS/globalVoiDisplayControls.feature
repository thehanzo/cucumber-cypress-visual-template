Feature: Global VOI Display Controls

  Background: Navigate to Machine page
    Given user navigates to a Machine page



  Scenario: PSS-SRS-1298 - Each row in VOI displays shall include a text field for the VOI/shell name.
    When the VOI left panel is loaded
    Then all the items on the panel has text on it

  Scenario: PSS-SRS-4218 - Each row in VOI displays shall include a rectangle that displays the color for that VOI.
    When the VOI left panel is loaded
    Then all the items on the panel has a color to identified on it

  Scenario: PSS-SRS-4175 The SOFTWARE shall present the user with a list of the available VOIs that can be used to assist the VOI propagation algorithms.
    When the VOI left panel is loaded
    Then the list of VOI is showed to the user
