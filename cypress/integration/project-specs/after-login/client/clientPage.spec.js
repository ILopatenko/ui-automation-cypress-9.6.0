import LocalHelper from '../../../../support/page-objects/localHelper';
const localHelper = new LocalHelper();

describe('Client Page - main elements', () => {
  describe('PRECONDITIONS: login and load Client Page', () => {
    it('LOGIN', () => {
      cy.login().wait(1000);
    });
    it('Loading Client Page and checking TopNavBarMenu', () => {
      cy.checkNavBarAfterLogin('/client');
    });
  });
  describe('NAVBAR', () => {});
});
