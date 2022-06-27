export default class TopNavBarHelper {
  //////////////////////////////////////
  //SELECTORS
  //
  topMenuMainDivSelector = 'div#root>nav>div';
  topMenuLinksMainDivSelector = 'div#top-menu';
  logoSelector = 'span#logo';
  linkPageTitle = 'span[data-qa="page-title"]';
  hamburgerMenuMainSelector = 'ul[role="menu"]';
  userIconButtonSelector = 'a[data-qa="userInfoName"]';
  //
  userProfileOptionSelector = 'li[data-qa="profile"]';
  companySettingsOptionSelector = 'li[data-qa="settings"]';
  logoutOptionSelector = 'li[data-qa="logout"]';
  //
  //USER MENU
  logoText = 'Kompot';
  //////////////////////////////////////
  //TEXT VALUES
  //

  //////////////////////////////////////
  //ADDITIONAL (expected arrays)
  //
  //
  baseUrl = 'https://kompot.us/';
  //
  topLinksExpected = [
    {
      text: 'Clients',
      endPoint: '/client',
    },
    {
      text: 'Orders',
      endPoint: '/order',
    },
    {
      text: 'Estimates',
      endPoint: '/estimate',
    },
    {
      text: 'Invoices',
      endPoint: '/invoice',
    },
    {
      text: 'Payments',
      endPoint: '/payment',
    },
    {
      text: 'Schedule',
      endPoint: '/schedule/calendar',
    },
  ];
  topLinksActual = [];
  //
  topLinksHamburgerExpected = [
    {
      text: 'Addresses',
      endPoint: '/address',
    },
    {
      text: 'Vendors',
      endPoint: '/vendor',
    },
    {
      text: 'Products',
      endPoint: '/product',
    },
    {
      text: 'Purchase Orders',
      endPoint: '/purchaseOrder',
    },
    {
      text: 'Absences',
      endPoint: '/absence',
    },
  ];
  topLinksHamburgerActual = [];
  //

  //
  //////////////////////////////////////
  //METHOODS
  //
  //helpers
  openHamburgerMenu = () =>
    cy
      .get(this.topMenuLinksMainDivSelector)
      .children('button')
      .click()
      .wait(300);
  chooseLink = (endpoint) =>
    cy
      .get(this.hamburgerMenuMainSelector)
      .children(`a[href="${endpoint}"]`);
  //
  //
  clickUserIconMenu = () => {
    cy.get(this.userIconButtonSelector).click().wait(300);
  };
  getUserIconMenu = () => cy.get('ul[role="menu"]');
  chooseIconMenuOption = (option) =>
    cy.get(`li[data-qa="${option}"]`).click().wait(300);
  chooseProfile = () => this.chooseIconMenuOption('profile');
  chooseSettings = () => this.chooseIconMenuOption('settings');
  chooseLogout = () => this.chooseIconMenuOption('logout');
  //
  //

  checkTopMenu = (endpoint) => {
    describe('Checking TopNavBar (pages after Log in) Main Test Suite', () => {
      beforeEach(() => {
        Cypress.Cookies.preserveOnce('connect.sid', 'user_auth');
      });
      describe(`PRECONDITIONS: Log in, load the page that shoul be tested (endpoint: "${endpoint}")`, () => {
        it('Log in with custom cypress command (using default valid credentials)', () => {
          cy.login().wait(1000);
        });
        it(`Load "${endpoint}" page`, () => {
          cy.visit(endpoint).wait(1000);
        });
      });
      describe('preconditions:  Checking main TopNavBar DIV', () => {
        it('Main DIV should exists', () => {
          cy.get(this.topMenuMainDivSelector);
        });
        it('Main DIV should be visible', () => {
          cy.get(this.topMenuMainDivSelector).should('be.visible');
        });
        it('Main DIV should contains 3 elements (div)', () => {
          cy.get(this.topMenuMainDivSelector)
            .children('div')
            .should('have.length', 3);
        });
      });
      describe('CHECKING LOGO', () => {
        it('Main LOGO DIV should be visible', () => {
          cy.get(this.topMenuLinksMainDivSelector)
            .prev('div')
            .should('be.visible');
        });
        it('Main LOGO DIV should have 1 inner A element that should be visible', () => {
          cy.get(this.topMenuLinksMainDivSelector)
            .prev('div')
            .children('a')
            .should('have.length', 1)
            .should('be.visible');
        });
        it('Main LOGO DIV should have 1 inner A element that should have href="/"', () => {
          cy.get(this.topMenuLinksMainDivSelector)
            .prev('div')
            .children('a')
            .should('have.attr', 'href', '/');
        });
        it(`LOGO should have text ${this.logoText}`, () => {
          cy.get(this.logoSelector).should(
            'have.text',
            this.logoText
          );
        });
        it('LOGO should be clickable and redirect user to the Home Page', () => {
          cy.get(this.logoSelector)
            .click()
            .wait(300)
            .location('pathname')
            .should('eq', '/')
            .go('back')
            .wait(300)
            .location('pathname')
            .should('eq', endpoint);
        });
      });
      describe('CHECKING TOP MENU', () => {
        it('Main TOP MENU DIV should be visible', () => {
          cy.get(this.topMenuLinksMainDivSelector).should(
            'be.visible'
          );
        });
        it('Main TOP MENU DIV should have 7 inner elements', () => {
          cy.get(this.topMenuLinksMainDivSelector)
            .children()
            .should('have.length', 7)
            .should('be.visible');
        });
        describe('TOP MENU links that user can see all the time', () => {
          it('Parsing all the actual top links that user can see all the time and compare them with expected values', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .children('div.item')
              .each((e) => {
                let text = e[0].innerText;
                let endPoint = e[0].innerHTML.split('"')[1];
                this.topLinksActual.push({ text, endPoint });
                if (
                  this.topLinksActual.length ===
                  this.topLinksExpected.length
                ) {
                  expect(this.topLinksActual).to.deep.equal(
                    this.topLinksExpected
                  );
                }
              });
          });
          it('Checking each link using loop', () => {
            this.topLinksExpected.forEach((e) => {
              cy.get(`a[href="${e.endPoint}"]`)
                .should('be.visible')
                .should('have.attr', 'href', e.endPoint)
                .click()
                .wait(500)
                .location('pathname')
                .should('eq', e.endPoint)
                .then(() => {
                  if (
                    e.text !==
                    this.topLinksExpected[
                      this.topLinksExpected.length - 1
                    ].text
                  ) {
                    cy.get(this.linkPageTitle)
                      .should('be.visible')
                      .should('have.text', e.text);
                  } else {
                    cy.get(`a[href="${e.endPoint}"]`)
                      .first()
                      .should('have.text', e.text);
                  }
                })
                .go('back')
                .wait(300)
                .location('pathname')
                .should('eq', endpoint);
            });
          });
        });
        describe('TOP MENU links HAMBURGER MENU', () => {
          it('Open HAMBURGER MENU', () => {
            this.openHamburgerMenu().wait(300);
          });
          it('Get HAMBURGER MENU links and compare them with expected values', () => {
            cy.get(this.hamburgerMenuMainSelector)
              .children()
              .each((e) => {
                console.log(e);
                let text = e[0].innerText;
                let endPoint = e[0].href.split('ot.us')[1];
                console.log({ text, endPoint });
                this.topLinksHamburgerActual.push({
                  text,
                  endPoint,
                });
                if (
                  this.topLinksHamburgerActual.length ===
                  this.topLinksHamburgerExpected.length
                ) {
                  console.log('checking time');
                  expect(this.topLinksHamburgerActual).to.deep.equal(
                    this.topLinksHamburgerExpected
                  );
                }
              })
              .first()
              .click()
              .wait(300);
            cy.visit(endpoint).wait(500);
          });
          it('Checking each link using loop', () => {
            this.topLinksHamburgerExpected.forEach((e) => {
              console.log(e);
              this.openHamburgerMenu();
              this.chooseLink(e.endPoint)
                .should('be.visible')
                .children('li')
                .should('have.text', e.text)
                .click()
                .wait(500)
                .location('pathname')
                .should('eq', e.endPoint)
                .then(() => {
                  if (e.text === 'Addresses') {
                    cy.get('form')
                      .prev('div')
                      .should('have.text', e.text);
                  } else if (e.text === 'Purchase Orders') {
                    cy.get(this.linkPageTitle)
                      .should('be.visible')
                      .should('have.text', e.text.slice(0, -1));
                  } else {
                    cy.get(this.linkPageTitle)
                      .should('be.visible')
                      .should('have.text', e.text);
                  }
                })
                .go('back')
                .wait(300)
                .location('pathname')
                .should('eq', endpoint);
            });
          });
        });
      });
      describe('TOP MENU RIGHT ICONS BLOCK', () => {
        describe('General Checks', () => {
          it('Main RIGHT ICONS BLOCK DIV should be visible', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .should('be.visible');
          });
          it('Main RIGHT ICONS BLOCK DIV should have 4 inner DIVs', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .children('div')
              .should('have.length', 4);
          });
        });
        describe('INFO icon', () => {
          it('Checking that main DIV exists and visible', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .children('div')
              .eq(0)
              .should('be.visible');
          });
          it('Checking that INFO icon is clickable and redirects user to the correct page', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .children('div')
              .eq(0)
              .children('a')
              .should('have.attr', 'href', '/info')
              .click()
              .wait(300)
              .then(() => {
                cy.get(this.linkPageTitle)
                  .should('be.visible')
                  .should('have.text', 'Information');
              })
              .location('pathname')
              .should('eq', '/info')
              .go('back')
              .wait(300)
              .location('pathname')
              .should('eq', endpoint);
          });
        });
        describe('SETTINGS/COMPANY INFORMATION icon', () => {
          it('Checking that main DIV exists and visible', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .children('div')
              .eq(1)
              .should('be.visible');
          });
          it('Checking that SETTINGS/COMPANY INFORMATION icon is clickable and redirects user to the correct page', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .children('div')
              .eq(1)
              .children('a')
              .should('have.attr', 'href', '/settings/companyAccount')
              .click()
              .wait(300)
              .then(() => {
                cy.get('h5')
                  .first()
                  .should('be.visible')
                  .should('have.text', 'Company Information');
              })
              .location('pathname')
              .should('eq', '/settings/companyAccount')
              .go('back')
              .wait(300);
          });
        });
        describe('NOTIFICATION icon', () => {
          it('Checking that main DIV exists and visible', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .children('div')
              .eq(2)
              .should('be.visible');
          });
          it('Checking that SETTINGS/COMPANY INFORMATION icon is clickable and opens a Modal', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .children('div')
              .eq(2)
              .children('div')
              .children('span')
              .click()
              .wait(300)
              .then(() => {
                cy.get('div[role=separator]')
                  .prev('div')
                  .children('div')
                  .children('div')
                  .first()
                  .should('be.visible')
                  .should('have.text', 'Notifications');
              });
          });
          it('Close the Modal', () => {
            cy.get('div[role=separator]')
              .prev('div')
              .children('div')
              .children('button')
              .click()
              .wait(300);
          });
          it('Check that the Modal was closed', () => {
            cy.get(this.logoSelector).should('be.visible');
          });
        });
        describe('USER icon', () => {
          it('Checking that main DIV exists and visible', () => {
            cy.get(this.topMenuLinksMainDivSelector)
              .next('div')
              .children('div')
              .eq(3)
              .should('be.visible');
          });
          it('Checking that USER icon MENU has 4 lements (3 links and a separator - line)', () => {
            this.clickUserIconMenu();
            this.getUserIconMenu()
              .children('li')
              .should('have.length', 4);
            this.clickUserIconMenu();
          });
          it('Click PROFILE options', () => {
            this.clickUserIconMenu();
            this.chooseProfile()
              .location('href')
              .should('contains', '/profile/')
              .should('have.length', 50)
              .go('back')
              .wait(300);
          });
          it('Click SETTINGS options', () => {
            this.clickUserIconMenu();
            this.chooseSettings()
              .location('href')
              .should('contains', '/companyAccount')
              .should('have.length', 66)
              .go('back')
              .wait(300);
          });
          it('Click LOGOUT options', () => {
            this.clickUserIconMenu();
            this.chooseLogout()
              .wait(300)
              .location('href')
              .should('eq', this.baseUrl);
          });
          it('Log in', () => {
            cy.login().visit(endpoint);
          });
        });
      });
    });
  };
}
