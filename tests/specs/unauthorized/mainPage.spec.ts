import {test, expect} from "../../fixtures/fixture";

test('Проверка доступности элементов хэдера', async ({ mainPage }) => {
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категорий', async ({ mainPage }) => {
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
    await mainPage.menuTabsHasCorrectAriaSnapshot();
});
