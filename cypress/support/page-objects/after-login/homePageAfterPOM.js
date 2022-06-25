export default class HomePageAfterPOM {
  //navMenu
  //Main DIV that contains 3 DIVs (navbar, main and lower line)
  MainPageDiv = () => cy.get('div#root>nav>div>');
  logo = () => cy.get('span#logo');
  topMenu = () => cy.get('div#top-menu');
  hamburgerMenuButton = () => cy.get('button[type="button"]').first();
}
