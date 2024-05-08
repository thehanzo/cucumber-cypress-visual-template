import Base from './base';

class Login extends Base {
  // Site information
  get loginParent() { return '.login-component'; }
  get radixactLogo() { return '[data-cy="radixact-logo"]'; }
  get usernameInput() { return '[data-cy = "username-input"]'; }
  get passwordInput() { return '[data-cy = "password-input"]'; }
  get loginButton() { return '[data-cy = "login-button"]'; }
  get loginErrorMessageBox() { return '[data-cy = "login-error-message"]'; }
}

export default new Login();
