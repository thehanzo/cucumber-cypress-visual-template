import oaMachine from '../locators/oaMachine';
const defaultSensitivity = 0.1

class Eyes {
  // *** Getters *** //
  // *** Actions *** //
  /**
 * This function takes a snapshot of the page and validates for visual regressions
 * @param name
 */
  fullSnapshot(name) {
    switch (Cypress.env('VISUAL_ENV')){
      case 'local':
        {
          cy.compareSnapshot(name, defaultSensitivity);
          break
        }
      case 'cloud':
        {
          cy.eyesCheckWindow(name)
          break
        }
      default:{
        throw new Error(`Not supported environment for visual regression`)
      }  
    }
  }
  
  /**
   * This function takes a snapshot of a DOM elment and validates for visual regressions
   * The function receives an element and a snapshot name
   * @param element 
   * @param name
   */
  elementSnapshot(element, name){
    const hasExamples = Cypress.currentTest.title.split('.').pop()
    const testID = Cypress.currentTest.title.split(' ', 1)
    const suffix = hasExamples.includes('example')? hasExamples : ''
    console.log(`creating snapshot for: ${testID}, example: ${suffix}`)
    switch (Cypress.env('VISUAL_ENV')){
      case 'local':{
          element.compareSnapshot(`${testID}${suffix} ${name}`, defaultSensitivity);
          break
        }
      case 'cloud':{
            cy.eyesCheckWindow({
              target: 'region',
              element: element,
              name: name
            })
          break
        }
      default:{
        throw new Error(`Not supported environment for visual regression`)
      }  
    }
  }

  /**
   * This function takes a snapshot of a the Canvas elment and validates for visual regressions
   * The function receives a snapshot name
   * @param name
   */
  canvasSnapshot(name) {
    this.elementSnapshot(oaMachine.imageCanvasParent, name)
  }
}

export default new Eyes();
