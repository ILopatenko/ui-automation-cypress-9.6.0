import RegistrationPageDefaultPOM from '../../../../support/page-objects/before-login-poms/registrationPageDefaultPOM';
import LocalHelper from '../../../../support/page-objects/localHelper';
const registrationPageDefaultPOM = new RegistrationPageDefaultPOM();
const localHelper = new LocalHelper();

describe('Registration Page. Smoke Test Positive - main test suite', () => {
  const validCredentials = {};
  describe('PRECONDITIONS: load Registration Page', () => {
    it('Load Registration Page', () => {
      cy.visit('/user/register');
    });
  });
  describe('SMOKE TEST HAPPY PATH', () => {
    const newUserDataSet =
      localHelper.generateUserDataForRegistration();
    it('Enter valid email', () => {
      registrationPageDefaultPOM
        .emailInput()
        .type(newUserDataSet.email);
    });
    it('Enter valid password', () => {
      registrationPageDefaultPOM
        .passwordInput()
        .type(newUserDataSet.password);
    });
    it('Click submit button', () => {
      registrationPageDefaultPOM.submitButton().click().wait(1000);
    });
    it('Enter Full Name', () => {
      registrationPageDefaultPOM
        .fullNameInputField()
        .type(newUserDataSet.firstName)
        .type(' ')
        .type(newUserDataSet.lastName);
    });
    it('Enter Phone Number', () => {
      registrationPageDefaultPOM
        .phoneNumberInputField()
        .type(newUserDataSet.phoneNumberUS);
    });
    it('Click submit button', () => {
      registrationPageDefaultPOM.submitButton().click().wait(1000);
    });
    it('Enter a Company Name', () => {
      registrationPageDefaultPOM
        .companyNameInputField()
        .type(newUserDataSet.companyName);
    });
    it('Enter a Primary Industry', () => {
      registrationPageDefaultPOM
        .primaryIndustryInputField()
        .type(newUserDataSet.industry);
    });
    it('Click on Drop Down menu and select a random option', () => {
      registrationPageDefaultPOM.companySizeDropDownButton().click();

      registrationPageDefaultPOM.companySizeList().click().wait(1000);
    });
    it('Click submit button', () => {
      registrationPageDefaultPOM.submitButton().click().wait(2000);
    });
    it('Click LOGO', () => {
      registrationPageDefaultPOM.logoSpan().click();
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
