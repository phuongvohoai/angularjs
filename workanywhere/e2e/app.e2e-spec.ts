import { WorkanywherePage } from './app.po';

describe('workanywhere App', function() {
  let page: WorkanywherePage;

  beforeEach(() => {
    page = new WorkanywherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
