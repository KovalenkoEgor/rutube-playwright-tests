import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    await this.page.goto('https://rutube.ru/', {
      waitUntil: 'domcontentloaded',
    });
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }
}

// async closeAlert() {
//     await this.page.getByRole('button', { name: 'Закрыть' }).click()
// }
