/* eslint camelcase: 0 */
import GitHubOAuth2Provider from "torii/providers/github-oauth2";
import ajax from "ember-fetch/ajax";
import config from "ember-simple-auth-github-octane/config/environment";

export default GitHubOAuth2Provider.extend({
  open() {
    return this._super().then(async ({ authorizationCode, provider }) => {
      const gatekeeperURL =
        config.torii.providers["github-oauth2"].tokenExchangeUri;
      const response = await ajax(`${gatekeeperURL}/${authorizationCode}`);
      return { provider, access_token: response.token };
    });
  }
});
