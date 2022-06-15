describe('Navbar', () => {
  it('Checking that NAVBAR main div exists, visible and has 3 children', () => {
    homePageDefaultPOM
      .NavbarMainDiv()
      .should('be.visible')
      .children()
      .should('have.length', 3);
  });
  describe('LOGO', () => {
    it('Checking that LOGO exists, visible, clickable and redirects to Home Page', () => {
      homePageDefaultPOM
        .logo()
        .should('be.visible')
        .should('have.text', 'Kompot')
        .click()
        .location('pathname')
        .should('eq', '/');
    });
  });
  describe('TOP MENU', () => {
    it('Checking that TOP MENU exists, visible and has 3 children. Checking all 3 links', () => {
      const topMenuLinks = ['Pricing', 'Industries', 'Support'];
      homePageDefaultPOM
        .topMenuMainDiv()
        .should('be.visible')
        .children()
        .should('be.visible')
        .should('have.length', 3);
      topMenuLinks.forEach((e, i) => {
        cy.get(`a[href="/i/${e.toLowerCase()}"]`)
          .should('have.text', e)
          .click()
          .wait(500)
          .location('pathname')
          .should('eq', `/i/${e.toLowerCase()}`)
          .go('back');
      });
    });
  });
  describe('TOP BUTTONS', () => {
    it('Checking that TOP BUTTONS exist, visible and redirect to correct pages', () => {
      const topButtons = [
        ['Log in', 'login'],
        ['Sign up', 'register'],
      ];
      homePageDefaultPOM
        .topButtonsMainDiv()
        .should('be.visible')
        .children()
        .should('have.length', 2);
      topButtons.forEach((e) => {
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
  });
});
