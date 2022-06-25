// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LocalHelper from '../support/page-objects/localHelper';
import LoginPageDefaultPOM from './page-objects/before-login-poms/loginPageDefaultPOM';
const localHelper = new LocalHelper();
const loginPage = new LoginPageDefaultPOM();

Cypress.Commands.add(
  'login',
  (
    loginCredentials = {
      email: localHelper.testData.credentials.loginValid.karen.email,
      password:
        localHelper.testData.credentials.loginValid.karen.password,
    }
  ) => {
    cy.visit('/user/login');
    loginPage.emailInput().type(loginCredentials.email);
    loginPage.passwordInput().type(loginCredentials.password);
    loginPage.submitButton().click();
  }
);
