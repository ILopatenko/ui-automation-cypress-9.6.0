import TopNavBarBeforeLoginPOM from '../../../support/page-objects/common-modules/topNavBarBeforeLoginPOM';
import SupportPageDefaultPOM from '../../../support/page-objects/before-login-poms/supportPageDefaultPOM';

const topMenu = new TopNavBarBeforeLoginPOM();
const supportPageDefaultPOM = new SupportPageDefaultPOM();

describe('Support Page (before login) Main Test Suite (main elements and content)', () => {
  describe('Testing common Top Navigation Menu', () => {
    topMenu.checkTopNavBarBeforeLogin('/i/support');
  });

  describe('Main Page Elements (2): picture and form', () => {
    it('Checking main DIV', () => {
      supportPageDefaultPOM
        .mainDiv()
        .should('be.visible')
        .children()
        .should('have.length', 2);
    });
    it('Checking picture', () => {
      supportPageDefaultPOM
        .mainDiv()
        .children()
        .first()
        .children()
        .should('be.visible')
        .should('have.attr', 'alt', 'Kompot Support')
        .should('have.attr', 'title', 'Kompot');
    });
    describe('Checking Form', () => {
      it('FORM TAG', () => {
        supportPageDefaultPOM
          .mainDiv()
          .children()
          .last()
          .children()
          .should('be.visible');
      });
      it('USER', () => {
        const userTypes = [
          'Client',
          'Company Owner',
          'Vendor',
          'User',
          'Potential User',
          'Other',
        ];
        supportPageDefaultPOM
          .userLabel()
          .should('be.visible')
          .should('have.text', 'I am a...');

        supportPageDefaultPOM.userDropMenu().click();
        cy.get(
          `div[title="${
            userTypes[Math.floor(Math.random() * userTypes.length)]
          }"]`
        )
          .should('be.visible')
          .click();

        const topicTypes = [
          'Getting in touch with a company owner',
          'Shipping',
          'Orders',
          'Payments',
          'Scheduling',
          'Other',
        ];
        supportPageDefaultPOM
          .topicLabel()
          .should('be.visible')
          .should('have.text', 'What can we help you with?');
      });
    });
  });
});
