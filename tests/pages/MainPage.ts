import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class MainPage extends BasePage {
    private readonly headerLocator: Locator;
    private readonly categoriesTabsLocator: Locator;
    private readonly menuLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.headerLocator = this.page.getByRole('banner');
        this.categoriesTabsLocator = this.page
            .locator('section')
            .filter({
            hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/
            });
        this.menuLocator = this.page.getByLabel('Облегченная панель навигации');

    }

    async headerHasCorrectAriaSnapshot() {
        await expect(this.headerLocator).toMatchAriaSnapshot();
    }

    async categoriesTabsHasCorrectAriaSnapshot() {
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot();
    }

    async menuTabsHasCorrectAriaSnapshot() {
        await expect(this.menuLocator).toMatchAriaSnapshot();
    }

}