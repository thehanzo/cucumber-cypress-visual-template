import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import landingPage from '../e2e/pages/landing'
import oaMachinePage from '../e2e/pages/oaMachine'

Given("user navigates to the Landing page", () => {
  landingPage.setup()
});

When("user clicks on any {string} page tile", (role) => {
  switch(role) { 
    case 'Machine': { 
      landingPage.enterOnlineMachine1()
      oaMachinePage.validateCanvasLoads()
      break; 
    } 
    case 'Offline Review': { 
      landingPage.enterOfflineReview()
      break; 
    } 
    case 'Demo/training': { 
      landingPage.enterDemoTraining()
      break; 
    } 
    default: {
      throw 'Please provide a tile name: "Machine", "Offline Review", "Demo/training"}'
    }
 } 
});
