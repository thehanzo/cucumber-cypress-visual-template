import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import enrollmentSettingsPage from '../e2e/pages/enrollmentSettings'

When("user saves enrollments settings", () => {
  enrollmentSettingsPage.saveSettings()
});

When("user expand the anatomy dropdown menu",()=>{
  enrollmentSettingsPage.getAnatomyDropdownMenu().click().should('be.visible')
})

When("user select the {string} in dropdown menu to load vois",(anatomy)=>{
  enrollmentSettingsPage.getAnatomyDropdownMenu().click().should('be.visible')
  enrollmentSettingsPage.getAnatomyDropdownExpanedMenu().contains(anatomy).click()
})

Then("Anatomy {string} is selected",(anatomy)=>{
  if (anatomy=='None')
  {
    enrollmentSettingsPage.getAnatomyTextDefault().contains(anatomy)
  }
  else
  {
    enrollmentSettingsPage.getAnatomyText().contains(anatomy)
    .should('be.visible')
  }
})

Then("Enrollment settings components are displayed", () => {
  enrollmentSettingsPage.validateEnrollmentSettingsComponents()
});

Then("The SOFTWARE shall present the user with a list of the available VOIs that can be used to assist the VOI propagation algorithms",()=>{
  enrollmentSettingsPage.validateListAvailableVOIsOfDeformTableExist()
});


