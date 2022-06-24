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
  mainBlocksRootDiv = () =>
    cy.get('div#top-menu').parent().parent().next();
  //Main Blocls selector (by number)
  getMainBlockByNumber = (x) =>
    this.mainBlocksRootDiv().children().eq(x);
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

  //
  //
  testData = {
    registration: {
      firstNames: [
        'James',
        'Robert',
        'John',
        'Michael',
        'David',
        'William',
        'Richard',
        'Joseph',
        'Thomas',
        'Charles',
        'Christopher',
        'Daniel',
        'Matthew',
        'Anthony',
        'Mark',
        'Donald',
        'Steven',
        'Paul',
        'Andrew',
        'Joshua',
        'Mary',
        'Patricia',
        'Jennifer',
        'Linda',
        'Elizabeth',
        'Barbara',
        'Susan',
        'Jessica',
        'Sarah',
        'Karen',
        'Lisa',
        'Nancy',
        'Betty',
        'Margaret',
        'Sandra',
        'Ashley',
        'Kimberly',
        'Emily',
        'Donna',
        'Michelle',
      ],
      lastNames: [
        'Johnson',
        'Williams',
        'Brown',
        'Jones',
        'Garcia',
        'Miller',
        'Davis',
        'Rodriguez',
        'Martinez',
        'Hernandez',
        'Lopez',
        'Gonzales',
        'Wilson',
        'Anderson',
        'Thomas',
        'Taylor',
        'Moore',
        'Jackson',
        'Martin',
        'Lee',
        'Perez',
        'Thompson',
        'White',
        'Harris',
        'Sanchez',
        'Clark',
        'Ramirez',
        'Lewis',
        'Robinson',
        'Walker',
        'Young',
        'Allen',
        'King',
        'Wright',
        'Scott',
        'Torres',
        'Nguyen',
        'Hill',
        'Flores',
      ],
      alphabetLowerCase: 'abcdefghijklmnopqrstuvwxyz',
      alphabetUpperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbolsSet1: '`~!@#$%^&*()_-+=|{}[];:",.<>/?',
      symbolsEmail: '!#$%&*_',
      emailDomains: [
        'outlook',
        'gmail',
        'yahoo',
        'inbox',
        'icloud',
        'inbox',
        'mail',
        'aol',
      ],
      domains: ['ru', 'net', 'com', 'us', 'io', 'fr'],
      industries: [
        'Health Care and Virtual Medicine',
        'Accommodation and Food Services',
        'Arts, Entertainment, and Crafts',
        'Personal Trainers (online)',
        'Site building and web design',
        'Local Auto Repairs',
        'Secondhand (Online) Stores',
        'Pet services',
        'Moving',
        'Delivery service',
      ],
    },
  };
  //
  //

  //
  //
  //
  //REGISTRATION
  //
  getRandomElementFromGivenSetDefault1 = (set, length = 1) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += set[Math.floor(Math.random() * set.length)];
    }
    return result;
  };
  getRandomBetween = (a = 1, b = 9) =>
    a + Math.floor(Math.random() * b);

  generatePassword = (n) => {
    return (
      this.getRandomElementFromGivenSetDefault1(
        this.testData.registration.alphabetLowerCase,
        this.getRandomBetween(2, n)
      ) +
      this.getRandomElementFromGivenSetDefault1(
        this.testData.registration.symbolsSet1,
        this.getRandomBetween(2, n)
      ) +
      this.getRandomElementFromGivenSetDefault1(
        this.testData.registration.alphabetUpperCase,
        this.getRandomBetween(2, n)
      ) +
      this.getRandomElementFromGivenSetDefault1(
        this.testData.registration.numbers,
        this.getRandomBetween(2, n)
      )
    );
  };
  generateEmailBasedOnFullName1 = (
    firstName,
    lastName,
    length = 3
  ) => {
    const emailDomain = this.getRandomElementFromGivenSetDefault1(
      this.testData.registration.emailDomains
    );
    const domain = this.getRandomElementFromGivenSetDefault1(
      this.testData.registration.domains
    );

    let capitalLetters = '';
    let symbols = '';
    let numbers = '';
    for (let i = 0; i < length; i++) {
      capitalLetters += this.getRandomElementFromGivenSetDefault1(
        this.testData.registration.alphabetLowerCase
      ).toUpperCase();
      symbols += this.getRandomElementFromGivenSetDefault1(
        this.testData.registration.symbolsEmail
      );
      numbers += `${Math.floor(Math.random() * 10)}`;
    }
    const email = `${firstName.toLowerCase()}_${capitalLetters}_${symbols}_${numbers}_${lastName.toLowerCase()}@${emailDomain}.${domain}`;
    return email;
  };

  generateUserDataForRegistration = () => {
    const firstName = this.getRandomElementFromGivenSetDefault1(
      this.testData.registration.firstNames
    );
    const lastName = this.getRandomElementFromGivenSetDefault1(
      this.testData.registration.lastNames
    );
    const symbols = Math.floor(Math.random() * 5) + 1;
    const password = this.generatePassword(3);
    const phoneNumberUS = this.getRandomElementFromGivenSetDefault1(
      this.testData.registration.numbers,
      10
    );
    const companyName = `${firstName}'s company LLC`;
    const industry = this.getRandomElementFromGivenSetDefault1(
      this.testData.registration.industries
    );
    const companySize = this.getRandomBetween(1, 100) % 4;
    const email = this.generateEmailBasedOnFullName1(
      firstName,
      lastName,
      symbols
    );
    return {
      firstName,
      lastName,
      email,
      password,
      phoneNumberUS,
      companyName,
      industry,
      companySize,
    };
  };
}
