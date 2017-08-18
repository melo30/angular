import { StockAngularPage } from './app.po';

describe('stock-angular App', () => {
  let page: StockAngularPage;

  beforeEach(() => {
    page = new StockAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
