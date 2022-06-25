import HomePageAfterPOM from '../../../support/page-objects/after-login/homePageAfterPOM';
import LocalHelper from '../../../support/page-objects/localHelper';
const homePageAfterPOM = new HomePageAfterPOM();
const localHelper = new LocalHelper();

describe('Home Page default (before log in) elements - main test suite', () => {
  describe('PRECONDITIONS: load Home Page', () => {
    it('Load Home Page', () => {
      cy.login();
    });
  });
  describe('NAVBAR', () => {
    it('Checking that main NAVBAR div exists', () => {
      homePageAfterPOM.MainPageDiv().should('be.visible');
    });

    describe('LOGO', () => {
      it('Checking that LOGO exists', () => {
        homePageAfterPOM.logo().should('be.visible');
      });
      it('Checking that LOGO has text "Kompot"', () => {
        homePageAfterPOM.logo().should('have.text', 'Kompot');
      });
      it('Checking that LOGO is clickable', () => {
        homePageAfterPOM
          .logo()
          .parent()
          .should('have.attr', 'href', '/');
      });
      it('Checking that after click on LOGO user redirects to Home Page', () => {
        homePageAfterPOM
          .logo()
          .click()
          .location('pathname')
          .should('eq', '/')
          .go('back');
      });
    });
    describe('TOPMENU', () => {
      const links = [];
      const links2 = [];
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

      it('Checking that TOPMENU main DIV exists', () => {
        homePageAfterPOM.topMenu();
      });
      it.skip('PARSE ELEMENTS - block 1', () => {
        homePageAfterPOM
          .topMenu()
          .children('div')
          .each((e) => {
            links.push([
              e[0].innerText,
              e[0].innerHTML.split('"')[1],
            ]);
          });
        console.log(links);
      });
      it('Checking links at TOP MENU - block 1', () => {
        parsed.map((e, i) => {
          cy.get(`a[href="${e[1]}"]`)
            .should('have.text', `${e[0]}`)
            .click()
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
            })
            .go('back');
        });
      });
      it.skip('PARSE ELEMENTS - block 2', () => {
        homePageAfterPOM.hamburgerMenuButton().click();
        cy.get('ul[role="menu"]')
          .children()
          .each((e) => {
            let label = e[0].innerText;
            let endPoint = e[0].href.split('/');
            links2.push([label, `/${endPoint[endPoint.length - 1]}`]);
            //console.log(e);
            /* cy.wrap(e)
              .children('li')
              .each((li) => {
                console.log(li);
              });
 */
            //cy.wrap(e).should('have.attr', 'href');
          });
        console.log(links2);
      });
      it('Checking links at TOP MENU - block 2', () => {
        parsed2.map((e, i) => {
          homePageAfterPOM.hamburgerMenuButton().click();

          cy.get('li')
            .contains(e[0])
            .click()
            .wait(700)
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
      });
    });
  });
});
