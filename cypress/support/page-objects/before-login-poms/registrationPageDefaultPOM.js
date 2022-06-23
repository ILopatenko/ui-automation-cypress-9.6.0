export default class RegistrationPageDefaultPOM {
  logoSpan = () => cy.get('span#logo');
  header = () => {
    cy.get('h1');
  };
  mainForm = () => cy.get('form');
}
