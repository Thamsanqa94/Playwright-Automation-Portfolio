import { expect, type Page, type Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly addToCartButtons: Locator;
  readonly shoppingCartBadge: Locator;
  readonly sortDropdown: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('button[id^="add-to-cart"]');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

async expectLoaded() {
    await expect(this.inventoryItems.first()).toBeVisible();
}

  async addItemToCart(itemName: string) {
    const item = this.page.locator('.inventory_item', {
      has: this.page.locator('.inventory_item_name', { hasText: itemName })
    });
    await item.locator('button[id^="add-to-cart"]').click();
  }

  async getCartCount(): Promise<number> {
    const badge = this.shoppingCartBadge;
    if (await badge.isVisible().catch(() => false)) {
      const text = await badge.textContent();
      return parseInt(text || '0', 10);
    }
    return 0;
  }
}
