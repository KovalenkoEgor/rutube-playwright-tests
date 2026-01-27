import { BasePage } from './BasePage';
import { expect, Locator, Page } from '@playwright/test';

export class CategoriesPage extends BasePage {
  private readonly contentPageLocator: Locator;
  private readonly closeButtonAlertLocator: Locator;
  private readonly closeGeoButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.locator('.application-module__content');
    this.closeButtonAlertLocator = this.page.getByRole('button', { name: 'Закрыть' });
    this.closeGeoButtonLocator = this.page.getByRole('button', { name: 'Ок' });
  }

  async open() {
    this.page.goto('https://rutube.ru/categories/', { waitUntil: 'domcontentloaded' });
  }

  async closeAlert() {
    await this.closeButtonAlertLocator.click();
  }

  async closeCookieandGeo() {
    await this.closeGeoButtonLocator.click();
  }

  async contentPageHasCorrectLayout() {
    await this.checkLayotByScreenshot(this.contentPageLocator, 'categoriesPage.png');
  }

  async hideHeader() {
    await this.hideElement('header');
  }
}
