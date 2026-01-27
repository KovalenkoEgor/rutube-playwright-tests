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

  protected async checkLayotByScreenshot(locator: Locator, screenShotName: string) {
    await expect(locator).toHaveScreenshot(screenShotName);
  }

  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const header = document.querySelector(selector);
      if (header) {
        (header as HTMLElement).style.display = 'none';
      }
    }, selector);
  }

  async closeCookieandGeo() {
    await this.page.getByRole('button', { name: 'Ок' }).click();
  }

  async closeAlert() {
    await this.page.getByRole('button', { name: 'Закрыть' }).click();
  }
}
