var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  beforeEach: function(browser, done) {
    browser
      .resizeWindow(1024, 768, done)
  },

  'Sample Test 1': function(browser) {
    browser
      .url(config.env.url)
      .waitForElementVisible('body')
      .click('#navigation a[href="/residents"]')
      .waitForElementVisible('body')
      .assert.containsText('#page-title', 'Residents')
      // .saveScreenshot(config.test_settings.default.screenshots.success_path + '/' + 'login-test.png')
      .end();
  },

  'Sample Test 2': function(browser) {
    browser
      .url(config.env.url)
      .waitForElementVisible('body')
      .setValue('input[name="search_block_form"]', 'meeting')
      .click('#edit-submit')
      .waitForElementVisible('body')
      .waitForElementVisible('.gsc-wrapper')
      .assert.containsText('.gsc-result-info', 'results')
      .end();
  }
};