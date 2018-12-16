import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display first job item by default', () => {
    expect(page.getNthJobItemTitle(1)).toEqual(page.getJobDetailTitle());
  });

  it('should display the details for the selected job item', () => {
    const jobItem = page.getNthJobItem(2);
    jobItem.click().then(() => {
      expect(page.getNthJobItemTitle(2)).toEqual(page.getJobDetailTitle());
    });
  });

});
