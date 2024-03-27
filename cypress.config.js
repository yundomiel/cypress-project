const { defineConfig } = require("cypress");
require('dotenv').config()


module.exports = defineConfig({
  projectId: "ex9uhx",
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,



  e2e: {
    baseUrl: "https://phptravels.net/login",
    specPattern:"cypress/e2e/**/spec.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      config.env={
        ...process.env,
        ...config.env
      }
      return config
  
      // implement node event listeners here
    },
  },
});
