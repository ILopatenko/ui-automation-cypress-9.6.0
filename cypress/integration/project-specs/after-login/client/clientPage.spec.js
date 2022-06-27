import LocalHelper from '../../../../support/page-objects/localHelper';
import ClientPageAfterPOM from '../../../../support/page-objects/after-login/client/clientPageAfterPOM';
import TopNavBarHelper from '../../../../support/page-objects/common-modules/topNavBarHelper';

const topMenu = new TopNavBarHelper();
const localHelper = new LocalHelper();
const clientPageAfter = new ClientPageAfterPOM();

describe('Client Page - main elements', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('connect.sid', 'user_auth');
  });
  topMenu.checkTopMenu('/client');
  describe('Checking main page elements and their BASE FUNCTIONALITY', () => {
    describe('Checking page title', () => {
      it('Checking that page title has text "Clients"', () => {
        clientPageAfter.PageHeader().should('have.text', 'Clients');
      });
    });
    describe('Checking main SEARCH input field', () => {
      it('Checking main SEARCH input field DIV exists', () => {
        clientPageAfter.PageHeader().next();
      });
      it('Checking main SEARCH input field has label "Search"', () => {
        clientPageAfter
          .searchLabelInputField()
          .should('be.visible')
          .should('have.attr', 'for', 'search')
          .should('have.text', 'Search');
      });
      it('Checking main SEARCH input field has placeholder "Search"', () => {
        clientPageAfter
          .searchPlaceholderInputField()
          .should('have.text', 'Search');
      });
      it('Checking that user can type, move cursor, and use backspace in SEARCH input field', () => {
        clientPageAfter
          .searchInputField()
          .type('abc123QAZ!@#')
          .wait(300)
          .should('have.value', 'abc123QAZ!@#')
          .type(
            '{backspace}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}'
          )
          .should('have.value', 'ab12QA!@');
      });
      it('Checking that user can select all the symbols in search input field and delete them', () => {
        clientPageAfter
          .searchInputField()
          .type('{selectAll}{del}')
          .should('have.value', '');
      });
      it('Checking that click at CLEAR button removes all the symbols from input field', () => {
        clientPageAfter.searchInputField().type('Client Name #23');
        clientPageAfter
          .clearButton()
          .click()
          .should('have.value', '');
      });
      it('Checking that user enters search querry and clicks ENTER app starts searching', () => {
        clientPageAfter
          .searchInputField()
          .type('John Doe')
          .should('have.value', 'John Doe')
          .type('{enter}')
          .location('href')
          .should('contains', 'client?limit=20&page=1&searchValue=')
          .should('contains', 'John')
          .should('contains', 'Doe');
        clientPageAfter
          .clearButton()
          .click()
          .should('have.value', '')
          .location('href')
          .should('contains', '/client?limit=20&page=1');
      });
    });
    describe('Checking CREATE CLIENT button', () => {
      it('Checking that CREATE CLIENT button exists', () => {
        clientPageAfter.createClientButton().should('be.visible');
      });
      it('Checking that CREATE CLIENT button has text CREATE CLIENT', () => {
        clientPageAfter
          .createClientButton()
          .should('have.text', 'Create Client');
      });
      it('Checking that CREATE CLIENT button is clickable and opens a CLIENT MODAL and user can close the MODAL with click at close icon', () => {
        clientPageAfter.createClientButton().click();
        cy.get('svg[data-testid="CloseIcon"]').click();
        clientPageAfter.PageHeader().should('have.text', 'Clients');
      });
    });
    describe('Checking page text', () => {
      it('Checking that page has 3 paragraphs', () => {
        clientPageAfter
          .paragraphsParentDiv()
          .should('be.visible')
          .children('p')
          .should('have.length', 3);
      });
      it('Checking text content', () => {
        const text = [
          'Companies looking for effective sales need to make an effort to retain their client base.',
          'After all, we remember that attracting a new client costs 5-7 times more than keeping one permanent one.',
          'Improving the quality of customer service is the task of the entire company',
        ];
        text.forEach((e, i) => {
          clientPageAfter
            .paragraphsParentDiv()
            .children('p')
            .eq(i)
            .should('have.text', e);
        });
      });
    });
  });
});
