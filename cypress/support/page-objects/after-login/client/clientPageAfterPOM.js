export default class ClientPageAfterPOM {
  //
  //
  //
  PageHeader = () => cy.get('span[data-qa="page-title"]');
  //SEARCH INPUT FIELD
  searchLabelInputField = () => cy.get('label#search-label');
  searchPlaceholderInputField = () => cy.get('legend');
  searchInputField = () => cy.get('input#search');
  clearButton = () => cy.get('svg[data-testid="ClearIcon"]');
  //CREATE CLIENT BUTTON
  createClientButton = () =>
    cy.get('button[data-qa="create-client-button"]');
  //TEXT / PARAGRAPHS
  paragraphsParentDiv = () => cy.get('div.row>div>div>div');
}
