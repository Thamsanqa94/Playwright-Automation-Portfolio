# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\shopping.spec.ts >> add item to cart flow
- Location: tests\ui\shopping.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-test="product_sort_container"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-test="product_sort_container"]')

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs Products Name (A to Z)
- combobox:
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- link "Sauce Labs Backpack":
  - /url: "#"
  - img "Sauce Labs Backpack"
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- link "Sauce Labs Bike Light":
  - /url: "#"
  - img "Sauce Labs Bike Light"
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
  - img "Sauce Labs Bolt T-Shirt"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "Add to cart"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
  - img "Sauce Labs Fleece Jacket"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Add to cart"
- link "Sauce Labs Onesie":
  - /url: "#"
  - img "Sauce Labs Onesie"
- link "Sauce Labs Onesie":
  - /url: "#"
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "Add to cart"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
  - img "Test.allTheThings() T-Shirt (Red)"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { expect, type Page, type Locator } from '@playwright/test';
  2  | 
  3  | export class InventoryPage {
  4  |   readonly page: Page;
  5  |   readonly inventoryItems: Locator;
  6  |   readonly addToCartButtons: Locator;
  7  |   readonly shoppingCartBadge: Locator;
  8  |   readonly sortDropdown: Locator;
  9  |   readonly cartLink: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.inventoryItems = page.locator('.inventory_item');
  14 |     this.addToCartButtons = page.locator('button[id^="add-to-cart"]');
  15 |     this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  16 |     this.sortDropdown = page.locator('[data-test="product_sort_container"]');
  17 |     this.cartLink = page.locator('.shopping_cart_link');
  18 |   }
  19 | 
  20 |   async goto() {
  21 |     await this.page.goto('/inventory.html');
  22 |   }
  23 | 
  24 |   async expectLoaded() {
  25 |     await expect(this.inventoryItems.first()).toBeVisible();
> 26 |     await expect(this.sortDropdown).toBeVisible();
     |                                     ^ Error: expect(locator).toBeVisible() failed
  27 |   }
  28 | 
  29 |   async addItemToCart(itemName: string) {
  30 |     const item = this.page.locator('.inventory_item', {
  31 |       has: this.page.locator('.inventory_item_name', { hasText: itemName })
  32 |     });
  33 |     await item.locator('button[id^="add-to-cart"]').click();
  34 |   }
  35 | 
  36 |   async getCartCount(): Promise<number> {
  37 |     const badge = this.shoppingCartBadge;
  38 |     if (await badge.isVisible().catch(() => false)) {
  39 |       const text = await badge.textContent();
  40 |       return parseInt(text || '0', 10);
  41 |     }
  42 |     return 0;
  43 |   }
  44 | }
```