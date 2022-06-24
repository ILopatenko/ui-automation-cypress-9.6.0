import LoginPageDefaultPOM from '../../../support/page-objects/before-login-poms/loginPageDefaultPOM';
const loginPageDefault = new LoginPageDefaultPOM();

describe('Login Page - main test suite', () => {
  describe('PRECONDITIONS: load Login Page', () => {
    it('Load Login Page', () => {
      cy.visit('/user/login');
    });
  });
  describe('STAGE 1: checking all the main Page elements and their base functionality', () => {
    describe('LOGO', () => {
      it('Checking that span with id="logo" exists on the page', () => {
        loginPageDefault.logoSpan();
      });
      it('Checking that span with id="logo" is visible', () => {
        loginPageDefault.logoSpan().should('be.visible');
      });
      it('Checking that span with id="logo" has text "Kompot"', () => {
        loginPageDefault.logoSpan().should('have.text', 'Kompot');
      });
      it('Checking that span with id="logo" is clickable and after click on Logo user is redirected to another page', () => {
        loginPageDefault
          .logoSpan()
          .click()
          .location('pathname')
          .should('not.eq', '/user/register')
          .go('back');
      });
      it('Checking that after click on span with id="logo" user is redirected to a Home Page', () => {
        loginPageDefault
          .logoSpan()
          .click()
          .location('pathname')
          .should('eq', '/')
          .go('back');
      });
    });
    describe('page HEADER "Welcome back!"', () => {
      it('Checking that header exists on the page', () => {
        loginPageDefault.header();
        cy.contains('h1', 'Welcome back!');
      });
      //TO DO: Check header - loginPageDefault.header().should('be.visible) returns error that element is undefined
    });
    describe('EMAIL input field', () => {
      it('Checking that EMAIL input main DIV exists on the page', () => {
        loginPageDefault.mainForm().children('div').first();
      });
      it('Checking that EMAIL main DIV field has a label element', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .eq(0)
          .children('div')
          .should('be.visible');
      });
      it('Checking that EMAIL LABEL has attributes for="email" and id="email-label"', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .eq(0)
          .children('label')
          .should('have.attr', 'for', 'email')
          .should('have.attr', 'id', 'email-label');
      });
      it('Checking that EMAIL LABEL has text "Email" ', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .eq(0)
          .children('label')
          .should('have.text', 'Email');
      });
      it('Checking that EMAIL input field has a PLACEHOLDER with text "Email"', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .eq(0)
          .children('div')
          .children('fieldset')
          .children('legend')
          .children('span')
          .should('have.text', 'Email');
      });
      it('Checking that EMAIL input field exists', () => {
        loginPageDefault.emailInput().should('be.visible');
      });
      it('Checking that user can typing, deleting, and paste from buffer in EMAIL input field', () => {
        const testEmail = 'test@test.test';
        loginPageDefault;
        loginPageDefault
          .emailInput()
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
        loginPageDefault
          .mainForm()
          .children('div')
          .first()
          .should('be.visible');
      });
      it('Checking that PASSWORD main DIV field has a label element', () => {
        loginPageDefault
          .mainForm()
          .children()
          .eq(1)
          .children('label')
          .should('be.visible');
      });
      it('Checking that PASSWORD LABEL has attributes for="password" and id="password-label"', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .eq(1)
          .children('label')
          .should('have.attr', 'for', 'password')
          .should('have.attr', 'id', 'password-label');
      });
      it('Checking that PASSWORD LABEL has text "Password" ', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .eq(1)
          .children('label')
          .should('have.text', 'Password');
      });
      it('Checking that PASSWORD input field has a PLACEHOLDER with text "Password"', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .eq(1)
          .children('div')
          .should('be.visible')
          .children('fieldset')
          .children('legend')
          .children('span')
          .should('have.text', 'Password');
      });
      it('Checking that PASSWORD input field exists', () => {
        loginPageDefault
          .mainForm()
          .children()
          .eq(1)
          .children('div')
          .children('input')
          .should('be.visible');
      });
      it('Checking that user can typing, deleting, and paste from buffer in PASSWORD input field', () => {
        const testPassword = 'SuperPassword!#$%';
        loginPageDefault
          .mainForm()
          .children('div')
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
    describe('SUBMIT button', () => {
      it('Checking that SUBMIT button exists on the page', () => {
        loginPageDefault
          .mainForm()
          .children('button')
          .should('be.visible');
      });
      it('Checking that SUBMIT button has type="submit" and text "Log in"', () => {
        loginPageDefault
          .mainForm()
          .children('button')
          .should('have.attr', 'type', 'submit')
          .should('have.text', 'Log in');
      });
    });
    describe('"Create account" link', () => {
      it('Checking that "Create account" element exists on the page', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .last()
          .children('div')
          .first()
          .children()
          .first();
      });
      it('Checking that "Create account" link has href="/user/login" and text "Create account"', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .last()
          .children('div')
          .first()
          .children('a')
          .should('have.attr', 'href', '/user/register')
          .should('have.text', 'Create account');
      });
      it('Checking that "Create account" link clickable and after click redirects user to Registration Page', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .last()
          .children('div')
          .first()
          .children('a')
          .click()
          .location('pathname')
          .should('not.eq', '/user/login')
          .should('eq', '/user/register')
          .go('back');
      });
    });
    describe('"Forgot password" link', () => {
      it('Checking that "Forgot password" element exists on the page', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .last()
          .children('div')
          .last()
          .children();
      });
      it('Checking that "Forgot password" element is a link', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .last()
          .children('div')
          .last()
          .children('a');
      });
      it('Checking that "Forgot password" link has href="/user/password/reset/request" and text "Forgot password"', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .last()
          .children('div')
          .last()
          .children('a')
          .should('have.attr', 'href', '/user/password/reset/request')
          .should('have.text', 'Forgot password');
      });
      it('Checking that "Forgot password" link clickable and after click redirects user to Reset Password page', () => {
        loginPageDefault
          .mainForm()
          .children('div')
          .last()
          .children('div')
          .last()
          .children('a')
          .click()
          .location('pathname')
          .should('not.eq', '/user/register')
          .should('eq', '/user/password/reset/request')
          .go('back');
      });
    });
    describe('"OR" separator', () => {
      it('Checking that "OR" separator exists on the page', () => {
        loginPageDefault.mainForm().next('div').should('be.visible');
      });
      it('Checking that "OR" separator the role="separator"', () => {
        loginPageDefault
          .mainForm()
          .next('div')
          .should('have.attr', 'role', 'separator');
      });
      it('Checking that "OR" separator has text "OR"', () => {
        loginPageDefault
          .mainForm()
          .next('div')
          .should('have.text', 'OR');
      });
    });
    describe('GOOGLE button', () => {
      it('Checking that GOOGLE button exists on the page', () => {
        loginPageDefault
          .mainForm()
          .siblings('button')
          .eq(0)
          .should('be.visible');
      });
      it('Checking that GOOGLE button has an image', () => {
        loginPageDefault
          .mainForm()
          .siblings('button')
          .eq(0)
          .children('span')
          .first()
          .children('img')
          .should('be.visible');
      });
      it('Checking that GOOGLE button has text "Continue with Google"', () => {
        loginPageDefault
          .mainForm()
          .siblings('button')
          .eq(0)
          .children('span')
          .eq(1)
          .should('be.visible')
          .should('have.text', 'Continue with Google');
      });
    });
  });
});
