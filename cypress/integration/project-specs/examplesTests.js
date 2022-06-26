import Helper from '../../support/page-objects/helper';
const helper = new Helper();

describe('PRECONDITIONS: Login action', () => {
  it('Load Login Page', () => {
    cy.login();
  });
});

cy.visit('/endPoint');

cy.get(selector);
cy.get('div#root>main>div');
cy.get('label[for="support_helpwith"]');
cy.get('input#support_usertype');
cy.get('button.button');

element.children().first().last().next().prev();
element.parent();
element.siblings().first().last().next().prev();

element.children('div').should('have.length', 2);

element
  .should('be.visible')
  .should('have.text', 'businesses')
  .should('have.attr', 'href', '/user/register');

element
  .location('pathname')
  .should('eq', `/user/register`)
  .go('back');

element
  .location('href')
  .should('contains', '/client?limit=20&page=1');

cy.get(selector)
  .type('abc123QAZ!@#')
  .should('have.value', 'abc123QAZ!@#')
  .type(
    '{backspace}{leftArrow}{rightArrow}{del}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}'
  )

  .type('{selectAll}{del}')
  .should('have.value', '')
  .type('{esc}');

/* {{}	Types the literal { key
      {backspace}	Deletes character to the left of the cursor
      {del}	Deletes character to the right of the cursor
      {downArrow}	Moves cursor down
      {end}	Moves cursor to the end of the line
      {enter}	Types the Enter key
      {esc}	Types the Escape key
      {home}	Moves cursor to the start of the line
      {insert}	Inserts character to the right of the cursor
      {leftArrow}	Moves cursor left
      {moveToEnd}	Moves cursor to end of typeable element
      {moveToStart}	Moves cursor to the start of typeable element
      {pageDown}	Scrolls down
      {pageUp}	Scrolls up
      {rightArrow}	Moves cursor right
      {selectAll}	Selects all text by creating a selection range
      {upArrow}	Moves cursor up */

/* {alt}	Activates the altKey modifier. Aliases: {option}
{ctrl}	Activates the ctrlKey modifier. Aliases: {control}
{meta}	Activates the metaKey modifier. Aliases: {command}, {cmd}
{shift}	Activates the shiftKey modifier. */
