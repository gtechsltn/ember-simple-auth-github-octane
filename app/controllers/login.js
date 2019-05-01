import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class LoginController extends Controller {
  @service session;

  @action
  login() {
    this.session.authenticate("authenticator:torii", "github");
  }
}
