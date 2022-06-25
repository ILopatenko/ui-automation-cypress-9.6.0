import LocalHelper from '../../../../support/page-objects/localHelper';
import ClientPageAfterPOM from '../../../../support/page-objects/after-login/client/clientPageAfterPOM';
import ClientModalPageAfterPOM from '../../../../support/page-objects/after-login/client/clientModalPageAfterPOM';
const localHelper = new LocalHelper();
const clientPageAfter = new ClientPageAfterPOM();
const clientModalPageAfter = new ClientModalPageAfterPOM();

describe('Client Modal Page - main elements', () => {
  describe('PRECONDITIONS: login and load Client Modal Page', () => {
    it('LOGIN and load Client Page', () => {
      cy.login().wait(300).visit('/client');
    });
    it('Click CREATE CLIENT button', () => {
      clientModalPageAfter.createClientButton().click();
    });
  });
  describe('Checking main page elements and their BASE FUNCTIONALITY', () => {
    describe('Checking page title', () => {
      it('Checking that page title has text "Clients"', () => {
        clientModalPageAfter
          .titleModal()
          .should('have.text', 'Create New Client');
      });
    });
    describe('Checking FIRST NAME, LAST NAME, COMPANY, E-MAIL, EXT, ADDRESS, UNIT, CITY, ZIP, ADDITIONAL input field', () => {
      it('Checking input fields base functionality, labels and placeholders - LOOP', () => {
        const clientModalInputSelectors = [
          ['First Name *', 'firstName-label', 'firstName'],
          ['Last Name', 'lastName-label', 'lastName'],
          ['Company Name', 'company-label', 'company'],
          ['Address', 'addressLine1-label', 'addressLine1'],
          ['City', 'city-label', 'city'],
          [
            'Additional Information',
            'additionalInfo-label',
            'additionalInfo',
          ],
        ];
        const clientModalInputNumbersSelectors = [
          ['Ext', 'ext-label', 'ext'],
          ['Unit', 'addressLine2-label', 'addressLine2'],
          ['Zip', 'zipCode-label', 'zipCode'],
        ];
        clientModalInputSelectors.forEach((e) => {
          cy.get(`label#${e[1]}`).should('have.text', e[0]);
          cy.checkTextInputField(`input#${e[2]}`);
          cy.get(`label#${e[1]}`).should('have.text', e[0]);
        });
        clientModalInputNumbersSelectors.forEach((e) => {
          cy.get(`label#${e[1]}`).should('have.text', e[0]);
          cy.checkNumberInputField(`input#${e[2]}`);
          cy.get(`label#${e[1]}`).should('have.text', e[0]);
        });
      });
    });
    describe('Checking PHONE', () => {
      it('Checking with valid random US number', () => {
        cy.checkPhoneNumberUSInputField(
          clientModalPageAfter.phoneInputFieldSelector
        );
      });
    });
    describe('Checking EMAIL', () => {
      it('Checking with valid random email', () => {
        cy.checkEmailInputField(
          clientModalPageAfter.emailInputFieldSelector
        );
      });
    });
    describe('Checking STATE drop down', () => {
      it('Click menu', () => {
        clientModalPageAfter
          .stateLabel()
          .should('have.text', 'Select State');
        clientModalPageAfter.stateArrow().click();
      });
      it('Select random state', () => {
        clientModalPageAfter
          .statesUL()
          .children('li')
          .eq(localHelper.getRandomBetween(0, 50))
          .click();
      });
      it('Click CANCEL button', () => {
        clientModalPageAfter.cancelButton().click();
      });
    });
  });
});
