export class GroundPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ground-app h1')).getText();
  }
}
