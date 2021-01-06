const VlPrivacy = require('../components/vl-privacy');
const {Page, Config} = require('vl-ui-core').Test;

class VlPrivacyPage extends Page {
  async getPrivacyElement() {
    return this._getPrivacy('vl-privacy');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-privacy-demo.html');
  }

  async _getPrivacy(selector) {
    return new VlPrivacy(this.driver, selector);
  }
}

module.exports = VlPrivacyPage;
