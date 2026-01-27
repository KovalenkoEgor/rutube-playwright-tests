import { Locator, Page } from 'playwright';
import { BasePage } from './BasePage';
import { expect } from 'playwright/test';

export class SubscriptionPage extends BasePage {
  private readonly contentPageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.locator('.application-module__content');
  }

  // Assertions
  async contentHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.contentPageLocator, 'contentAriaSnapshot.yml');
  }

  async open() {
    await this.page.goto('https://rutube.ru/my/subscriptions/', { waitUntil: 'domcontentloaded' });
  }
}
