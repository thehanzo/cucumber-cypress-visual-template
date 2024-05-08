import BasePage from './base';
import loginPage from './login';
import locators from '../locators/landing';
import eyes from '../helpers/eyes';

class Landing extends BasePage {
  // *** Getters *** //
  getHeader() { return cy.get(locators.header, {timeout: 20_000}) }
  getLanguageDropdown() { return cy.get(locators.languageDropdown) }
  getLogoutButton() { return cy.get(locators.logoutButton) }
  getMachinesSection() { return cy.get(locators.machinesSection) }
  getOptionsSection() { return cy.get(locators.optionsSection) }
  getOfflineReviewTile() { return cy.get(locators.offlineReviewTile) }
  getDemoTile() { return cy.get(locators.demoTile) }
  getAdminTile() { return cy.get(locators.adminTile) }
  getMachine1() { return cy.get(locators.onlineMachine1) }

  // *** Actions *** //
  setup() {
    loginPage.submitCredentials(Cypress.env('ADMIN_USER'), Cypress.env('ADMIN_PASS'))
  }

  enterOnlineMachine1() {
    this.getMachine1().click({force: true})
  }

  enterOfflineReview() {
    this.getOfflineReviewTile().click({force: true})
  }

  enterDemoTraining() {
    this.getDemoTile().click({force: true})
  }

  // *** Validations *** //
  validateComponents() {
    this.getHeader().contains('Online Adaptive').should('be.ok')
    this.getMachinesSection().contains('Machines').should('be.ok')
    this.getOptionsSection().contains('Dashboard').should('be.ok')
    this.getOptionsSection().contains('Offline review').should('be.ok')
    this.getOptionsSection().contains('Demo / Training').should('be.ok')
    this.getOptionsSection().contains('Admin').should('be.ok')
    this.getOfflineReviewTile().should('be.visible')
    this.getDemoTile().should('be.visible')
    this.getAdminTile().should('be.visible')
    this.getLanguageDropdown().should('be.visible')
    this.getLogoutButton().should('be.visible')
    //Visual regression
    eyes.elementSnapshot(this.getHeader(), "Header")
    eyes.elementSnapshot(this.getMachinesSection(), "MachinesSection")
    eyes.elementSnapshot(this.getOptionsSection(), "OptionsSection")
  }
}

export default new Landing();
