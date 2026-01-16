import {Page} from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(): Promise<void> {
        await this.page.goto('https://rutube.ru/', {
            waitUntil: 'domcontentloaded'
        })
    }
}