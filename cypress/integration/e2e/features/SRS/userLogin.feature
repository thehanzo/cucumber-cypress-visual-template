Feature: User Login

    Scenario Outline: PSS-SRS-1085 The SOFTWARE shall allow log on (access to the application through authentication).
        Given user logs in as <credentials>
        Then user is <loginStatus> logged into OnlineAdaptive
        Examples:
            | credentials | loginStatus      |
            | 'admin'     | 'successfully'   |
            | 'pol'       | 'successfully'   |
            | 'invalid'   | 'unsuccessfully' |

    Scenario Outline: PSS-SRS-1086 While the login panel is displayed, the SOFTWARE shall prevent SOFTWARE functionality except for log in.
            """PSS-SRS-1090 The Log on shall require successful authentication to access the application."""
        Given user logs in as <credentials>
        When navigates to <endpoint> panel
        Then the software should show the <page> software webpage
        Examples:
            | credentials | endpoint        | page            |
            | 'admin'     | 'visualization' | 'visualization' |
            | 'admin'     | 'patient'       | 'patient'       |
            | 'pol'       | 'patient'       | 'patient'       |
            | 'pol'       | 'visualization' | 'patient'       |
            | 'invalid'   | 'patient'       | 'login'         |
            | 'invalid'   | 'visualization' | 'login'         |
            | ''          | 'patient'       | 'login'         |
            | ''          | 'visualization' | 'login'         |

    Scenario Outline: <ticket> The Log on shall require entry of a <required>.
        When the user tries to login with <username>
        And the user input the <password>
        Then the login button should be <status>
        Examples:
            | ticket                          | required                | username | password     | status     |
            | 'PSS-SRS-1087'                  | 'username'              | ''       | 'example123' | 'disabled' |
            | 'PSS-SRS-1088'                  | 'password'              | 'user'   | ''           | 'disabled' |
            | 'PSS-SRS-1087 and PSS-SRS-1088' | 'username and password' | 'user'   | 'example123' | 'enabled'  |

    Scenario: PSS-SRS-1089 The Log on shall prevent the password from being readable.
        When the user input the 'example123'
        Then the password field encrypt the password to avoid be readable

    Scenario Outline: PSS-SRS-1090 If Log on authentication is unsuccessful, the SOFTWARE shall ERROR.
        When user logs in as <credentials>
        Then the credentials error <expectation> be displayed
        Examples:
            | credentials | expectation |
            | 'admin'     | 'shouldnt'  |
            | 'pol'       | 'shouldnt'  |
            | 'invalid'   | 'should'    |
            | ''          | 'shouldnt'  |

