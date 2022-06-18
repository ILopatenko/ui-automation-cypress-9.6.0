import IndustriesPageDefaultPOM from '../../../support/page-objects/before-login-poms/industriesPageDefaultPOM';
import LocalHelper from '../../../support/page-objects/localHelper';

const industriesPageDefaultPOM = new IndustriesPageDefaultPOM();
const localHelper = new LocalHelper();

describe('Home Page default (before log in) elements - main test suite', () => {
  beforeEach('Load Industries Page', () => {
    cy.visit('/i/support');
  });
  describe('PRECONDITIONS: load industries Page', () => {

    it.skip('Checking main NAVBAR (with a local helper)', () => {
 main
      localHelper.checkNavbarDefault();
    });
  });

 home-page
  describe.skip('Main Page Elements (2): picture and form', () => {

    it('Checking main DIV', () => {
      industriesPageDefaultPOM
        .mainDiv()
        .should('be.visible')
        .children()
        .should('have.length', 2);
    });
    it('Checking picture', () => {
      industriesPageDefaultPOM
        .mainDiv()
        .children()
        .first()
        .should('be.visible')
        .should('have.attr', 'alt', 'Kompot Support')
        .should('have.attr', 'title', 'Kompot');
    });
 home-page
    describe.skip('Checking Form', () => {

      it('FORM TAG', () => {
        industriesPageDefaultPOM
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
        industriesPageDefaultPOM
          .userLabel()
          .should('be.visible')
          .should('have.text', 'I am a...');

        industriesPageDefaultPOM.userDropMenu().click();
        cy.get(
          `div[title="${
            userTypes[Math.floor(Math.random() * (userTypes.length + 1))]
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
        industriesPageDefaultPOM
          .topicLabel()
          .should('be.visible')
          .should('have.text', 'What can we help you with?');

        industriesPageDefaultPOM.topicDropMenu().click();
        cy.get(
          `div[title="${
            userTypes[Math.floor(Math.random() * (userTypes.length + 1))]
          }"]`
        ).type({ downArrow });
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
