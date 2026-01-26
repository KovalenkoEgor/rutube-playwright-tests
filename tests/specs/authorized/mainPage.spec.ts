import { test, expect } from '../../fixtures/fixture';

test('Проверка доступности элементов хэдера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попап уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationPopUp();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.closePopalert();
  await mainPage.closePushAlert();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
