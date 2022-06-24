import RegistrationPageDefaultPOM from '../../../support/page-objects/before-login-poms/registrationPageDefaultPOM';
const registrationPageDefaultPOM = new RegistrationPageDefaultPOM();

describe('Registration Page - main test suite', () => {
  describe('PRECONDITIONS: load Registration Page', () => {
    it('Load Registration Page', () => {
      cy.visit('/user/register');
    });
  });
  describe('STAGE 1: checking all the main Page elements and their base functionality', () => {
    describe('LOGO', () => {
      it('Checking that span with id="logo" exists on the page', () => {
        registrationPageDefaultPOM.logoSpan();
      });
      it('Checking that span with id="logo" is visible', () => {
        registrationPageDefaultPOM.logoSpan().should('be.visible');
      });
      it('Checking that span with id="logo" has text "Kompot"', () => {
        registrationPageDefaultPOM
          .logoSpan()
          .should('have.text', 'Kompot');
      });
      it('Checking that span with id="logo" is clickable and after click on Logo user is redirected to another page', () => {
        registrationPageDefaultPOM
          .logoSpan()
          .click()
          .location('pathname')
          .should('not.eq', '/user/register')
          .go('back');
      });
      it('Checking that after click on span with id="logo" user is redirected to a Home Page', () => {
        registrationPageDefaultPOM
          .logoSpan()
          .click()
          .location('pathname')
          .should('eq', '/')
          .go('back');
      });
    });
    describe('page HEADER "Start your free 14-day trial with Kompot"', () => {
      it('Checking that header exists on the page', () => {
        cy.contains('h1', 'Start your free 14-day trial with Kompot');
      });
      //TO DO: Check header - registrationPageDefaultPOM.header().should('be.visible) returns error that element is undefined
    });
    describe('EMAIL input field', () => {
      it('Checking that EMAIL input main DIV exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children('div')
          .first()
          .should('be.visible');
      });
      it('Checking that EMAIL main DIV field has a label element', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('label')
          .should('be.visible');
      });
      it('Checking that EMAIL LABEL has attributes for="email" and id="email-label"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('label')
          .should('have.attr', 'for', 'email')
          .should('have.attr', 'id', 'email-label');
      });
      it('Checking that EMAIL LABEL has text "Email" ', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('label')
          .should('have.text', 'Email');
      });
      it('Checking that EMAIL input field has a PLACEHOLDER with text "Email"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('div')
          .should('be.visible')
          .children('fieldset')
          .children('legend')
          .children('span')
          .should('have.text', 'Email');
      });
      it('Checking that EMAIL input field exists', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('div')
          .children('input')
          .should('be.visible');
      });
      it('Checking that user can typing, deleting, and paste from buffer in EMAIL input field', () => {
        const testEmail = 'test@test.test';
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(0)
          .children('div')
          .children('input')
          .type('test')
          .wait(500)
          .should('have.value', 'test')
          .type('{backspace}{backspace}')
          .wait(500)
          .should('have.value', 'te')
          .type('{backspace}{backspace}')
          .wait(500)
          .should('have.value', '')
          .invoke('val', testEmail)
          .wait(500)
          .should('have.value', testEmail);
      });
    });
    describe('PASSWORD input field', () => {
      it('Checking that PASSWORD input main DIV exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children('div')
          .first()
          .should('be.visible');
      });
      it('Checking that PASSWORD main DIV field has a label element', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('label')
          .should('be.visible');
      });
      it('Checking that PASSWORD LABEL has attributes for="password" and id="password-label"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('label')
          .should('have.attr', 'for', 'password')
          .should('have.attr', 'id', 'password-label');
      });
      it('Checking that PASSWORD LABEL has text "Password" ', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('label')
          .should('have.text', 'Password');
      });
      it('Checking that PASSWORD input field has a PLACEHOLDER with text "Password"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('div')
          .should('be.visible')
          .children('fieldset')
          .children('legend')
          .children('span')
          .should('have.text', 'Password');
      });
      it('Checking that PASSWORD input field exists', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('div')
          .children('input')
          .should('be.visible');
      });
      it('Checking that user can typing, deleting, and paste from buffer in PASSWORD input field', () => {
        const testPassword = 'SuperPassword!#$%';
        registrationPageDefaultPOM
          .mainForm()
          .children()
          .eq(1)
          .children('div')
          .children('input')
          .type('test')
          .wait(500)
          .should('have.value', 'test')
          .type('{backspace}{backspace}')
          .wait(500)
          .should('have.value', 'te')
          .type('{backspace}{backspace}')
          .wait(500)
          .should('have.value', '')
          .invoke('val', testPassword)
          .wait(500)
          .should('have.value', testPassword);
      });
    });
    describe('SUBMIT button', () => {
      it('Checking that SUBMIT button exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children('button')
          .should('be.visible');
      });
      it('Checking that SUBMIT button has type="submit" and text "Create your account"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .children('button')
          .should('have.attr', 'type', 'submit')
          .should('have.text', 'Create your account');
      });
    });
    describe('"Log in" link', () => {
      it('Checking that "Log in" element exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .next('div')
          .children('div')
          .first();
      });
      it('Checking that "Log in" element is a link', () => {
        registrationPageDefaultPOM
          .mainForm()
          .next('div')
          .children('div')
          .first()
          .children('a')
          .should('be.visible');
      });
      it('Checking that "Log in" link has href="/user/login" and text "Log in"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .next('div')
          .children('div')
          .first()
          .children('a')
          .should('have.attr', 'href', '/user/login')
          .should('have.text', 'Log in');
      });
      it('Checking that "Log in" link clickable and after click redirects user to Login Page page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .next('div')
          .children('div')
          .first()
          .children('a')
          .click()
          .location('pathname')
          .should('not.eq', '/user/register')
          .should('eq', '/user/login')
          .go('back');
      });
    });
    describe('"Forgot password" link', () => {
      it('Checking that "Forgot password" element exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .next('div')
          .children('div')
          .last();
      });
      it('Checking that "Forgot password" element is a link', () => {
        registrationPageDefaultPOM
          .mainForm()
          .next('div')
          .children('div')
          .last()
          .children('a')
          .should('be.visible');
      });
      it('Checking that "Forgot password" link has href="/user/password/reset/request" and text "Forgot password"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .next('div')
          .children('div')
          .last()
          .children('a')
          .should('have.attr', 'href', '/user/password/reset/request')
          .should('have.text', 'Forgot password');
      });
      it('Checking that "Forgot password" link clickable and after click redirects user to Reset Password page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .next('div')
          .children('div')
          .last()
          .children('a')
          .click()
          .location('pathname')
          .should('not.eq', '/user/register')
          .should('eq', '/user/password/reset/request')
          .go('back');
      });
    });
    describe('"OR" separator', () => {
      it('Checking that "OR" separator exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('div')
          .eq(1)
          .should('be.visible');
      });
      it('Checking that "OR" separator the role="separator"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('div')
          .eq(1)
          .should('have.attr', 'role', 'separator');
      });
      it('Checking that "OR" separator has text "OR"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('div')
          .eq(1)
          .should('have.text', 'OR');
      });
    });
    describe('GOOGLE button', () => {
      it('Checking that GOOGLE button exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('button')
          .eq(0)
          .should('be.visible');
      });
      it('Checking that GOOGLE button has an image', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('button')
          .eq(0)
          .children('span')
          .first()
          .children('img')
          .should('be.visible');
      });
      it('Checking that GOOGLE button has text "Continue with Google"', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('button')
          .eq(0)
          .children('span')
          .eq(1)
          .should('be.visible')
          .should('have.text', 'Continue with Google');
      });
    });
    describe('Terms block', () => {
      it('Checking that Terms block exists on the page', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('h6')
          .should('be.visible');
      });
      it('Checking that Terms block has a coorect text', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('h6')
          .should(
            'have.text',
            'By submitting this form you agree to our Privacy Policy, Cookie Policy,Terms and Agreements, and that we may share your personal information with our partners to verify your account.'
          );
      });
      it('Checking that Terms block has a link to a modal with terms', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('h6')
          .children('a')
          .should('have.attr', 'data-qa', 'termsBtn')
          .should('have.attr', 'href', '/user/register');
      });
      it('Checking that a click on a link opens a modal', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('h6')
          .children('a')
          .click();
        registrationPageDefaultPOM.modalCloseButton().click();
      });
    });
    describe('Modal TERMS', () => {
      it('Open the modal', () => {
        registrationPageDefaultPOM
          .mainForm()
          .siblings('h6')
          .children('a')
          .click();
      });
      it('Checking that modal has a title "Terms and agreements"', () => {
        registrationPageDefaultPOM
          .modalMainDiv()
          .next()
          .children('div')
          .first()
          .children('div')
          .first()
          .children('div')
          .first()
          .should('be.visible')
          .should('have.text', 'Terms and agreements');
      });
      it('Checking that modal has a a header "Terms of Service"', () => {
        registrationPageDefaultPOM
          .modalMainDiv()
          .next()
          .children('div')
          .last()
          .children('h1')
          .should('be.visible')
          .should('have.text', 'Terms of Service');
      });
      it('Checking 1st paragraph', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('p')
          .eq(0)
          .should('be.visible')
          .should(
            'have.text',
            'Welcome to Kompot, the website and mobile service of Kompot, LLC. (“Kompot,” “we,” or “us”). This page explains the terms by which you may use our online and/or mobile services, website, and software provided on or in connection with the service (collectively the “Service”). By accessing or using the Service, you signify that you have read, understood, and agree to be bound by this Terms of Service Agreement (“Agreement”) and to the collection and use of your information as set forth in the Kompot Privacy Policy, whether or not you are a registered user of our Service. This Agreement applies to all visitors, users, and others who access the Service (“Users”).'
          );
      });
      it('Checking 2nd paragraph', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('p')
          .eq(1)
          .should('be.visible')
          .should(
            'have.text',
            'PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION. THIS AGREEMENT CONTAINS A MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS.'
          );
      });
      it('Checking name of chapter #1', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('h2')
          .eq(0)
          .should('have.text', '1. Use of Our Service');
      });
      it('Checking that chapter #1 has 4 sections', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('ol')
          .eq(0)
          .children()
          .should('have.length', 4);
      });
      it('Checking that chapter #1 section #1', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('ol')
          .eq(0)
          .children()
          .eq(0)
          .children('strong')
          .should('be.visible')
          .should('have.text', 'Eligibility')
          .next('p')
          .should(
            'have.text',
            'This is a contract between you and Kompot. You must read and agree to these terms before using the Kompot Service. If you do not agree, you may not use the Service. If you are a child under 13 years of age, we may need your parent or guardian’s consent before allowing you to use the Service. Supplemental terms and conditions may apply to some Services, such as rules for a particular competition, promotion, service or other activity, or terms that may accompany certain content accessible through the Services. Supplemental terms and conditions will be disclosed to you in connection with such competition, service or activity. Any supplemental terms and conditions are in addition to these terms and, in the event of a conflict, prevail over these terms. The Service is not available to any Users previously removed from the Service by Kompot.'
          );
      });
      it('Checking that chapter #1 section #2', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('ol')
          .eq(0)
          .children()
          .eq(1)
          .children('strong')
          .should('have.text', 'Kompot Service')
          .next('p')
          .should(
            'have.text',
            'Subject to the terms and conditions of this Agreement, you are hereby granted a non-exclusive, limited, non-transferable, freely revocable license to use the Service for your personal, noncommercial use only and as permitted by the features of the Service. Kompot reserves all rights not expressly granted herein in the Service and the Kompot Content (as defined below). Kompot may terminate this license at any time for any reason or no reason.'
          );
      });
      it('Checking that chapter #1 section #3', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('ol')
          .eq(0)
          .children()
          .eq(2)
          .children('strong')
          .should('have.text', 'Kompot Accounts')
          .next('p')
          .should(
            'have.text',
            'Your Kompot account gives you access to the services and functionality that we may establish and maintain from time to time and at our sole discretion. By connecting to Kompot with a third-party service (for example, Facebook or Google), you give us permission to access and use your information from that service as permitted by that service, and to store your log-in credentials for that service.'
          )
          .next('p')
          .should(
            'have.text',
            'You may never use another User’s account without permission. When creating your account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. We encourage you to use “strong” passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) with your account. You must notify Kompot immediately of any breach of security or unauthorized use of your account. Kompot will not be liable for any losses caused by any unauthorized use of your account.'
          )
          .next('p')
          .should(
            'have.text',
            'You may control your User profile and how you interact with the Service by changing the settings in your “account settings” page. By providing Kompot your email address you consent to our using the email address to send you Service-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address to send you other messages, such as changes to features of the Service and special offers. If you do not want to receive such email messages, you may opt out by clicking on the Unsubscribe link at the bottom of any of our email messages. Opting out may prevent you from receiving email messages regarding updates, improvements, or offers.'
          );
      });
      it('Checking that chapter #1 section #4 "Service Rules"', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('ol')
          .eq(0)
          .children()
          .eq(3)
          .children('strong')
          .should('have.text', 'Service Rules')
          .next('p')
          .should(
            'have.text',
            'You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of the Service in any medium, including without limitation by any automated or non-automated “scraping”; (ii) using any automated system, including without limitation “robots,” “spiders,” “offline readers,” etc., to access the Service in a manner that sends more request messages to the Kompot ERP servers than a human can reasonably produce in the same period of time by using a conventional on-line web browser (except that Kompot grants the operators of public search engines revocable permission to use spiders to copy materials from Kompot for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials); (iii) transmitting spam, chain letters, or other unsolicited email; (iv) attempting to interfere with, compromise the system integrity or security or decipher any transmissions to or from the servers running the Service; (v) taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure; (vi) uploading invalid data, viruses, worms, or other software agents through the Service; (vii) collecting or harvesting any personally identifiable information, including account names, from the Service; (viii) using the Service for any commercial solicitation purposes; (ix) impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity; (x) interfering with the proper working of the Service; (xi) accessing any content on the Service through any technology or means other than those provided or authorized by the Service; or (xii) bypassing the measures we may use to prevent or restrict access to the Service, including without limitation features that prevent or restrict use or copying of any content or enforce limitations on use of the Service or the content therein.'
          )
          .next('p')
          .should(
            'have.text',
            'We may, without prior notice, change the Service; stop providing the Service or features of the Service, to you or to users generally; or create usage limits for the Service. We may permanently or temporarily terminate or suspend your access to the Service without notice and liability for any reason, including if in our sole determination you violate any provision of this Agreement, or for no reason. Upon termination for any reason or no reason, you continue to be bound by this Agreement.'
          )
          .next('p')
          .should(
            'have.text',
            'You are solely responsible for your interactions with other Kompot Users. We reserve the right, but have no obligation, to monitor disputes between you and other Users. Kompot shall have no liability for your interactions with other Users, or for any User’s action or inaction.'
          );
      });
      it('Checking name of chapter #2 "2. User Content"', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('h2')
          .eq(1)
          .should('have.text', '2. User Content');
      });
      it('Checking that chapter #2 has 4 paragraphs', () => {
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('h2')
          .eq(1)
          .next('p')
          .should(
            'have.text',
            'Some areas of the Service allow Users to post content such as profile information, comments, questions, course content and other content or information (any such materials a User submits, posts, displays, or otherwise makes available on the Service “User Content”). Access to these features may be subject to age restrictions. We claim no ownership rights over User Content created by you. The User Content you create remains yours; however, by sharing User Content through the Service, you agree to allow others to view, edit, and/or share your User Content in accordance with your settings and this Agreement. Kompot has the right (but not the obligation) in its sole discretion to remove any User Content that is shared via the Service.'
          );
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('h2')
          .eq(1)
          .next('p')
          .next('p')
          .should(
            'have.text',
            'You agree not to post User Content that: (i) may create a risk of harm, loss, physical or mental injury, emotional distress, death, disability, disfigurement, or physical or mental illness to you, to any other person, or to any animal; (ii) may create a risk of any other loss or damage to any person or property; (iii) seeks to harm or exploit children by exposing them to inappropriate content, asking for personally identifiable details or otherwise; (iv) may constitute or contribute to a crime or tort; (v) contains any information or content that we deem to be unlawful, harmful, abusive, racially or ethnically offensive, defamatory, infringing, invasive of personal privacy or publicity rights, harassing, humiliating to other people (publicly or otherwise), libelous, threatening, profane, or otherwise objectionable; (vi) contains any information or content that is illegal (including, without limitation, the disclosure of insider information under securities law or of another party’s trade secrets); (vii) contains any information or content that you do not have a right to make available under any law or under contractual or fiduciary relationships; or (viii) contains any information or content that you know is not correct and current or (ix) violates any school or other applicable policy, including those related to cheating or ethics. You agree that any User Content that you post does not and will not violate third-party rights of any kind, including without limitation any Intellectual Property Rights (as defined below) or rights of privacy. Kompot reserves the right, but is not obligated, to reject and/or remove any User Content that Kompot believes, in its sole discretion, violates these provisions. You understand that publishing your User Content on the Service is not a substitute for registering it with the U.S. Copyright Office, the Writer’s Guild of America, or any other rights organization.'
          );
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('h2')
          .eq(1)
          .next('p')
          .next('p')
          .next('p')
          .should(
            'have.text',
            'For the purposes of this Agreement, “Intellectual Property Rights” means all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals and extensions thereof, under the laws of any state, country, territory or other jurisdiction.'
          );
        registrationPageDefaultPOM
          .modalBlockWithData()
          .children('h2')
          .eq(1)
          .next('p')
          .next('p')
          .next('p')
          .next('p')
          .should(
            'have.text',
            'In connection with your User Content, you affirm, represent and warrant the following:Your User Content and Kompot’s use thereof as contemplated by this Agreement and the Service will not violate any law or infringe any rights of any third party, including but not limited to any Intellectual Property Rights and privacy rights.Kompot may exercise the rights to your User Content granted under this Agreement without liability for payment of any guild fees, residuals, payments, fees, or royalties payable under any collective bargaining agreement or otherwise.To the best of your knowledge, all your User Content you provide to us is truthful and accurate. You have the written consent of each and every identifiable natural person in the User Content, if any, to use such person’s name or likeness in the manner contemplated by the Service and this Agreement, and each such person has released you from any liability that may arise in relation to such use. Kompot takes no responsibility and assumes no liability for any User Content that you or any other User or third party posts or sends over the Service. You shall be solely responsible for your User Content and the consequences of posting or publishing it, and you agree that we are only acting as a passive conduit for your online distribution and publication of your User Content. You understand and agree that you may be exposed to User Content that is inaccurate, objectionable, inappropriate for children, or otherwise unsuited to your purpose, and you agree that Kompot shall not be liable for any damages you allege to incur as a result of User Content.'
          );
        registrationPageDefaultPOM.modalCloseButton().click();
      });
    });
  });
});
