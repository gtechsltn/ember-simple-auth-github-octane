/* eslint camelcase: 0 */
import { isPresent } from "@ember/utils";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import GitHubUserAdapter from "ember-data-github/adapters/github-user";

export default GitHubUserAdapter.extend(DataAdapterMixin, {
  authorize(xhr) {
    const { access_token } = this.session.data.authenticated;
    if (isPresent(access_token)) {
      xhr.setRequestHeader("Authorization", `Bearer ${access_token}`);
    }
  }
});
