const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlPrivacyPage = require('./pages/vl-privacy.page');

describe('vl-privacy', async () => {
  let vlPrivacyPage;

  before(() => {
    vlPrivacyPage = new VlPrivacyPage(getDriver());
    return vlPrivacyPage.load();
  });

  it('als gebruiker kan in de privacy pagina zien', async () => {
    const page = await vlPrivacyPage.getPrivacyElement();
    await assert.eventually.isTrue(page.isDisplayed());
  });
});
