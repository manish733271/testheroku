import { VimondcasePage } from './app.po';

describe('vimondcase App', function() {
  let page: VimondcasePage;

  beforeEach(() => {
    page = new VimondcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
