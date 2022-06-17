export default class IndustriesPageDefaultPOM {
  mainDiv = () =>
    cy.get('div.row').should('be.visible').children().should('have.length', 2);

  mainDiv = () =>
    cy.get('div.row').should('be.visible').children().should('have.length', 2);

  userLabel = () => cy.get('label[for="support_usertype"]');
  userDropMenu = () => cy.get('input#support_usertype');

  topicLabel = () => cy.get('label[for="support_helpwith"]');
  topicDropMenu = () => cy.get('input#support_helpwith');
}
