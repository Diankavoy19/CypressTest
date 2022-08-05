const { defineConfig } = require("cypress");
module.exports = defineConfig({
    screenshotOnRunFailure:	true,
    video:true,
    defaultCommandTimeout: 6000,
    execTimeout: 5000,
    taskTimeout: 5000,
    pageLoadTimeout: 30000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    device: 'iphone-x',
    viewportHeight:	812,
    viewportWidth: 375,
    e2e: {
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
        devServer: {
            delay: 500,
            force404: false,
            ignore: (xhr) => {
                return true;
          },
        },
    },
});