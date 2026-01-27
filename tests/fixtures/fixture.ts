import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CategoriesPage } from '../pages/CategoriesPage';

type MyFixtures = {
  mainPage: MainPage;
  categoriesPage: CategoriesPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    // await mainPage.closeAlert();
    await use(mainPage);
  },
  categoriesPage: async ({ page }, use) => {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.open();
    await categoriesPage.closeAlert();
    await categoriesPage.closeCookieandGeo();
    await categoriesPage.hideHeader();
    await use(categoriesPage);
  },
});
export { expect } from '@playwright/test';
