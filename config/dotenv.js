module.exports = function() {
  return {
    clientAllowedKeys: [
      "GITHUB_DEV_REDIRECT_URI",
      "GITHUB_DEV_CLIENT_ID",
      "GITHUB_DEV_CLIENT_SECRET",
      "DEV_TOKEN_EXCHANGE_URL"
    ],
    // Fail build when there is missing any of clientAllowedKeys environment
    // variables.  By default false.
    failOnMissingKey: true
  };
};
