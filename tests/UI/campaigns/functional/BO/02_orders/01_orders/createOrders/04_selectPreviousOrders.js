require('module-alias/register');

const {expect} = require('chai');

// Import utils
const helper = require('@utils/helpers');
const testContext = require('@utils/testContext');

// Import BO pages
const dashboardPage = require('@pages/BO/dashboard');
const ordersPage = require('@pages/BO/orders');
const addOrderPage = require('@pages/BO/orders/add');

// Import login steps
const loginCommon = require('@commonTests/loginBO');

// Import data
// Customer
const {DefaultCustomer} = require('@data/demo/customer');

const baseContext = 'functional_BO_orders_orders_createOrders_selectPreviousOrders';

let browserContext;
let page;

/*

 */
describe('BO - Orders - Create order : Select previous order', async () => {
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);
    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });

  it('should login in BO', async function () {
    await loginCommon.loginBO(this, page);
  });

  it('should go to \'Orders > Orders\' page', async function () {
    await testContext.addContextItem(this, 'testIdentifier', 'goToOrdersPage', baseContext);

    await dashboardPage.goToSubMenu(
      page,
      dashboardPage.ordersParentLink,
      dashboardPage.ordersLink,
    );

    await ordersPage.closeSfToolBar(page);

    const pageTitle = await ordersPage.getPageTitle(page);
    await expect(pageTitle).to.contains(ordersPage.pageTitle);
  });

  it('should go to create order page', async function () {
    await testContext.addContextItem(this, 'testIdentifier', 'goToCreateOrderPage', baseContext);

    await ordersPage.goToCreateOrderPage(page);
    const pageTitle = await addOrderPage.getPageTitle(page);
    await expect(pageTitle).to.contains(addOrderPage.pageTitle);
  });

  it(`should choose customer ${DefaultCustomer.firstName} ${DefaultCustomer.lastName}`, async function () {
    await testContext.addContextItem(this, 'testIdentifier', 'chooseDefaultCustomer', baseContext);

    await addOrderPage.searchCustomer(page, DefaultCustomer.email);

    const isCartsTableVisible = await addOrderPage.chooseCustomer(page);
    await expect(isCartsTableVisible).to.be.true;
  });

  it('should click on \'Details\' button from customer card', async function () {
    await testContext.addContextItem(this, 'testIdentifier', 'clickOnDetailButton', baseContext);

    const isIframeVisible = await addOrderPage.clickOnDetailsButton(page);
    await expect(isIframeVisible).to.be.true;
  });

  it('should check the existence of personal information block in the iframe', async function () {
    await testContext.addContextItem(this, 'testIdentifier', 'checkIframeContent', baseContext);

    const cardHeaderText = await addOrderPage.getPersonalInformationTitle(page, DefaultCustomer.id);

    await expect(cardHeaderText).to.contains(DefaultCustomer.firstName);
    await expect(cardHeaderText).to.contains(DefaultCustomer.lastName);
    await expect(cardHeaderText).to.contains(DefaultCustomer.email);
  });
});
