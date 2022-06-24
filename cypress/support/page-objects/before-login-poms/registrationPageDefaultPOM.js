export default class RegistrationPageDefaultPOM {
  logoSpan = () => cy.get('span#logo');
  header = () => {
    cy.get('h1');
  };
  mainForm = () => cy.get('form');
  modalCloseButton = () => cy.get('svg[data-testid="CloseIcon"]');
  modalMainDiv = () => cy.get('div[data-test="sentinelStart"]');
  modalBlockWithData = () => this.modalMainDiv().next().children('div').last();
}
