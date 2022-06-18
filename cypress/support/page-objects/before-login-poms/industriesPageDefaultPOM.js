export default class IndustriesPageDefaultPOM {
 home-page
  mainDiv = () => cy.get('div.row');


  userLabel = () => cy.get('label[for="support_usertype"]');
  userDropMenu = () => cy.get('input#support_usertype');

  topicLabel = () => cy.get('label[for="support_helpwith"]');
  topicDropMenu = () => cy.get('input#support_helpwith');
}
