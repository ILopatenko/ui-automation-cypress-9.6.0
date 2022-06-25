export default class HomePageAfterPOM {
  //navMenu
  //Main DIV that contains 3 DIVs (navbar, main and lower line)
  MainPageDiv = () => cy.get('div#root>nav>div>');
  logo = () => cy.get('span#logo');
  topMenu = () => cy.get('div#top-menu');
  hamburgerMenuButton = () => cy.get('button[type="button"]').first();
  settings = () => cy.get('img[data-qa="settings-icon"]');
  notification = () =>
    cy.get('svg[data-testid="NotificationsNoneIcon"]');
  notificationCloseButton = () =>
    cy.get('button[aria-label="close"]');
  userInfoButton = () => cy.get('a[data-qa="userInfoName"]');
  userInfoMenu = () => cy.get('ul[data-menu-list="true"]');
  profileOption = () => cy.get('li[data-qa="profile"]');
  companyAccountOption = () => cy.get('li[data-qa="settings"]');
  logoutOption = () => cy.get('li[data-qa="logout"]');
}
