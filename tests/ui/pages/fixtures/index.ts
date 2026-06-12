import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../LoginPage.js';
import { InventoryPage } from '../InventoryPage.js';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  loggedInPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use: (loginPage: LoginPage) => Promise<void>) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await use(loginPage);
  },

  inventoryPage: async ({ page }, use: (inventoryPage: InventoryPage) => Promise<void>) => {
    await use(new InventoryPage(page));
  },

  loggedInPage: async ({ page }, use: (loggedInPage: InventoryPage) => Promise<void>) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
      process.env.TEST_USERNAME || 'standard_user',
      process.env.TEST_PASSWORD || 'secret_sauce'
    );
    await use(new InventoryPage(page));
  },
});

export { expect };