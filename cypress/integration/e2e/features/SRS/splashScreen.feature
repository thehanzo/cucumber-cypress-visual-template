Feature: Splash Screen

    Scenario Outline: PSS-SRS-1030 The SOFTWARE shall display a splash screen after a successful log on.	
        When user enters <credentials> credentials
        And user submits credentials
        Then user is <loginStatus> logged into OnlineAdaptive
        Examples:
            | credentials | loginStatus      |
            | 'admin'     | 'successfully'   |
            | 'pol'       | 'successfully'   |
            | 'invalid'   | 'unsuccessfully' |