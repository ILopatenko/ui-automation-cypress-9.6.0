import TopNavBarHelper from '../../support/page-objects/common-modules/topNavBarHelper';
const topMenu = new TopNavBarHelper();

describe('Home Page (after login) Main Test Suite (main elements and content)', () => {
  topMenu.checkTopMenu('/');
  describe('PAGE CONTENT CHECKINGs', () => {
    it('TC', () => {
      expect(true).to.eq(true);
    });
  });
});
