Feature: Service admin

  Scenario: PSS-URS-1207 - A remote SERVICE_USER shall be able to access computers used by ONLINE_ADAPTIVE.	
    When user enters 'SERVICE_USER_1' credentials
    Then login button is enabled
    
    When user submits credentials
    Then user is 'successfully' logged into OnlineAdaptive
    # And take a full page screenshot as "Service User logged in"
