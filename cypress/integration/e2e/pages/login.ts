import BasePage from './base';
import locators from '../locators/login';
import landing from './landing';
import oaMachine from './oaMachine';
import patientLists from './patientList';
import eyes from '../helpers/eyes';

class Login extends BasePage {
  // *** Getters *** //
  getLoginParent() {return cy.get(locators.loginParent)}
  getRadixactLogo() {return cy.get(locators.radixactLogo)}
  getUserInput() {return cy.get(locators.usernameInput)}
  getPasswordInput() {return cy.get(locators.passwordInput)}
  getLoginButton() {return cy.get(locators.loginButton)}
  getLoginErrorBox() {return cy.get(locators.loginErrorMessageBox)}

  // *** Actions *** //

  /**
   * this function receive a role parameter and search to the credentials to write it on the login page
   * @param role 
   */
  enterCredentials(role) {
    switch(role) { 
      case 'admin': { 
        this.enterUsername(Cypress.env('ADMIN_USER'));
        this.enterPassword(Cypress.env('ADMIN_PASS'));
        break; 
      } 
      case 'pol': { 
        this.enterUsername(Cypress.env('POL_USER'));
        this.enterPassword(Cypress.env('POL_PASS'));
        break; 
      } 
      case 'invalid': { 
        this.enterUsername('testUser');
        this.enterPassword('testpass123');
        break; 
      } 
      case 'SERVICE_USER_1': { 
        this.enterUsername(Cypress.env('POL_USER'));
        this.enterPassword(Cypress.env('POL_PASS'));
        break; 
      }
      case '': {
        break;
      }
      default: {
        throw 'Please provide a role: "admin", "pol", "invalid"}'
      }
   } 
  }

  /**
   * receives an user parameter and write it on the username field
   * @param user 
   */
  enterUsername(user) {
    this.getUserInput().type(user)
  }

  /**
   * receives a password parameter and enters it in the password field
   * @param pass 
   */
  enterPassword(pass) {
    this.getPasswordInput().type(pass)
  }
  
  /**
   * this function clicks on login button in the shall login page
   */
  submitLogin() {
    this.getLoginButton().click({force:true}).wait(5000)
  }

  /**
   * this function validates the components for shall login page
   */
  validateComponents() {
    this.getRadixactLogo().should('be.visible')
    this.getUserInput().should('be.visible')
    this.getPasswordInput().should('be.visible')
    this.getLoginButton().should('be.disabled')
    //Visual regression
    eyes.elementSnapshot(this.getLoginParent(), "LoginParent")
  }
  
  /**
   * this function validates the login button is enabled
  */
 validateLoginIsEnabled(){
   this.getLoginButton().should('be.enabled')
   //Visual regression
   eyes.elementSnapshot(this.getLoginParent(), "LoginParent")
  }
  
  /**
   * this function validates the login button is disabled
  */
 validateLoginButtonIsDisabled(){
   this.getLoginButton().should('be.disabled')
   //Visual regression
   eyes.elementSnapshot(this.getLoginParent(), "LoginParent")
  }

  /**
   * this function receives receives and enters two parameters then it clicks on login button
   * @param user
   * @param pass 
   */
  submitCredentials(user, pass) {
    this.enterUsername(user)
    this.enterPassword(pass)
    this.submitLogin()
  }

  /**
   * This function receives a login status expectation and validate once the user tries to login on the OA page
   * @param loginStatus
   */
  validateSuccessfulLogin(loginStatus) {
    if(loginStatus=='successfully'){
      landing.getHeader().contains('Online Adaptive').should('be.ok')
      //Visual regression
      eyes.elementSnapshot(landing.getHeader(), "landing-page-header")
    }else if(loginStatus=='unsuccessfully'){
      this.getLoginErrorBox().contains('Wrong user name or password').should('be.ok')
      //Visual regression
      eyes.elementSnapshot(this.getLoginErrorBox(), "login-page-credentials-error")
    }    
  }

  /**
   * this function receives an endpoint and verify if the endpoint goes to the correct web page
   * @param endpoint 
   */
  validateRedirectionPage(endpoint){
    switch(endpoint){
      case 'login': {
        this.getRadixactLogo().should('be.visible')
        //Visual regression
        eyes.elementSnapshot(this.getRadixactLogo(), "RadixactLogo")
        break;
      }
      case 'visualization':{
       landing.validateComponents()
        break;
      }
      case 'patient':{
        patientLists.validateListOfPatientsComponent()
        break;
      }     
    }
  }

  /**
   * this function goes to differents webpages specifying the endpoint
   * @param endpoint 
   */
  goToWebPage(endpoint){
    cy.openHomePage(endpoint)
  }

  /**
   * this function receives the parameter of the status of the login button an validate if should be disabled or enabled
   * @param status 
   */
  validateLoginButtonStatus(status){
    if(status=='enabled'){
      this.validateLoginIsEnabled()
    }else if(status=='disabled'){
      this.validateLoginButtonIsDisabled()
    }
  }
  
  /**
   * this function validate if the username field is empty and it adds an backspace to avoid type error
   * @param username 
   */
  validateUsernameIsNotEmpty(username){
    if(username==''){
      this.enterUsername('{backspace}')
    }else{
      this.enterUsername(username)
    }
  }

    /**
   * this function validate if the password field is empty and it adds an backspace to avoid type error
   * @param password 
   */
    validatePasswordIsNotEmpty(password){
      if(password==''){
        this.enterPassword('{backspace}')
      }else{
        this.enterPassword(password)
      }
    }

    /**
     *this function validate the password field encrypt the text to don't be readable
     */
    validatePasswordIsNotReadable(){
      this.getPasswordInput().invoke('attr', 'type').should('eq', 'password')
      //Visual regression
      eyes.elementSnapshot(this.getLoginParent(), "LoginParent")
    }
    
    /**
     * this function receives a string which contain the expected result about error message once the login is unsuccessful
     * and verify if the error should or shouldn't be present on the page
     * @param expectation 
     */
    validateUnsuccessfulLoginErrorIsPresent(expectation){
      if(expectation=='should'){
        this.getLoginErrorBox().should('be.visible')
        //Visual regression
        eyes.elementSnapshot(this.getLoginErrorBox(), "LoginErrorBox")
      }else if(expectation=='shouldnt'){
        this.getLoginErrorBox().should('not.exist')
      }
    }
 
}

export default new Login();
