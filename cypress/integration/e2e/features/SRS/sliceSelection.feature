Feature: Slice Selection validations

    Background: Navigate to Machine page
        Given user navigates to a Machine page

    Scenario Outline: <ticket> - The Image Viewer shall allow changing the currently displayed slice of an image set using the mouse wheel while in pointer mode.
        Then the user moves <orientation> the mouse wheel on the <image> image & the slice should be <result>
        Examples:
            | ticket       | orientation | image        | result   |
            | PSS-SRS-4163 | 'up'        | 'coronal'    | 'higher' |
            | PSS-SRS-4163 | 'up'        | 'sagittal'   | 'higher' |
            | PSS-SRS-4163 | 'up'        | 'transverse' | 'higher' |
            | PSS-SRS-4163 | 'down'      | 'coronal'    | 'lower'  |
            | PSS-SRS-4163 | 'down'      | 'sagittal'   | 'lower'  |
            | PSS-SRS-4163 | 'down'      | 'transverse' | 'lower'  |

    Scenario Outline: <ticket> - The Image Viewer shall allow changing the currently displayed slice of an image set.
        When the user clicks on the <slice> arrow on the <image> image the image should change
        Examples:
            | ticket       | slice      | image        |
            | PSS-SRS-1354 | 'next'     | 'coronal'    |
            | PSS-SRS-1354 | 'next'     | 'transverse' |
            | PSS-SRS-1354 | 'next'     | 'sagittal'   |
            | PSS-SRS-1354 | 'previous' | 'coronal'    |
            | PSS-SRS-1354 | 'previous' | 'transverse' |
            | PSS-SRS-1354 | 'previous' | 'sagittal'   |

    Scenario Outline: <ticket> The Image Viewer shall allow displaying a <measures> slice number one slice at a time
        Then the user clicks on the <slice> arrow & the number of the slice should <measures> on the <image> image
        Examples:
            | ticket                        | measures | slice      | image        |
            | PSS-SRS-1355 and PSS-SRS-1357 | 'higher' | 'next'     | 'coronal'    |
            | PSS-SRS-1355 and PSS-SRS-1357 | 'higher' | 'next'     | 'transverse' |
            | PSS-SRS-1355 and PSS-SRS-1357 | 'higher' | 'next'     | 'sagittal'   |
            | PSS-SRS-1356 and PSS-SRS-1357 | 'lower'  | 'previous' | 'coronal'    |
            | PSS-SRS-1356 and PSS-SRS-1357 | 'lower'  | 'previous' | 'transverse' |
            | PSS-SRS-1356 and PSS-SRS-1357 | 'lower'  | 'previous' | 'sagittal'   |