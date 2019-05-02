/* eslint camelcase: 0 */
import { computed } from "@ember/object";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import GitHubUserAdapter from "ember-data-github/adapters/github-user";

export default GitHubUserAdapter.extend(DataAdapterMixin, {
  headers: computed("session.data.authenticated.access_token", function() {
    const headers = {};
    if (this.session.isAuthenticated) {
      headers.Authorization = `Bearer ${
        this.session.data.authenticated.access_token
      }`;
    }

    return headers;
  })
});
