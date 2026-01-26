import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginLocator: Locator;
  private readonly headerAddButtonPopUpListLocator: Locator;
  private readonly headerNotificationsPopUpLocator: Locator;
  private readonly authorizationModalLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly popupAletLocator: Locator;
  private readonly pushAlertLocator;
  Locator: any;
  private readonly changeThemeButtonLocator: Locator;
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabsLocator = this.page.locator('section').filter({
      hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopUpListLocator = this.page.locator(
      '.wdp-header-right-module__wrapper ul',
    );
    this.headerNotificationsPopUpLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.authorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.popupAletLocator = this.page.getByRole('button', { name: 'Ок', exact: true });
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.pushAlertLocator = this.page.getByRole('button', { name: 'Не надо' });
    this.userLogoLocator = this.page.getByRole('img', { name: 'Иконка канала channel75177887' }); //wdp-header-user-module__menu
    this.headerUserMenuLocator = this.page.getByText(
      'channel75177887+7 *** ***-77-70ПрофильМой каналСтудия RUTUBEВыйти',
    );
  }

  // Actions
  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }

  async openHeaderUserMenu() {
    await this.userLogoLocator.click();
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async closePopalert() {
    await this.popupAletLocator.click();
  }

  async closePushAlert() {
    await this.pushAlertLocator.click();
  }

  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }

  async openNotificationPopUp() {
    await this.headerNotificationsButtonLocator.click();
  }

  async openAuthorizationModal() {
    await this.headerLoginLocator.click();
  }

  // Assertions
  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapshot.yml');
    // await expect(this.headerLocator).toMatchAriaSnapshot({
    //   name: 'headerAriaSnapshot.yml',
    // });
  }

  async categoriesTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.categoriesTabsLocator, 'categoriesTabsAriaSnapshot.yml');
    // await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({
    //   name: 'categoriesTabsAriaSnapshot.yml',
    // });
  }

  async menuTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuSnapshot.yml');
    // await expect(this.menuLocator).toMatchAriaSnapshot({
    //   name: 'menuSnapshot.yml',
    // });
  }

  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonPopUpListLocator, 'AddButtonPopUpList.yml');
    // await expect(this.headerAddButtonPopUpListLocator).toMatchAriaSnapshot({
    //   name: 'AddButtonPopUpList.yml',
    // });
  }

  async notificationPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationsPopUpLocator, 'notificationsPopUp.yml');
    // await expect(this.headerNotificationsPopUpLocator).toMatchAriaSnapshot({
    //   name: 'notificationsPopUp.yml',
    // });
  }

  async authorizationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.authorizationModalLocator, 'authorizationModal.yml');
    // await expect(this.authorizationModalLocator).toMatchAriaSnapshot({
    //   name: 'authorizationModal.yml',
    // });
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuSnapshot.yml');
    // await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
    //   name: 'fullMenuSnapshot.yml',
    // });
  }

  async checkThemeAttributeValue(value: 'dark' | 'light') {
    await expect(this.page.locator('html')).toHaveAttribute('data-themeid', value);
  }

  async headerUserMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuSnapshot.yml');
    // await expect(this.headerUserMenuLocator).toMatchAriaSnapshot({
    //   name: 'headerUserMenuSnapshot.yml',
    // });
  }
}
