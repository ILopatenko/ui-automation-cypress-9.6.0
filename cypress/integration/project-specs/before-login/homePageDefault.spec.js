import TopNavBarBeforeLoginPOM from '../../../support/page-objects/common-modules/topNavBarBeforeLoginPOM';
import HomePageDefaultPOM from '../../../support/page-objects/before-login-poms/homePageDefaultPOM';
const homePageDefaultPOM = new HomePageDefaultPOM();
const topMenu = new TopNavBarBeforeLoginPOM();

describe('Home Page (before login) Main Test Suite (main elements and content)', () => {
  describe('Testing common Top Navigation Menu', () => {
    topMenu.checkTopNavBarBeforeLogin('/');
  });
  describe('Main Page Blocks (5): "Perfect CRM solution", "Our Goal", "Why Kompot", "Kompot Features", "Pricing"!', () => {
    it('Checking that Home Page has 5 main blocks (DIVs)', () => {
      homePageDefaultPOM
        .mainBlocksRootDiv()
        .should('be.visible')
        .children()
        .should('have.length', 5);
    });
    it('"Perfect CRM solution" block (#1)', () => {
      homePageDefaultPOM
        .getMainBlockByNumber(0)
        .should('be.visible')
        .children()
        .should('have.length', 2)
        .eq(0)
        .should('be.visible')
        .children('h1')
        .should('be.visible')
        .should(
          'have.text',
          'The perfect CRM solution for small and medium-sized businesses'
        )
        .next()
        .should('be.visible')
        .should(
          'have.text',
          ' Finance, schedule, inventory, client management, telephony calls and messages, planning and more. All in one.'
        )
        .next()
        .should('be.visible')
        .should('have.text', 'Try it for Free')
        .should('have.attr', 'href', '/user/register')
        .click()
        .location('pathname')
        .should('eq', `/user/register`)
        .go('back');
    });
    it('"Our Goal" block (#2)', () => {
      homePageDefaultPOM
        .getMainBlockByNumber(1)
        .should('be.visible')
        .children('div')
        .should('have.length', 1)
        .children()
        .eq(0)
        .should('be.visible')
        .should(
          'have.text',
          ' Our goal is to make life easier  for small businesses'
        )
        .next('p')
        .should('be.visible')
        .should(
          'have.text',
          'We help thousands of Small Businesses simplify prospecting efforts, grow their  business with our advanced automation software.  Kompot keeps packed all your field service scheduling tools in one place.'
        )
        .next('div')
        .should('be.visible')
        .children('div', 3)
        .should('be.visible')
        .children('div.row')
        .should('be.visible')
        .children('div')
        .should('be.visible')
        .should('have.length', 9)
        .parent()
        .parent()
        .parent()
        .next('div')
        .children('div')
        .children('a')
        .should('be.visible')
        .should('have.text', 'Start Free Trial')
        .should('have.attr', 'href', '/user/register')
        .click()
        .location('pathname')
        .should('eq', `/user/register`)
        .go('back');
    });
    it('"Why Kompot" block (#3)', () => {
      homePageDefaultPOM
        .getMainBlockByNumber(2)
        .children()
        .first('h2')
        .should('be.visible')
        .should('have.text', 'Why Kompot? ')
        .next()
        .next()
        .children('div')
        .should('have.length', 3)
        .parent()
        .next('a')
        .should('have.text', 'Get Started')
        .should('have.attr', 'href', '/user/register')
        .click()
        .location('pathname')
        .should('eq', `/user/register`)
        .go('back');
    });
    it('"Kompot Features" block (#4)', () => {
      homePageDefaultPOM
        .getMainBlockByNumber(3)
        .children('div')
        .should('be.visible')
        .children('h2')
        .should('have.text', 'Kompot Features')
        .next()
        .children('div')
        .should('have.length', 3);
    });
    it('"Pricing" block (#5)', () => {
      homePageDefaultPOM
        .getMainBlockByNumber(4)
        .children()
        .should('have.length', 4)
        .first('h2')
        .should('be.visible')
        .should('have.text', 'Pricing')
        .next('div')
        .should('be.visible')
        .should('have.text', 'Choose your perfect plan')
        .next()
        .next()
        .children('div')
        .should('be.visible')
        .should('have.length', 3);
    });
  });
});
