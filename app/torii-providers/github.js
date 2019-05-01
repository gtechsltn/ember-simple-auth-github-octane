/* eslint camelcase: 0 */
import GitHubOAuth2Provider from "torii/providers/github-oauth2";
import { inject as service } from "@ember/service";
import config from "ember-simple-auth-github-octane/config/environment";

export default GitHubOAuth2Provider.extend({
  ajax: service(),
  fetch(data) {
    return data;
  },
  open() {
    return this._super().then(({ authorizationCode, provider }) => {
      const gatekeeperURL =
        config.torii.providers["github-oauth2"].tokenExchangeUri;
      return this.ajax
        .request(`${gatekeeperURL}/${authorizationCode}`)
        .then(response => {
          return {
            access_token: response.token,
            provider
          };
        });
    });
  }
});
