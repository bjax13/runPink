import { RunPinkPage } from './app.po';

describe('run-pink App', () => {
  let page: RunPinkPage;

  beforeEach(() => {
    page = new RunPinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
