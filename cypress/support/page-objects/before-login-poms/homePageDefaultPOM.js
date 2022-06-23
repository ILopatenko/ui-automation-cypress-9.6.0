export default class HomePageDefaultPOM {
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
}
