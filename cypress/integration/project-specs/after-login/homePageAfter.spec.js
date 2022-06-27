import HomePageAfterPOM from '../../../support/page-objects/after-login/homePageAfterPOM';
import TopNavBarHelper from '../../../support/page-objects/common-modules/topNavBarHelper';
const topMenu = new TopNavBarHelper();
const homePageAfterPOM = new HomePageAfterPOM();

describe('Home Page main elements - main test suite', () => {
  topMenu.checkTopMenu('/');
});
