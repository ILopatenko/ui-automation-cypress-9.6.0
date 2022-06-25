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
import HomePageAfterPOM from './page-objects/after-login/homePageAfterPOM';
const localHelper = new LocalHelper();
const loginPage = new LoginPageDefaultPOM();
const homePageAfter = new HomePageAfterPOM();

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
    loginPage.submitButton().click().wait(500);
    homePageAfter.userInfoButton().should('be.visible');
  }
);

Cypress.Commands.add('logout', () => {
  homePageAfter.userInfoButton().click();
  homePageAfter.userInfoMenu();
  homePageAfter
    .logoutOption()
    .should('be.visible')
    .click()
    .wait(500)
    .location('pathname')
    .should('contain', '/');
  cy.get('a[data-qa="login"]').should('be.visible');
});

Cypress.Commands.add('checkNavBarAfterLogin', (endpoint) => {
  const parsed = [
    ['Clients', '/client'],
    ['Orders', '/order'],
    ['Estimates', '/estimate'],
    ['Invoices', '/invoice'],
    ['Payments', '/payment'],
    ['Schedule', '/schedule/calendar'],
  ];
  const parsed2 = [
    ['Addresses', '/address'],
    ['Vendors', '/vendor'],
    ['Products', '/product'],
    ['Purchase Order', '/purchaseOrder'],
    ['Absences', '/absence'],
  ];
  cy.visit(endpoint);
  homePageAfter
    .logo()
    .should('be.visible')
    .should('have.text', 'Kompot')
    .parent()
    .should('have.attr', 'href', '/');
  homePageAfter
    .logo()
    .click()
    .wait(200)
    .location('pathname')
    .should('eq', '/')
    .go('back');

  parsed.map((e, i) => {
    cy.get(`a[href="${e[1]}"]`)
      .should('have.text', `${e[0]}`)
      .click()
      .wait(200)
      .location('pathname')
      .should('eq', `${e[1]}`)
      .then(() => {
        if (i !== parsed.length - 1) {
          cy.get('span[data-qa="page-title"]')
            .should('be.visible')
            .should('have.text', `${e[0]}`);
        } else {
          cy.get('div[class="item active"]')
            .wait(500)
            .should('be.visible')
            .children('a')
            .should('have.attr', 'href', '/schedule/calendar');
        }
      });
  });
  parsed2.map((e, i) => {
    homePageAfter.hamburgerMenuButton().click();
    cy.get('li')
      .contains(e[0])
      .click()
      .wait(200)
      .location('pathname')
      .should('eq', e[1]);
    if (i === 0) {
      cy.get('form')
        .prev()
        .should('be.visible')
        .should('have.text', `${e[0]}`);
    } else {
      cy.get('span[data-qa="page-title"]')
        .should('be.visible')
        .should('have.text', `${e[0]}`);
    }
    cy.go('back');
  });
  homePageAfter
    .topMenu()
    .next('div')
    .children('div')
    .eq(0)
    .children('a')
    .should('have.attr', 'href', '/info')
    .children('img')
    .should('be.visible')
    .should('have.attr', 'alt', 'Docs')
    .click()
    .wait(200)
    .location('pathname')
    .should('eq', '/info');
  cy.get('span[data-qa="page-title"]')
    .should('be.visible')
    .should('have.text', 'Information')
    .go('back')
    .wait(200);

  homePageAfter
    .settings()
    .should('be.visible')
    .should('have.attr', 'alt', 'Settings')
    .click()
    .wait(200)
    .location('pathname')
    .should('eq', '/settings/companyAccount');
  cy.get('h5')
    .first()
    .should('be.visible')
    .should('have.text', 'Company Information')
    .go('back')
    .wait(200);

  homePageAfter.notification().should('be.visible').click();
  homePageAfter.notificationCloseButton().click();

  homePageAfter.userInfoButton().click();
  homePageAfter.userInfoMenu();
  homePageAfter
    .profileOption()
    .should('be.visible')
    .click()
    .location('pathname')
    .should('contain', '/profile')
    .go('back');

  homePageAfter.userInfoButton().click();
  homePageAfter.userInfoMenu();
  homePageAfter
    .companyAccountOption()
    .should('be.visible')
    .click()
    .location('pathname')
    .should('contain', '/companyAccount')
    .go('back');

  cy.logout();
  cy.login();
  cy.visit(endpoint);
});
