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

test('Проверка доступности элементов списка добавления контактов', async ({ mainPage }) => {
    await mainPage.openAddPopupList();
    await mainPage.addPopupListHasCorrectAriaSnapshot()
});

test('Проверка доступности элементов попап уведомлений', async ({ mainPage }) => {
    await mainPage.openNotificationPopUp();
    await mainPage.notificationPopupHasCorrectAriaSnapshot()
});

test('Проверка доступности элементов модального окна авторизации', async ({ mainPage }) => {
    await mainPage.openAuthorizationModal();
    await mainPage.authorizationModalHasCorrectAriaSnapshot()
});
