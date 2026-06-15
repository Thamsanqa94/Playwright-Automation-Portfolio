# Playwright-Automation-Portfolio

A test automation portfolio built with Playwright, TypeScript, and the Page Object Model pattern.

## Project Setup

bash
npm install
npx playwright install
npx playwright test
Current Status
✅ Completed
[x] Page Object Model structure (LoginPage, InventoryPage)
[x] Data-driven login tests (4 scenarios)
[x] Authenticated fixture for inventory tests
[x] Cross-browser testing (Chromium, Firefox, WebKit)
[x] HTML test reports
🚧 In Progress
[ ] Shopping cart flow (add/remove items)
[ ] API automation with Axios
[ ] CI/CD with GitHub Actions
[ ] Visual regression testing
Project Structure

tests/
├── ui/
│   ├── login.spec.ts              # Basic login tests
│   ├── login-data-driven.spec.ts  # Parameterized login tests
│   ├── shopping.spec.ts           # Cart flow tests
│   └── pages/
│       ├── LoginPage.ts           # Page object
│       ├── InventoryPage.ts       # Page object
│       └── fixtures/
│           └── index.ts           # Authenticated fixture
Tech Stack
Playwright
TypeScript
Page Object Model
Sauce Demo (test site)
Author
Thami Maseko — QA Automation Engineer


| Milestone | README Update |
|-----------|---------------|
| Shopping cart tests pass | Move to ✅, add screenshot/gif |
| API tests added | New section, code example |
| CI/CD running | Badge, pipeline diagram |
| Visual regression | Comparison screenshots |
| "Portfolio complete" | Final polish, LinkedIn post |


powershell
Set-Content -Path "README.md" -Value @"
# Playwright Automation Portfolio

A test automation portfolio built with Playwright, TypeScript, and the Page Object Model pattern.

## Project Setup

bash
npm install
npx playwright install
npx playwright test
Current Status
✅ Completed
[x] Page Object Model structure (LoginPage, InventoryPage)
[x] Data-driven login tests (4 scenarios)
[x] Authenticated fixture for inventory tests
[x] Cross-browser testing (Chromium, Firefox, WebKit)
[x] HTML test reports
🚧 In Progress
[ ] Shopping cart flow (add/remove items)
[ ] API automation with Axios
[ ] CI/CD with GitHub Actions
[ ] Visual regression testing
Project Structure
plain
tests/
├── ui/
│   ├── login.spec.ts              # Basic login tests
│   ├── login-data-driven.spec.ts  # Parameterized login tests
│   ├── shopping.spec.ts           # Cart flow tests
│   └── pages/
│       ├── LoginPage.ts           # Page object
│       ├── InventoryPage.ts       # Page object
│       └── fixtures/
│           └── index.ts           # Authenticated fixture
Tech Stack
Playwright
TypeScript
Page Object Model
Sauce Demo (test site)
Author
Thami Maseko — QA Automation Engineer

