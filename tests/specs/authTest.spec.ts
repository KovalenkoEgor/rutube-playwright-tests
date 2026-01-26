import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('AuthSetup', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rutube.ru');
  await page.getByRole('button', { name: 'Закрыть' }).click();
  await page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон' })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон' })
    .fill(process.env.LOGIN!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill(process.env.PASSWORD!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await page.getByRole('img', { name: 'Иконка канала channel75177887' }).click();
  await page.getByRole('link', { name: 'Иконка канала channel75177887' }).click();

  await page.context().storageState({ path: authFile });
});
