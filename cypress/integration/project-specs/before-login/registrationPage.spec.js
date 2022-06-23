import RegistrationPageDefaultPOM from '../../../support/page-objects/before-login-poms/registrationPageDefaultPOM';
const registrationPageDefaultPOM = new RegistrationPageDefaultPOM();

describe('Registration Page - main test suite', () => {
  describe('PRECONDITIONS: load Registration Page', () => {
    it('Load Registration Page', () => {
      cy.visit('/user/register');
    });
  });
  describe('STAGE 1: checking all the main Page elements and their base functionality', () => {
    describe('LOGO', () => {
      it('Checking that span with id="logo" exists on the page', () => {
        registrationPageDefaultPOM.logoSpan();
      });
      it('Checking that span with id="logo" is visible', () => {
        registrationPageDefaultPOM.logoSpan().should('be.visible');
      });
      it('Checking that span with id="logo" has text "Kompot"', () => {
        registrationPageDefaultPOM.logoSpan().should('have.text', 'Kompot');
      });
      it('Checking that span with id="logo" is clickable and after click on Logo user is redirected to another page', () => {
        registrationPageDefaultPOM
          .logoSpan()
          .click()
          .location('pathname')
          .should('not.eq', '/user/register')
          .go('back');
      });
      it('Checking that after click on span with id="logo" user is redirected to a Home Page', () => {
        registrationPageDefaultPOM
          .logoSpan()
          .click()
          .location('pathname')
          .should('eq', '/')
          .go('back');
      });
    });
    describe('page HEADER "Start your free 14-day trial with Kompot"', () => {
      it('Checking that header exists on the page', () => {
        registrationPageDefaultPOM.header();
      });
      //TO DO: Check header - registrationPageDefaultPOM.header().should('be.visible) returns error that element is undefined
    });
    describe('EMAIL input field', () => {
      it('Checking that EMAIL input main DIV exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children('div')
          .first()
          .should('be.visible');
      });
      it('Checking that EMAIL main DIV field has a label element', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('label')
          .should('be.visible');
      });
      it('Checking that EMAIL LABEL has attributes for="email" and id="email-label"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('label')
          .should('have.attr', 'for', 'email')
          .should('have.attr', 'id', 'email-label');
      });
      it('Checking that EMAIL LABEL has text "Email" ', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('label')
          .should('have.text', 'Email');
      });
      it('Checking that EMAIL input field has a PLACEHOLDER with text "Email"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('div')
          .should('be.visible')
          .children('fieldset')
          .children('legend')
          .children('span')
          .should('have.text', 'Email');
      });
      it('Checking that EMAIL input field exists', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('div')
          .children('input')
          .should('be.visible');
      });
      it('Checking that user can typing, deleting, and paste from buffer in EMAIL input field', () => {
        const testEmail = 'test@test.test';
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('div')
          .children('input')
          .type('test')
          .wait(500)
          .should('have.value', 'test')
          .type('{backspace}{backspace}')
          .wait(500)
          .should('have.value', 'te')
          .type('{backspace}{backspace}')
          .wait(500)
          .should('have.value', '')
          .invoke('val', testEmail)
          .wait(500)
          .should('have.value', testEmail);
      });
    });
    describe('PASSWORD input field', () => {
      it('Checking that PASSWORD input main DIV exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children('div')
          .first()
          .should('be.visible');
      });
      it('Checking that PASSWORD main DIV field has a label element', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('label')
          .should('be.visible');
      });
      it('Checking that PASSWORD LABEL has attributes for="password" and id="password-label"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('label')
          .should('have.attr', 'for', 'password')
          .should('have.attr', 'id', 'password-label');
      });
      it('Checking that PASSWORD LABEL has text "Password" ', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('label')
          .should('have.text', 'Password');
      });
      it('Checking that PASSWORD input field has a PLACEHOLDER with text "Password"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('div')
          .should('be.visible')
          .children('fieldset')
          .children('legend')
          .children('span')
          .should('have.text', 'Password');
      });
      it('Checking that PASSWORD input field exists', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('div')
          .children('input')
          .should('be.visible');
      });
      it('Checking that user can typing, deleting, and paste from buffer in PASSWORD input field', () => {
        const testPassword = 'SuperPassword!#$%';
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('div')
          .children('input')
          .type('test')
          .wait(500)
          .should('have.value', 'test')
          .type('{backspace}{backspace}')
          .wait(500)
          .should('have.value', 'te')
          .type('{backspace}{backspace}')
          .wait(500)
          .should('have.value', '')
          .invoke('val', testPassword)
          .wait(500)
          .should('have.value', testPassword);
      });
    });
  });
});
