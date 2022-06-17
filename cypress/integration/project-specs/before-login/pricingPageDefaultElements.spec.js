import PricingPageDefaultPOM from '../../../support/page-objects/before-login-poms/pricingPageDefaultPOM';
import LocalHelper from '../../../support/page-objects/localHelper';
const pricingPageDefaultPOM = new PricingPageDefaultPOM();
const localHelper = new LocalHelper();

describe('Home Page default (before log in) elements - main test suite', () => {
  describe('PRECONDITIONS: load Pricing Page', () => {
    it('Load Pricing Page', () => {
      cy.visit('/i/pricing');
    });
    it('Checking main NAVBAR (with a local helper)', () => {
      localHelper.checkNavbarDefault();
    });
  });

  describe('Main Page Elements (3): header, paragraph, table', () => {
    it('Checking that main Pricing Page DIV exists and has 3 elements', () => {
      cy.visit('/i/pricing');
      pricingPageDefaultPOM
        .mainDiv()
        .should('be.visible')
        .children()
        .should('have.length', 3)
        .first('h1')
        .should('be.visible')
        .should('have.text', 'Pricing')
        .next('p')
        .should('be.visible')
        .should(
          'have.text',
          'Kompot keeps your clients, accounting and communication all in one place.'
        )
        .next('div')
        .should('be.visible')
        .children()
        .should('have.length', 3);

      cy.get('a[href="/user/register"]')
        .not('[data-qa]')
        .should('have.length', 3)
        .each((e, i) => {
          let label = i === 0 ? 'Start' : 'Start 14 day trial';
          console.log(label);
          cy.wrap(e).should('have.text', `${label}`);
        });
    });
    it('Test', () => {
      cy.exec('ls -la');
    });
  });
});
//TODO:
//CHECK ALL THE TEXT INSIDE SMALLEST DIVs
/* describe('', () => {
    it('', () => {});
  });
   */
