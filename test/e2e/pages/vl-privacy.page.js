const VlPrivacy = require('../components/vl-privacy');
const {Page, Config} = require('vl-ui-core').Test;

class VlPrivacyPage extends Page {
  async _getPrivacy(selector) {
    return new VlPrivacy(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-privacy.html');
  }
}

module.exports = VlPrivacyPage;
