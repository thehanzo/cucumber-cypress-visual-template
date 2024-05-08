import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import oaMachinePage from '../e2e/pages/oaMachine';
import patientListPage from '../e2e/pages/patientList'
import landingPage from '../e2e/pages/landing'
import canvas from '../e2e/helpers/canvas';
import { afterEach, beforeEach } from 'mocha';
import eyes from '../e2e/helpers/eyes';

// Hooks
beforeEach(() => {
  cy.openHomePage()
  if(Cypress.env('VISUAL_ENV') == 'cloud'){
    cy.eyesOpen({
      batchName: Cypress.currentTest.titlePath[0],
      appName: 'Accuray Online Adaptive',
      testName: Cypress.currentTest.title
    });
  }
});

afterEach(() => {
//   cy.eyesClose();
});

//Actions
When('user presses key {string}', (key) => {
  cy.get('body').trigger('keydown', { keyCode: key});
})

When('user waits for {float} minute(s)', (minutes) => {
  cy.wait(minutes * 1000) // convert to milliseconds
})

When('user refreshes page', () => {
  cy.reload()
})

When('user scrolls out CT scan', () => {
  oaMachinePage.switchToolbarMode('zoom')
  canvas.triggerMouseDrag(250, 50, 250, 300)
})

//Verifications
Then('{string} is displayed', (text) => {
  cy.contains(text).should('be.visible')
})

Then('{string} is not displayed', (text) => {
  cy.contains(text).should('not.exist')
})

Then("user is redirected to patient list", () => {
  patientListPage.validatePatientListSector()
});

Then("user is redirected to the Machine page", () => {
  oaMachinePage.validateCanvasLoads()
});

Then("landing page components are displayed", () => {
  landingPage.validateComponents()
});

//Patient info
Then("the SOFTWARE shall display the patient's picture", () => {
  oaMachinePage.getPatientPhoto().should('be.visible')
  .find('img')
  .should(($img)=>{
      const tempvalue = $img[0].src
      expect(tempvalue).to.contains('.png')
   }) 
});

// Visual validations
Then("take a full page screenshot", () => {
  eyes.fullSnapshot();
});

Then("take a full page screenshot as {string}", (name) => {
  eyes.namedSnapshot(name);
});

Then("take a visualizer screenshot", () => {
  eyes.canvasSnapshot()
});

Then("validate {string} page layout", (page) => {
  switch (page){
    case'machine':  
      oaMachinePage.validateUiLayout()
      break
  }
});

Then("take a local full page snapshot as {string}", (name) => {
  eyes.localFullSnapshot(name);
});
