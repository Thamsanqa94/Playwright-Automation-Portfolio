import { test as base, expect } from '@playwright/test';
import { InventoryPage } from '../InventoryPage';

type MyFixtures = {
  loggedInPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    // Login first
    await page.goto('/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await page.waitForURL('**/inventory.html');
    
    // Now inventory page is loaded
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.expectLoaded();
    await use(inventoryPage);
  },
});

export { expect };