import { Locator, Page } from 'playwright/test';
import { BasePage } from './BasePage';

export class ForCreaterPage extends BasePage {
  static readonly testParams = [
    {
      url: 'https://rutube.ru/for_creators/#main',
      screenshotName: 'mainTab.png',
      name: 'Главная',
    },
    {
      url: 'https://rutube.ru/for_creators/#steps',
      screenshotName: 'stepsTab.png',
      name: 'Первые шаги',
    },
    {
      url: 'https://rutube.ru/for_creators/#faq',
      screenshotName: 'faqTab.png',
      name: 'Как развивать канал',
    },
    {
      url: 'https://rutube.ru/for_creators/#monetization',
      screenshotName: 'monetizationTab.png',
      name: 'Монетизация',
    },
    {
      url: 'https://rutube.ru/for_creators/#rules',
      screenshotName: 'rulesTab.png',
      name: 'Правила',
    },
    {
      url: 'https://rutube.ru/for_creators/#team',
      screenshotName: 'teamTab.png',
      name: 'Команда R',
    },
    {
      url: 'https://rutube.ru/for_creators/#academy',
      screenshotName: 'academyTab.png',
      name: 'Академия блогеров',
    },
    {
      url: 'https://rutube.ru/for_creators/#grades',
      screenshotName: 'gradesTab.png',
      name: 'Уровни авторов',
    },
  ];
  private readonly pageContentLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.pageContentLocator = this.page.locator('#___gatsby');
  }

  async openPage(url: string) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async pageHasCorrcetLayout(screenshotName: string) {
    await this.checkLayotByScreenshot(this.pageContentLocator, screenshotName);
  }
}
