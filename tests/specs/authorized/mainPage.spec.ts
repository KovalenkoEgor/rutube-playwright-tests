import { test, expect } from '../../fixtures/fixture';

test('Проверка доступности элементов хэдера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попап уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopUp();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.closePopalert();
  await mainPage.closePushAlert();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню авторизованного пользователя, в хэдере', async ({
  mainPage,
}) => {
  await mainPage.closePopalert();
  await mainPage.openHeaderUserMenu();
  await mainPage.headerUserMenuHasCorrectAriaSnapshot();
});
