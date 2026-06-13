# Playwright Automation Portfolio - AI Agent Guide

## Quick Start

**Run tests:**
```bash
npx playwright test
# Run specific test: npx playwright test tests/ui/login.spec.ts
# Run in UI mode: npx playwright test --ui
# View HTML report: npx playwright show-report
```

**Key dependencies:**
- `@playwright/test` v1.60+
- TypeScript with strict mode
- `.env` for configuration (BASE_URL, API_BASE_URL)

## Architecture

### Page Object Model (POM) Pattern
This project uses the Page Object Model pattern to separate test logic from page interactions:

- **Page classes**: `tests/ui/pages/LoginPage.ts` - Encapsulate page elements (locators) and interactions
- **Test files**: `tests/ui/login.spec.ts` - Use page objects, focus on test logic and assertions

**When adding tests:**
1. Create page object class in `tests/ui/pages/` if testing a new page
2. Define locators as class properties using descriptive names
3. Create async methods for user interactions (e.g., `login()`, `navigate()`)
4. Create assertion/verification methods (e.g., `expectError()`)
5. Use page objects in test files

### Project Structure
```
tests/
  ui/
    pages/        # Page Object classes (LoginPage.ts pattern)
    login.spec.ts # Test files (name.spec.ts pattern)
  api/            # API tests (if adding)
playwright.config.ts  # Multi-browser, multi-device config
```

## Testing Conventions

### Locator Strategy Priority
Use this order for selecting elements:
1. **ID** (`page.locator('#id')`) - Most reliable
2. **data-test attribute** (`page.locator('[data-test="key"]')`) - Best practice
3. **getByRole()** (`page.getByRole('button', { name: 'Text' })`) - Accessibility-first
4. **getByLabel/Placeholder** - For form inputs
5. Avoid: CSS/XPath unless unavoidable

### File Naming
- Test files: `*.spec.ts` (Playwright convention)
- Page objects: `PascalCase.ts` (e.g., `LoginPage.ts`, `ProductPage.ts`)
- Classes: `PascalCase` (e.g., `export class LoginPage`)

### Browser & Device Testing
Project configured for:
- **Browsers**: chromium, firefox, mobile-chrome (Pixel 5)
- **API tests**: Separate project config pointing to `https://reqres.in`
- **CI mode**: Uses 2 workers and 2 retries; local uses 0 retries

Specify browser when needed:
```bash
npx playwright test --project=chromium
npx playwright test --project=mobile-chrome
```

## Common Patterns

### Writing a Page Object
```typescript
export class LoginPage {
  private page: Page;
  readonly usernameInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.loginButton = page.locator('#login-button');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.loginButton.click();
  }
}
```

### Writing Tests with Page Objects
```typescript
test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('user', 'password');
  await expect(page).toHaveURL(/inventory/);
});
```

## Key Configuration Details

- **Base URL**: `https://www.saucedemo.com` (set via `BASE_URL` env var)
- **Timeout**: 30 seconds per test
- **Screenshots**: Only on failure
- **Videos**: Retained on failure
- **Traces**: Collected on first retry for debugging
- **Reporters**: HTML (default), JUnit XML for CI

## Debugging

```bash
# Debug mode (interactive debugger)
npx playwright test --debug

# Show report
npx playwright show-report

# Run with headed browser
npx playwright test --headed
```

## TypeScript Configuration
- Strict mode enabled
- ESM modules (`"type": "module"` in package.json)
- Node.js module resolution
