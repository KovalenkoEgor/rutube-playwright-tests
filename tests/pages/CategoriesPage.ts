import { BasePage } from './BasePage';
import { expect, Locator, Page } from '@playwright/test';

export class CategoriesPage extends BasePage {
  private readonly contentPageLocator: Locator;
  private readonly closeButtonAlertLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.locator('.application-module__content');
    this.closeButtonAlertLocator = this.page.getByRole('button', { name: 'Закрыть' });
  }

  async open() {
    await this.page.goto('https://rutube.ru/categories/', { waitUntil: 'load' });
  }

  async closeAlert() {
    await this.closeButtonAlertLocator.click();
  }
  async contentPageHasCorrectLayout() {
    await this.checkLayotByScreenshot(this.contentPageLocator, 'categoriesPage.png');
  }

  async hideHeader() {
    await this.hideElement('header');
  }
}
