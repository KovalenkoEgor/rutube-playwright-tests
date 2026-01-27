import test from 'playwright/test';
import { ForCreaterPage } from '../../pages/ForCreatorsPage';

ForCreaterPage.testParams.forEach(({ url, screenshotName, name }) => {
  test(`Проверка лэйаута таба - ${name}`, async ({ page }) => {
    const forCreatorsPage = new ForCreaterPage(page);
    await forCreatorsPage.openPage(url);
    await forCreatorsPage.pageHasCorrcetLayout(screenshotName);
  });
});
