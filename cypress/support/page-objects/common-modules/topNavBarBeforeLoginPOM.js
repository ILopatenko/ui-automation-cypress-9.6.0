export default class TopNavBarBeforeLoginPOM {
  //TEXT
  logoText = 'Kompot';
  loginButtonText = 'Log in';
  //ADDITIONAL
  topMenuLinksExpected = [
    ['Pricing', '/i/pricing'],
    ['Industries', '/i/industries'],
    ['Support', '/i/support'],
  ];
  topMenuLinksActual = [];
  //
  topButtonsLinksExpected = [
    [
      'Log in',
      '/user/login',
      'data-qa',
      'login',
      "a[data-qa='login']",
    ],
    [
      'Sign up',
      '/user/register',
      'data-qa',
      'register',
      "a[data-qa='register']",
    ],
  ];
  topButtonsLinksActual = [];
  //
  //SELECTORS
  //

  topNavBarMainDivSelector = 'nav>div';
  topMenuLinksSelector = 'div#top-menu';
  loginButtonSelector = 'a[data-qa="login"]';
  //
  //TESTS
  //
  checkTopNavBarBeforeLogin = (endpoint) => {
    describe('Checking TopNavBar Main Test Suite', () => {
      it(`PRECONDITIONS: load the page "${endpoint}`, () => {
        cy.visit(endpoint).wait(300);
      });
      it('Checking that main TopNavBar DIV exists ', () => {
        cy.get(this.topNavBarMainDivSelector).should('be.visible');
      });
      it('Checking that main TopNavBar DIV has 3 inner elements', () => {
        cy.get(this.topNavBarMainDivSelector)
          .children('div')
          .should('have.length', 3);
      });
      describe('Checking Logo Kompot', () => {
        it('Checking that main Logo DIV exists', () => {
          cy.get(this.topMenuLinksSelector)
            .prev()
            .should('be.visible');
        });
        it(`Checking that Logo has text "${this.logoText}"`, () => {
          cy.get(this.topMenuLinksSelector)
            .prev()
            .children('a')
            .should('be.visible')
            .children('span')
            .should('be.visible')
            .should('have.text', this.logoText);
        });
        it(`Checking that Logo is clickable and redirects to the Home Page`, () => {
          cy.get(this.topMenuLinksSelector)
            .prev()
            .children('a')
            .children('span')
            .click()
            .location('pathname')
            .should('eq', '/')
            .go('back')
            .location('pathname')
            .should('eq', endpoint);
        });
      });
      describe('Checking Top Menu that consists of 3 links: Pricing, Industries, Support', () => {
        it('Checking that main Top Menu DIV exists', () => {
          cy.get(this.topMenuLinksSelector).should('be.visible');
        });
        it('Checking that main Top Menu DIV has 3 inner DIVs', () => {
          cy.get(this.topMenuLinksSelector)
            .children('div')
            .should('have.length', 3);
        });
        it('Parsing data about 3 links and comparing results with expected array', () => {
          cy.get(this.topMenuLinksSelector)
            .children('div')
            .each((e) => {
              cy.wrap(e)
                .children('a')
                .should('be.visible')
                .each((e) => {
                  let text = e[0].innerText;
                  let link = e[0].href;
                  let endpoint = link.split('/');
                  endpoint = `/i/${endpoint[endpoint.length - 1]}`;
                  this.topMenuLinksActual.push([text, endpoint]);
                  if (
                    this.topMenuLinksActual.length ===
                    this.topMenuLinksExpected.length
                  ) {
                    expect(this.topMenuLinksActual).to.deep.equal(
                      this.topMenuLinksExpected
                    );
                  }
                });
            });
        });
        it('Checking that each link is clickable and redirects user to a correct page', () => {
          this.topMenuLinksExpected.forEach((e, i) => {
            cy.get(`a[href="${e[1]}"]`)
              .should('be.visible')
              .click()
              .wait(300)
              .location('pathname')
              .should('eq', e[1])
              .go('back')
              .location('pathname')
              .should('eq', endpoint);
          });
        });
      });
      describe('Checking 2 buttons that located in top right corner', () => {
        it('Checking that main Top Buttons DIV exists', () => {
          cy.get(this.topMenuLinksSelector)
            .next('div')
            .should('be.visible');
        });
        it('Checking that main Top Buttons DIV has 2 inner A elements', () => {
          cy.get(this.topMenuLinksSelector)
            .next('div')
            .children('a')
            .should('have.length', 2);
        });
        it('Parsing data about 2 buttons and comparing results with expected array', () => {
          cy.get(this.topMenuLinksSelector)
            .next('div')
            .children('a')
            .each((e) => {
              let text = e[0].innerText;
              let endpoint = e[0].href.split('kompot.us')[1];
              let attrName = e[0].attributes[1].name;
              let attrValue = e[0].attributes[1].value;
              let attr = `a[${attrName}='${attrValue}']`;
              this.topButtonsLinksActual.push([
                text,
                endpoint,
                attrName,
                attrValue,
                attr,
              ]);
              if (
                this.topButtonsLinksActual.length ===
                this.topButtonsLinksExpected.length
              ) {
                expect(this.topButtonsLinksActual).to.deep.equal(
                  this.topButtonsLinksExpected
                );
              }
            });
        });
        it('Checking that each button is clickable and redirects user to a correct page', () => {
          this.topButtonsLinksExpected.forEach((e) => {
            cy.get(e[4])
              .first()
              .should('be.visible')
              .should('have.attr', e[2], e[3])
              .click()
              .wait(300)
              .location('pathname')
              .should('eq', e[1])
              .go('back')
              .location('pathname')
              .should('not.eq', e[1]);
          });
        });
      });
    });
  };
}
