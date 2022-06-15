export default class LocalHelper {
  //NAVBAR
  NavbarMainDiv = () => this.topMenuMainDiv().parent();
  //LOGO
  logo = () => cy.get('span#logo');
  //TOP MENU
  topMenuMainDiv = () => cy.get('div#top-menu');
  //TOP BUTTONS
  topButtonsMainDiv = () => cy.get('div#top-menu').next();
  //MAIN BLOCKS ROOT DIV
  mainBlocksRootDiv = () => cy.get('div#top-menu').parent().parent().next();
  //Main Blocls selector (by number)
  getMainBlockByNumber = (x) => this.mainBlocksRootDiv().children().eq(x);
  topMenuLinks = ['Pricing', 'Industries', 'Support'];
  topButtons = [
    ['Log in', 'login'],
    ['Sign up', 'register'],
  ];
  //METHOD MAIN NAVBAR CHECKING DEFAULT (before log in)
  checkNavbarDefault = () => {
    this.NavbarMainDiv()
      .should('be.visible')
      .children()
      .should('have.length', 3);
    this.logo()
      .should('be.visible')
      .should('have.text', 'Kompot')
      .click()
      .location('pathname')
      .should('eq', '/');
    this.topMenuMainDiv()
      .should('be.visible')
      .children()
      .should('be.visible')
      .should('have.length', 3);
    this.topMenuLinks.forEach((e, i) => {
      cy.get(`a[href="/i/${e.toLowerCase()}"]`)
        .should('have.text', e)
        .click()
        .wait(500)
        .location('pathname')
        .should('eq', `/i/${e.toLowerCase()}`)
        .go('back');
      this.topButtonsMainDiv()
        .should('be.visible')
        .children()
        .should('have.length', 2);
      this.topButtons.forEach((e) => {
        cy.get(`a[data-qa="${e[1]}"]`)
          .first()
          .should('have.text', `${e[0]}`)
          .should('have.attr', 'href', `/user/${e[1]}`)
          .click()
          .wait(500)
          .location('pathname')
          .should('eq', `/user/${e[1]}`)
          .go('back');
      });
    });
  };
}
