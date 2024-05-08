import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../e2e/pages/login'


Given("user logs in as {string}", (role) => {
  loginPage.enterCredentials(role)
  loginPage.submitLogin()
});

When("user enters {string} credentials", (role) => {
  loginPage.enterCredentials(role)
});

When("user submits credentials", () => {
  loginPage.submitLogin()
});

Then("login page components are displayed", () => {
  loginPage.validateComponents()
});

Then("login button is enabled", () => {
  loginPage.validateLoginIsEnabled()
});

Then("user is {string} logged into OnlineAdaptive", (loginStatus) => {
  loginPage.validateSuccessfulLogin(loginStatus)
});

When("navigates to {string} panel", (endpoint) => {
  loginPage.goToWebPage(endpoint)
});

Then("the software should show the {string} software webpage", (endpoint) => {
  loginPage.validateRedirectionPage(endpoint)
})

When("the user tries to login with {string}", (username) => {
  loginPage.validateUsernameIsNotEmpty(username)
});

And("the user input the {string}", (password) => {
  loginPage.validatePasswordIsNotEmpty(password)
});

Then("the login button should be {string}", (status) => {
  loginPage.validateLoginButtonStatus(status)
});

Then("the password field encrypt the password to avoid be readable", () => {
  loginPage.validatePasswordIsNotReadable()
});

Then("the credentials error {string} be displayed", (expectation) => {
  loginPage.validateUnsuccessfulLoginErrorIsPresent(expectation)
});