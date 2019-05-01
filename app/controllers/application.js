import Controller from "@ember/controller";
import config from "ember-simple-auth-github-octane/config/environment";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class ApplicationController extends Controller {
  @service session;

  config = config.torii.providers["github-oauth2"];

  @action
  logout() {
    this.session.invalidate();
  }
}
