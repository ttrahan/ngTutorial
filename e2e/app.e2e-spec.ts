import { NgTutorialPage } from './app.po';

describe('ng-tutorial App', () => {
  let page: NgTutorialPage;

  beforeEach(() => {
    page = new NgTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
