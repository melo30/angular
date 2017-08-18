import { MyAngularHeroPage } from './app.po';

describe('my-angular-hero App', () => {
  let page: MyAngularHeroPage;

  beforeEach(() => {
    page = new MyAngularHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
