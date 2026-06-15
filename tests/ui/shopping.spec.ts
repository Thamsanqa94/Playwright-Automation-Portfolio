import { test, expect } from './pages/fixtures/index';
import { InventoryPage } from './pages/InventoryPage';

test('add item to cart flow', async ({ loggedInPage }) => {
  await loggedInPage.expectLoaded();
  await loggedInPage.addItemToCart('Sauce Labs Backpack');
  
  const count = await loggedInPage.getCartCount();
  expect(count).toBe(1);
});
