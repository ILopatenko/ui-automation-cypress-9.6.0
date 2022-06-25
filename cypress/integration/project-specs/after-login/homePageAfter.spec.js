import HomePageAfterPOM from '../../../support/page-objects/after-login/homePageAfterPOM';
import LocalHelper from '../../../support/page-objects/localHelper';
const homePageAfterPOM = new HomePageAfterPOM();
const localHelper = new LocalHelper();

describe('Home Page default (before log in) elements - main test suite', () => {
  describe('PRECONDITIONS: Login', () => {
    it('Login', () => {
      cy.login();
    });
  });
  describe('Home Page main elements', () => {
    it('Checking NAVBAR', () => {
      cy.checkNavBarAfterLogin('/');
    });
  });
});
