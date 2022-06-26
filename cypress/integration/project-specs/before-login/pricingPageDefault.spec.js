import TopNavBarBeforeLoginPOM from '../../../support/page-objects/common-modules/topNavBarBeforeLoginPOM';
import PricingPageDefaultPOM from '../../../support/page-objects/before-login-poms/pricingPageDefaultPOM';

const topMenu = new TopNavBarBeforeLoginPOM();
const pricingPageDefaultPOM = new PricingPageDefaultPOM();

describe('Pricing Page (before login) Main Test Suite (main elements and content)', () => {
  describe('Testing common Top Navigation Menu', () => {
    topMenu.checkTopNavBarBeforeLogin('/i/pricing');
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
  });
});
