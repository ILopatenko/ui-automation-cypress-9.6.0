export default class RegistrationPageDefaultPOM {
  logoSpan = () => cy.get('span#logo');
  header = () => {
    cy.get('h1');
  };
  mainForm = () => cy.get('form');
  modalCloseButton = () => cy.get('svg[data-testid="CloseIcon"]');
  modalMainDiv = () => cy.get('div[data-test="sentinelStart"]');
  modalBlockWithData = () =>
    this.modalMainDiv().next().children('div').last();

  //for functional
  emailInput = () => cy.get('input#email');
  passwordInput = () => cy.get('input#password');
  submitButton = () => cy.get('button[type="submit"]');
  fullNameInputField = () => cy.get('input#fullName');
  phoneNumberInputField = () => cy.get('input#phone_number');
  companyNameInputField = () => cy.get('input#companyName');
  primaryIndustryInputField = () => cy.get('input#primaryIndustry');
  companySizeDropDownButton = () =>
    cy.get('svg[data-testid="ArrowDropDownIcon"]');
  companySizeList = () =>
    cy
      .get('div[role="presentation"]>div>ul>li')
      .eq(Math.floor(Math.random() * 20) % 3);
}
