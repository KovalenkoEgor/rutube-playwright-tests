import { test, expect } from '../../fixtures/fixture';

test('Проверка доступности элементов хэдера неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категорий неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добавления контента неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попап уведомлений неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopUp();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.closePopalert();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Переключение темы', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('light');
});
