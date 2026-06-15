import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

const invalidLoginData = [
  { username: '', password: '', error: 'Username is required' },
  { username: 'standard_user', password: '', error: 'Password is required' },
  { username: 'locked_out_user', password: 'secret_sauce', error: 'Sorry, this user has been locked out' },
  { username: 'invalid', password: 'invalid', error: 'Username and password do not match' },
];

for (const { username, password, error } of invalidLoginData) {
  test(`login fails: "${username}" → "${error}"`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(username, password);
    await loginPage.expectError(error);
  });
}