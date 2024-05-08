import "@applitools/eyes-cypress"

// This function add global variables to TypeScript to be used on any file in the project

declare global {
    namespace Cypress {
      interface Chainable {
        openHomePage(value: string): Chainable<JQuery<HTMLElement>>
      }
    }
  }