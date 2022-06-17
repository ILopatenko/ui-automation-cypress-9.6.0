export default class PricingPageDefaultPOM {
  mainDiv = () =>
    cy.get('div#root').children('div').children('div').children('div');
}
