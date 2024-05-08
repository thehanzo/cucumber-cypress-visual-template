import directory from '../locators/base';

export default class BasePage {
  // *** Getters *** //
  getUrl() { return cy.url(); }
  getAllElements() { return cy.get('*') }
  
}
