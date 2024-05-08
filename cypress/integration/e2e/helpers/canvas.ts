import oaMachinePage from '../pages/oaMachine';
import locators from '../locators/oaMachine';

class Canvas {
  // *** Getters *** //
  get canvasWidth() { return oaMachinePage.getCanvasParent().its('width'); }
  get canvasHeight() { return oaMachinePage.getCanvasParent().its('height'); }
  get canvasCenterX() { return this.canvasWidth.then($el =>{
    const canvasW = $el[0].then(parseInt)
    canvasW/2
  }); }
  get canvasCenterY() { return this.canvasHeight.then($el =>{
    const canvasH = $el[0].then(parseInt)
    canvasH/2
  }); }
  // *** Actions *** //
  useScrollWheel(scrollX, scrollY) {
    oaMachinePage.getCanvasParent()
    .trigger('mouseenter')
    .trigger("wheelmove", { 
      deltaY: -66.666666, 
      wheelDelta: 120, 
      wheelDeltaX: scrollX, 
      wheelDeltaY: scrollY, 
      bubbles: true, 
      force: true, 
      eventConstructor: 'MouseEvent'
    })
  }
  triggerRightClick() {
    oaMachinePage.getCanvasParent()
    .rightclick()
  }
  triggerMouseDrag(startX, startY, endX, endY) {
    oaMachinePage.getCanvasParent()
    .trigger('mouseenter')
    .trigger('mousedown', startX, startY, { which: 1, force: true, eventConstructor: 'MouseEvent' })  
    .trigger('mousemove', endX, endY, { which: 1, force: true, eventConstructor: 'MouseEvent' })
    .trigger('mouseup')
  }

}

export default new Canvas();
