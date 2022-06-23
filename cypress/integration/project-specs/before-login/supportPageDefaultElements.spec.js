import SupportPageDefaultPOM from '../../../support/page-objects/before-login-poms/supportPageDefaultPOM';
import LocalHelper from '../../../support/page-objects/localHelper';

const supportPageDefaultPOM = new SupportPageDefaultPOM();
const localHelper = new LocalHelper();

describe('Home Page default (before log in) elements - main test suite', () => {
  beforeEach('Load Industries Page', () => {
    cy.visit('/i/support');
  });
  describe.skip('PRECONDITIONS: load industries Page', () => {
    it('Checking main NAVBAR (with a local helper)', () => {
      localHelper.checkNavbarDefault();
    });
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
        //TO FIX - second drop down menu. Impossible to click at any option!
        /*  supportPageDefaultPOM.topicDropMenu().click();
        cy.get('div[role="listbox"]')
          .eq(Math.floor(Math.random() * 3))
          .children()
          .eq(Math.floor(Math.random() * 3))
          .click({ force: true }); */

        /*   cy.get(
          `div[title="${
            userTypes[Math.floor(Math.random() * userTypes.length)]
          }"]`
        ); */
      });
    });
  });
});
//TODO:
//CHECK ALL THE TEXT INSIDE SMALLEST DIVs
/* describe('', () => {
    it('', () => {});
  });
   */
