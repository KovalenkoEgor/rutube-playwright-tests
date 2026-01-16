import {test} from "@playwright/test";
import {MainPage} from "../../pages/MainPage";

test('Открытие главной страницы', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
});
test('Проверка доступности элементов хэдера', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeAlert();
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категорий', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeAlert();
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeAlert();
    await mainPage.menuTabsHasCorrectAriaSnapshot();
});

