import {browser, by, element} from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getJobDetailTitle() {
    return element(by.css('.job-detail h5')).getText();
  }

  getNthJobItem(n: number) {
    return element.all(by.css('.job-item')).get(n - 1);
  }

  getNthJobItemTitle(n: number) {
    return this.getNthJobItem(n).element(by.css('.job-title')).getText();
  }
}
