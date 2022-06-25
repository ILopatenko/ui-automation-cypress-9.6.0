export default class ClientModalPageAfterPOM {
  //
  //
  //
  closeModalSVG = () => cy.get('svg[data-testid="CloseIcon"]');
  titleModal = () =>
    this.closeModalSVG().parent('button').prev('div');
  //
  //
  //FIRST NAME
  firstNameInputField = () =>
    cy.get(this.firstNameInputFieldSelector);
  firstNameInputFieldSelector = 'input#firstName';
  firstNamePlaceholder = () => cy.get('label#firstName-label');
  //
  phoneInputFieldSelector = 'input#phone';
  emailInputFieldSelector = 'input#email';

  stateLabel = () => cy.get('label#mui-1-label');
  stateArrow = () => cy.get('div[id="StateClick"]');
  statesUL = () => cy.get('ul[role="listbox"]');

  cancelButton = () => cy.get('button[type="button"]').last();

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
