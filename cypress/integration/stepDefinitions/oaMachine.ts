import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import oaMachinePage from '../e2e/pages/oaMachine'
import canvas from '../e2e/helpers/canvas'
const patienInfo = require(`../../fixtures/patient.json`)
const m13 = require(`../../fixtures/machine-m13.json`)

Given("user navigates to a Machine page", () => {
  oaMachinePage.setup()
  oaMachinePage.validateCanvasLoads()
});

When("user performs mouse drag from {int},{int} to {int},{int}", (startX, startY, dropX, dropY) => {
  canvas.triggerMouseDrag(startX,startY,dropX,dropY)
});

When("user performs a vertical mouse wheel scroll of {int}", (scrollY) => {
  canvas.useScrollWheel(0, scrollY)
});

When("user performs a horizontal mouse wheel scroll of {int}", (scrollX) => {
  canvas.useScrollWheel(scrollX, 0)
});

When('user performs the {string} mode shortcut', (mode) => {
  oaMachinePage.switchToolbarMode(mode)
})

When("user disables all VOIs", () => {
  oaMachinePage.disableVOIByIndex(0)
});

When("user enables {string} VOI", (voiName) => {
  oaMachinePage.enableVOIByIndex(m13.voi[voiName])
});

When("user disables {string} VOI", (voiName) => {
  oaMachinePage.disableVOIByIndex(m13.voi[voiName])
});

When("user changes to next slice", () => {
  oaMachinePage.moveToNextSlice()
});

When("user opens the DVH options modal", () => {
  oaMachinePage.openDvhOptionsModal()
});

When("user enters the notes modal", () => {
  oaMachinePage.openNotesModal()
});

When("modifies CT vertical position by {int}", (amount) => {
  oaMachinePage.setVerticalTranslationInput(amount)
});

When("the user leaves pressed the backspace key then the Pan mode is activated", () => {
  oaMachinePage.pressPanModeSpaceKey()
});

When("the user clicks on the {string} arrow on the {string} image the image should change", (slice, image) => {
  oaMachinePage.canvasImagesChange(slice, image)
})

When("the VOI left panel is loaded", () => {
  oaMachinePage.validateVoiPanelIsLoaded()
})

Then("user selects {string} tab", (tab) => {
  oaMachinePage.switchTab(tab)
});

Then("user selects {string} image", (image) => {
  oaMachinePage.switchScanImageMode(image)
});

Then("patient information components are displayed", () => {
  oaMachinePage.validatePatientInfoElements()
});

Then("patient personal information is displayed", () => {
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.id)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.birth_date)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.patient_id)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.gender)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.position)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.physician)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.plan_name)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.plan_approval)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.fraction_dose)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.fraction_number)
  oaMachinePage.validatePatientInfoIsPresent(patienInfo.planned_beam)
});

Then("Contour tab components are displayed", () => {
  oaMachinePage.validateContourTabElements()
});

Then("Dose tab components are displayed", () => {
  oaMachinePage.validateDoseTabElements()
});

Then("Notes Modal components are displayed", () => {
  oaMachinePage.validateNotesModalComponents()
});

Then("Registration Panel components are displayed", () => {
  oaMachinePage.validateAutomaticRegistrationComponents()
  oaMachinePage.validateBalanceComponents()
  oaMachinePage.validateManualRegistrationComponents()
});

Then("{string} toolbar components are displayed", (tab) => {
  oaMachinePage.validateCommonToolbarElements()
  switch(tab){
    case 'settings':{

      break
    }
      case 'rigid':{
        oaMachinePage.validateRigidToolbarElements()
      break
    }
      case 'contour':{
        oaMachinePage.validateContourToolbarElements()
      break
    }
    case 'dose':{
      oaMachinePage.validateDoseToolbarElements()
      break
    }
  }
});

Then("{string} image options is selected in the toolbar", (option) => {
  oaMachinePage.validateSelectionModeToolbar(option)
});

Then("patient photo is displayed", () => {
  oaMachinePage.getPatientPhoto().should('be.visible')
});

Then("DVH options are displayed", () => {
  oaMachinePage.validateDvhModal()
});

Then("user creates a new note: {string}", (note) => {
  oaMachinePage.createNote(note)
});

Then("note is displayed: {string}", (note) => {
  oaMachinePage.validateNoteExists(note)
});

Then("the window level vertical slider bar is displayed",()=>{
  oaMachinePage.validateWindowLevelSliderBarEnabled()
});

Then("the window level vertical slider bar is not displayed",()=>{
  oaMachinePage.validateWindowLevelSliderBarNotEnabled()
});

Then("Pointer options is selected in the toolbar", () => {
  oaMachinePage.validatePointerModeSelected()
});

Then("Pointer options is not selected in the toolbar", () => {
  oaMachinePage.validatePointerModeNotSelected()
});

Then("The software shows the current time",()=>{
  oaMachinePage.validateCurrentTime()
});

Then("The software shows the current time in format DD-MMM-YYYY",()=>{
  oaMachinePage.validateCurrentDateFormat()
});

Then("The software shall display labels for units of time that use more than one character",()=>{
  oaMachinePage.validateTimeLableLength()
});

Then("patient entire name shorter than 48",()=>{
  oaMachinePage.validateLengthOfPatientName()
});

Then("the SOFTWARE shall display the patient's gender",()=>{
  oaMachinePage.validateGenderInfo()
});

Then("the SOFTWARE shall display the plan's name: {string}",(name)=>{
  oaMachinePage.validatePlanName(name)
});

Then("The version number of the software is displayed",()=>{
  oaMachinePage.validateVersionNumber()
});

Then("a {string} slice image should be displayed from an image volume",(image)=>{
  oaMachinePage.validateSliceImages(image)
});

Then("the user clicks on the {string} arrow & the number of the slice should {string} on the {string} image",(slice, validation, image)=>{
  oaMachinePage.validateImagesNavigation(slice, validation, image)
});

Then("the user moves {string} the mouse wheel on the {string} image & the slice should be {string}", (orientation, image, result) => {
  oaMachinePage.validateScrollImageNavigation(orientation, image)
})

Then("all the items on the panel has text on it", () => {
  oaMachinePage.validateVoiRowsHasText()
})

Then("all the items on the panel has a color to identified on it", () => {
  oaMachinePage.validateVoiRowsHasColor()
})

Then("the list of VOI is showed to the user", () => {
  oaMachinePage.validateVoiListIsShowed()
})