/* eslint no-empty: 0 */
"use strict";

module.exports = function(environment) {
  const ENV = {
    modulePrefix: "ember-simple-auth-github-octane",
    environment,
    rootURL: "/",
    locationType: "auto",
    torii: {
      sessionServiceName: "session",
      providers: {
        "github-oauth2": {
          scope: "repo user"
        }
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
        EMBER_NATIVE_DECORATOR_SUPPORT: true,
        EMBER_METAL_TRACKED_PROPERTIES: true,
        EMBER_GLIMMER_ANGLE_BRACKET_NESTED_LOOKUP: true,
        EMBER_GLIMMER_ANGLE_BRACKET_BUILT_INS: true,
        EMBER_GLIMMER_FN_HELPER: true,
        EMBER_GLIMMER_ON_MODIFIER: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.torii.providers["github-oauth2"].apiKey =
      process.env.GITHUB_DEV_CLIENT_ID;
    ENV.torii.providers["github-oauth2"].redirectUri =
      process.env.GITHUB_DEV_REDIRECT_URI;
    ENV.torii.providers["github-oauth2"].tokenExchangeUri =
      process.env.DEV_TOKEN_EXCHANGE_URL;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // Keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
  }

  return ENV;
};
