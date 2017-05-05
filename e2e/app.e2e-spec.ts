import { SwTry1Page } from './app.po';

describe('sw-try1 App', () => {
  let page: SwTry1Page;

  beforeEach(() => {
    page = new SwTry1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
