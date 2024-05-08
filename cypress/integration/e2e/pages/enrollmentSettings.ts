import BasePage from './base';
import oaMachinePage from './oaMachine';
import locators from '../locators/enrollmentSettings';
import eyes from '../helpers/eyes';

class EnrollmentSettings extends BasePage {
  // *** Getters *** //
  getContoursContainer() { return cy.get(locators.contoursContainer) }
  getLimbusContainer() { return cy.get(locators.limbusContainer) }
  getNoneGroupContainer() { return cy.get(locators.noneGroupContainer) }
  getDeformGroupContainer() { return cy.get(locators.deformGroupContainer) }
  getRigidGroupContainer() { return cy.get(locators.rigidGroupContainer) }
  getLimbusAnatomyDropdown() { return cy.get(locators.limbusAnatomyDropdown) }
  getSaveButton() { return cy.get(locators.saveButton)}
  getCancelButton() { return cy.get(locators.cancelButton) }
  getAnatomyDropdownMenu(){return cy.get(locators.dropdownAnatomyMenu)}
  getAnatomyDropdownExpanedMenu(){return cy.get(locators.expandedDropdownAnatomyMenu)}
  getAnatomyText(){return cy.get(locators.anatomyText)}
  getAnatomyTextDefault(){return cy.get(locators.anatomyTextDefault)}
  // *** Actions *** //
  saveSettings() {
    this.getSaveButton().click()
    oaMachinePage.validateCanvasLoads()
  }

  validateEnrollmentSettingsComponents() {
    this.getContoursContainer().should('be.visible')
    this.getContoursContainer().contains("Contours").should('be.ok')
    this.getContoursContainer().contains("Drag and drop the structures below to the appropriate list:").should('be.ok')
    this.getContoursContainer().contains("None").should('be.ok')
    this.getContoursContainer().contains("Deform").should('be.ok')
    this.getContoursContainer().contains("Rigid").should('be.ok')
    this.getLimbusContainer().should('be.visible')
    this.getLimbusContainer().contains("Limbus VOIs to assist DIR").should('be.ok')
    this.getLimbusContainer().contains("Select an anatomy from the dropdown below to load their VOIs").should('be.ok')
    this.getNoneGroupContainer().should('be.visible')
    this.getDeformGroupContainer().should('be.visible')
    this.getRigidGroupContainer().should('be.visible')
    this.getLimbusAnatomyDropdown().should('be.visible')
    this.getSaveButton().should('be.visible')
    this.getCancelButton().should('be.visible')
    //Visual regression
    eyes.elementSnapshot(this.getContoursContainer(), "ContoursContainer")
  }

  validateListAvailableVOIsOfDeformTableExist(){
    this.getDeformGroupContainer()
    .should('be.visible')
    .find(locators.tableDeformVOIlist)
    .should('have.length.at.least',1)
    //Visual regression
    eyes.elementSnapshot(this.getDeformGroupContainer(), "DeformGroupContainer")
  }
}

export default new EnrollmentSettings();
