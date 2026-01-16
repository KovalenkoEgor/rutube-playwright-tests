import { test as base } from '@playwright/test';
import {MainPage} from "../pages/MainPage";

type MyFixtures = {
    mainPage: MainPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.open();
        await mainPage.closeAlert();
        await use(mainPage);
    },
});
export { expect } from '@playwright/test';
