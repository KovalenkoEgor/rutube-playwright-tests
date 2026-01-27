import { test, expect } from '../../fixtures/fixture';

test('Проверка лэйаута', async ({ categoriesPage }) => {
  await categoriesPage.contentPageHasCorrectLayout();
});
