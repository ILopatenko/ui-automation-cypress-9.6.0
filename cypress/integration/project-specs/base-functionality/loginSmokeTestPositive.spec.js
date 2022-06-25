import LoginPageDefaultPOM from '../../../support/page-objects/before-login-poms/loginPageDefaultPOM';
import LocalHelper from '../../../support/page-objects/localHelper';
const loginPageDefault = new LoginPageDefaultPOM();
const localHelper = new LocalHelper();

describe('Login Page. Smoke Test Positive - main test suite', () => {
  describe('PRECONDITIONS: load Registration Page', () => {
    it('Load Login Page', () => {
      cy.visit('/user/login');
    });
  });
  describe('SMOKE TEST HAPPY PATH', () => {
    it('Enter valid email', () => {
      loginPageDefault
        .emailInput()
        .type(
          localHelper.testData.credentials.loginValid.karen.email
        );
    });
    it('Enter valid password', () => {
      loginPageDefault
        .passwordInput()
        .type(
          localHelper.testData.credentials.loginValid.karen.password
        );
    });
    it('Click submit button', () => {
      loginPageDefault.submitButton().click().wait(1000);
    });

    it('Checking that user was redirected to the Home Page for logged in users', () => {
      cy.get('div#root>main>div')
        .children('div')
        .eq(0)
        .children('h3')
        .should('have.text', 'Business owner tasks')
        .location('pathname')
        .should('eq', '/');
    });
  });
});
