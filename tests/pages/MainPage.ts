import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

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

    constructor(page: Page) {
        super(page);
        this.headerLocator = this.page.getByRole('banner');
        this.categoriesTabsLocator = this.page
            .locator('section')
            .filter({
            hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/
            });
        this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
        this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
        this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
        this.headerLoginLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
        this.headerAddButtonPopUpListLocator = this.page.locator('.wdp-header-right-module__wrapper ul');
        this.headerNotificationsPopUpLocator = this.page.locator('.wdp-notifications-popup-module__wrapper');
        this.authorizationModalLocator = this.page
            .locator('iframe[title="Multipass"]')
            .contentFrame()
            .locator('div[role="form"]');



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

    async headerHasCorrectAriaSnapshot() {
        await expect(this.headerLocator)
            .toMatchAriaSnapshot({ name: 'headerAriaSnapshot.yml' });
    }

    async categoriesTabsHasCorrectAriaSnapshot() {
        await expect(this.categoriesTabsLocator)
            .toMatchAriaSnapshot({ name: 'categoriesTabsAriaSnapshot.yml' });
    }

    async menuTabsHasCorrectAriaSnapshot() {
        await expect(this.menuLocator)
            .toMatchAriaSnapshot({ name: 'menuSnapshot.yml' });
    }

    async addPopupListHasCorrectAriaSnapshot() {
        await expect(this.headerAddButtonPopUpListLocator)
            .toMatchAriaSnapshot({ name: 'AddButtonPopUpList.yml' })
    }

    async notificationPopupHasCorrectAriaSnapshot() {
        await expect(this.headerNotificationsPopUpLocator)
            .toMatchAriaSnapshot({ name: 'notificationsPopUp.yml' })
    }

    async authorizationModalHasCorrectAriaSnapshot() {
        await expect(this.authorizationModalLocator)
            .toMatchAriaSnapshot({ name: 'authorizationModal.yml' })
    }

}