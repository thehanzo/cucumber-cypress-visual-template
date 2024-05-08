import { defineConfig } from 'cypress'
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin';

export default defineConfig({
  screenshotsFolder: './cypress/screenshots/',
  watchForFileChanges: false,
  trashAssetsBeforeRuns: true,
  e2e: {
    baseUrl: 'https://oadevelopment.accuray.com/',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      return require('./cypress/plugins/index.js') (on, config);
    },
    viewportHeight: 1200,
    viewportWidth: 1900,
    specPattern: '**/*.{feature,features,spec.ts}',
    supportFile: 'cypress/support/commands.js',
    defaultCommandTimeout: 15000
  }
})
