const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ex9uhx",
  e2e: {
    baseUrl: "https://phptravels.net/login",
    specPattern:"cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    viewportHeight: 1000,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
