'use strict';
var homePage = function() {
    this.signInLink = element(by.css('a.login'));
   
    this.get = function() {
    browser.get("http://automationpractice.com/index.php");
    };
    this.clickLogin = function(){
      this.signInLink.click();
    };
   
}; 
module.exports = new homePage();