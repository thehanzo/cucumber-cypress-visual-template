Feature: Patient management enrollment

Background: Navigate to Machine page
  Given user navigates to a Machine page

Scenario: PSS-SRS-4173 The SOFTWARE shall allow the user to configure the propagation state of each REFERENCE_VOI to be either rigid, deformable, or do not propagate.
  Then user selects "settings" tab
  #And take a full page screenshot as "POL VOI List"

Scenario: PSS-SRS-4174 The SOFTWARE shall allow the user to select the anatomical region to use for the VOI propagation algorithms.
  Then user selects "settings" tab
  Then The SOFTWARE shall present the user with a list of the available VOIs that can be used to assist the VOI propagation algorithms
  When user select the "Brain" in dropdown menu to load vois
  Then Anatomy "Brain" is selected 

Scenario: PSS-SRS-4175 The SOFTWARE shall present the user with a list of the available VOIs that can be used to assist the VOI propagation algorithms. 
  Then user selects "settings" tab
  Then The SOFTWARE shall present the user with a list of the available VOIs that can be used to assist the VOI propagation algorithms