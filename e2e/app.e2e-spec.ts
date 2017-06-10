import { Web3PlaygroundPage } from './app.po';

describe('web3-playground App', () => {
  let page: Web3PlaygroundPage;

  beforeEach(() => {
    page = new Web3PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
