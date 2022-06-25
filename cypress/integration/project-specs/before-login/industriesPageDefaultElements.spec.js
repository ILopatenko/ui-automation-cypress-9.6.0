import IndustriesPageDefaultPOM from '../../../support/page-objects/before-login-poms/industriesPageDefaultPOM';
import LocalHelper from '../../../support/page-objects/localHelper';
const industriesPageDefaultPOM = new IndustriesPageDefaultPOM();
const localHelper = new LocalHelper();

describe('Industries Page default (before log in) elements - main test suite', () => {
  beforeEach('Load Industries Page', () => {
    cy.visit('/i/industries');
  });
  describe('PRECONDITIONS: load industries Page', () => {
    it('Checking main NAVBAR (with a local helper)', () => {
      localHelper.checkNavbarDefault();
    });
  });

  describe('Main Page Elements (3): header, paragraph, table', () => {
    it('Checking Header', () => {
      industriesPageDefaultPOM
        .mainDiv()
        .should('be.visible')
        .children()
        .should('have.length', 9)
        .parent()
        .siblings('h1')
        .should('be.visible')
        .should('have.text', 'Industries')
        .next('p')
        .should('be.visible')
        .should(
          'have.text',
          'Kompot keeps packed all your field service scheduling tools in one place.'
        )
        .next('div')
        .children()
        .should('have.length', 9);
    });
    it.skip('Parsing', () => {
      let industriesDefaultPageElements = [];
      industriesPageDefaultPOM
        .mainRow()
        .find('h4')
        .each((e, i) => {
          industriesDefaultPageElements.push([e[0].innerText]);
        });
      industriesPageDefaultPOM
        .mainRow()
        .find('p')
        .each((e, i) => {
          industriesDefaultPageElements[i].push(e[0].innerText);
        });
      cy.writeFile(
        './cypress/support/page-objects/test-data/parse/before-login/industries.js',
        industriesDefaultPageElements
      );
    });
    it('Checking Table', () => {
      const testData = [
        [
          'Locksmith',
          'Install, repair, and adjust locks in everything from cars to office buildings, and also offer services to people who are locked out or individuals who want to consult with someone about their security systems.',
        ],
        [
          'Plumbing',
          'Install, maintain, and repair pipes and fixture associated with heating, cooling, water distribution, and sanitation systems in residential and commercial structures.',
        ],
        [
          'HVAC',
          "Heating, ventilation, and air conditioning is the technology of indoor and vehicular environmental comfort. It's goal is to provide thermal comfort.",
        ],
        [
          'Carpet Cleaning',
          'You can provide an assortment of cleaning and restoration services for local commercial and residential customers including steam carpet cleaning.',
        ],
        [
          'Garage Door',
          'Install or repair doors, lubricate door tracks or wheels, or replace the springs that help doors open and close. Also include working on the repair of electric door openers, safety features, and other components.',
        ],
        [
          'Junk Removal',
          'When you schedule junk removal, company sends a small team of haulers to your location to carry your junk from wherever it is out to their truck and haul it away to dispose of it properly. And you will never have to worry about it again.',
        ],
        [
          'Electrical Contractor',
          'Install and maintain electrical power systems, conduits, cables, control panels, generators, lighting systems, video and data systems, and low voltage systems.',
        ],
        [
          'Appliance Repair',
          'Install and troubleshoot washers, ranges and other large appliances for your customers. Instruct their customers on how to operate the appliances properly...',
        ],
        [
          'Service Dispatch',
          'Receive emergency and non-emergency calls and record significant information. Addressing problems and requests by transmitting information or providing solutions. Receiving and dispatching orders for products or deliveries.',
        ],
      ];

      industriesPageDefaultPOM
        .mainDiv()
        .find('h4')
        .each((e, i) => {
          cy.wrap(e).should('have.text', `${testData[i][0]}`);
        });
      industriesPageDefaultPOM
        .mainDiv()
        .find('p')
        .each((e, i) => {
          expect(e[0].innerText).eq(`${testData[i][1]}`);
        });
    });
  });
});
//TODO:
//CHECK ALL THE TEXT INSIDE SMALLEST DIVs
/* describe('', () => {
    it('', () => {});
  });
   */
