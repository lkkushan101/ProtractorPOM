var homePage = require('./homePage.js');
var signInPage = require('./signInPage.js');
describe('Go to home page login and search', function() {
  it('Go to home page and login', function() {
      browser.ignoreSynchronization = true;
      homePage.get();
      browser.waitForAngularEnabled(false) 
      homePage.clickLogin();
      browser.waitForAngularEnabled(false);
      signInPage.setEmail("tester101lk@gmail.com");
      signInPage.setPassword("cat584851");
      signInPage.clickSubmit();
  });
});