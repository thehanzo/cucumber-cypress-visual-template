import BasePage from './base';
import loginPage from './login';
import locators from '../locators/patientList';
import eyes from '../helpers/eyes';

class PatientList extends BasePage {
  // *** Getters *** //

  //Online Adaptative Title
  getOaContoursTitle() {return cy.get(locators.oaContoursTitle, {timeout: 20_000})}

  //Patient List Card
  getPatientSector() { return cy.get(locators.patientSection) }
  getPatientList() { return cy.get(locators.patientList) }
  getPatientListCard() {return cy.get(locators.patientListCard)}
  getPatientSearchField() {return this.getPatientListCard().find(locators.searchPatientField)}
  getPatientListContent() {return cy.get(locators.patientList).eq(0)}

  //Patient Plan Card
  getPatientInfoSection() {return cy.get(locators.patientInfoSection)}
  getPatientPlanContent() {return cy.get(locators.patientList).eq(1)}

  //Patient Fractions Card
  getFractionsInfoSection() {return cy.get(locators.fractionsInfoSection)}
  getFractionContent() {return cy.get(locators.patientList).eq(2)}

  //Patient List Action Footer
  getFooter() {return cy.get(locators.PatientListFooter)}
  getOkButton() {return cy.get(locators.OKButtonPatientList)}
  getResetButton() {return cy.get(locators.ResetButtonPatientList)}

  // *** Actions *** //
  setup() {
    loginPage.submitCredentials(Cypress.env('POL_USER'), Cypress.env('POL_PASS'))
  }

  validateListOfPatientsComponent() {
    this.getPatientListCard().should('contain', 'Patient List')
    this.getPatientSearchField().should('be.ok')
    this.getPatientListCard().should('contain', 'Last Name')
    this.getPatientListCard().should('contain', 'First Name')
    this.getPatientListCard().should('contain', 'Date of Birth')
    this.getPatientListCard().should('contain', 'Medical ID')
    this.getPatientListContent().should('be.ok')
    //Visual regression
    eyes.elementSnapshot(this.getPatientListCard(), "PatientListCard")
  }

  validatePatientPlans() {
    this.getPatientInfoSection().should('contain', 'Plan Name')
    this.getPatientInfoSection().should('contain', 'Progress')
    this.getPatientInfoSection().should('contain', 'Approved')
    this.getPatientInfoSection().should('contain', 'Notes')
    this.getPatientPlanContent().should('be.ok')
    //Visual regression
    eyes.elementSnapshot(this.getPatientInfoSection(), "PatientInfoSection")
  }

  validatePatientFractions() {
    this.getFractionsInfoSection().should('contain', 'Fx')
    this.getFractionsInfoSection().should('contain', 'Delivered')
    this.getFractionsInfoSection().should('contain', 'Reviewed')
    this.getFractionsInfoSection().should('contain', 'Status')
    this.getFractionContent().should('be.ok')
    //Visual regression
    eyes.elementSnapshot(this.getFractionsInfoSection(), "FractionsInfoSection")
  }

  validatePatientButtons() {
    this.getOkButton().should('include.text', '\n\n OK ')
    this.getResetButton().should('include.text', 'Reset')
    //Visual regression
    eyes.elementSnapshot(this.getFooter(), "PatientListFooter")
  }
 
  selectPatient(patient) {
    this.getPatientList().contains(patient).click()
    this.getOkButton().click()
    this.getOaContoursTitle().should('be.visible').and('contain', 'Contours')
  }
  
  validatePatientListSector() {
    this.getPatientSector().contains('Patient List').should('be.ok')
    //Visual regression
    eyes.elementSnapshot(this.getPatientSector(), "PatientSector")
  }  
}

export default new PatientList();
