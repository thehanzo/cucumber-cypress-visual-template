import BasePage from './base'
import locators from '../locators/oaMachine'
import landingPage from './landing';
import eyes from '../helpers/eyes';
import 'cypress-wait-until';

class OaMachine extends BasePage {
  // *** Getters *** //
  getCanvasParent() { return cy.get(locators.imageCanvasParent) } 
  getCanvasChild(childPosition) { return cy.get(locators.imageCanvasChildren).eq(childPosition) }
  getCanvasImagesChildren(){return cy.get(locators.imageCanvasChildren)}
  getCurrentTime(){return cy.get(locators.currentTime)}
  getversion(){return cy.get(locators.versionSection)}
  // Patient information
  getPatientPhoto() { return cy.get(locators.patientPhoto) }
  getPatientInfoContainer() { return cy.get(locators.patientInfoContainer) }
  // Toolbar
  getToolbarContainer() { return cy.get(locators.toolbarContainer) }
  getPointerButton() { return cy.get(locators.pointerButton) }
  getZoomImageButton() { return cy.get(locators.zoomImageButton) }
  getPanImageButton() { return cy.get(locators.panImageButton) }
  getMeasureImageButton() { return cy.get(locators.measureImageButton) }
  getWindowButton() { return cy.get(locators.windowButton) }
  getAxialViewButton() { return cy.get(locators.axialViewButton) }
  getCoronalViewButton() { return cy.get(locators.coronalViewButton, {timeout: 35_000}) }
  getSagittalViewButton() { return cy.get(locators.sagittalViewButton) }
  getDoseWashLinesButton() { return cy.get(locators.doseWashLinesButton) }
  getDoseWashButton() { return cy.get(locators.doseWashButton) }
  getDoseLinesButton() { return cy.get(locators.doseLinesButton) }
  getDoseOffButton() { return cy.get(locators.doseOffButton) }
  getLayout6x6Button() { return cy.get(locators.layout6x6Button) }
  getLayout1x1Button() { return cy.get(locators.layout1x1Button) }
  getLayout3x3Button() { return cy.get(locators.layout3x3Button) }
  getDVHScorecardButton() { return cy.get(locators.dvhScorecardButton) }
  getShowNotesButton() { return cy.get(locators.showNotesButton) }
  getTimerText() { return cy.get(locators.timerText) }
  getUserAvatarButton() { return cy.get(locators.userAvatarButton) }
  // Notes
  getNotesModal() { return cy.get(locators.notesModal) }
  getNoteModalCloseButton() { return cy.get(locators.notesModalCloseButton) }
  getNoteInput() { return cy.get(locators.notesInput) }
  getNoteFooterToolbar() { return cy.get(locators.notesToolbar) }
  getNoteBoldButton() { return cy.get(locators.notesBoldButton) }
  getNoteItalicButton() { return cy.get(locators.notesItalicButton) }
  getNoteLinkButton() { return cy.get(locators.notesLinkButton) }
  getNoteImageButton() { return cy.get(locators.notesImageButton) }
  getCharacterCounter() { return cy.get(locators.notesCharacterCounterText) }
  getSaveNoteButton() { return cy.get(locators.saveButton) }
  getFilterComponent() { return cy.get(locators.filterComponent) }
  getDateRangeInput() { return cy.get(locators.dateRangeInput) }
  getFilterByAuthorButton() { return this.getFilterComponent().contains('Filter by Author') }
  getNoteListComponent() { return cy.get(locators.noteList) }
  getNoteText() { return cy.get(locators.noteText) }
  getPrintButton() { return cy.get(locators.notePrintButton) }
  // Slice controls
  getSlicerParent() { return cy.get(locators.canvasSlicer) }
  getSlicerRightArrow() { return cy.get(locators.rightSliceArrow) }
  getSlicerLeftArrow() { return cy.get(locators.leftSliceArrow) }
  getSliceNumber() { return cy.get(locators.sliceNumber) }
  // Tabs
  getAdaptTab() { return cy.get(locators.adaptTab) }
  getSettingsTab() { return cy.get(locators.settingsTab) }
  getRigidRegistrationTab() { return cy.get(locators.rigidRegistrationTab) }
  getContoursTab() { return cy.get(locators.contoursTab) }
  getDailyDoseTab() { return cy.get(locators.dailyDoseTab) }
  getScoreTab() { return cy.get(locators.dosePanel).contains('Scorecard') }
  getMetricsTab() { return cy.get(locators.dosePanel).contains('Metrics') }
  // Contours
  getVOISidebar() { return cy.get(locators.sidebar) }
  getDeformedButton() { return cy.get(locators.deformedButton) }
  getAIButton() { return cy.get(locators.aiButton) }
  getDeformedList() {return cy.get(locators.deformedList)}
  getVoiListContours() {return cy.get(locators.voiListContours)}
  getBumperButton() { return cy.get(locators.bumperButton) }
  getSlider() { return cy.get(locators.slider) }
  getSliderThumb() { return cy.get(locators.sliderThumb) }
  getBumperSizeInput() { return cy.get(locators.bumperSizeInput) }
  getDeleteButton() { return cy.get(locators.deleteButton) }
  getDeleteSweepButton() { return cy.get(locators.deleteSweepButton) }
  getUndoButton() { return cy.get(locators.undoButton) }
  getRedoButton() { return cy.get(locators.redoButton) }
  getApproveContourButton() { return cy.get(locators.approveContourButton) }
  // Dose
  getDvhOptionsButton() { return cy.get(locators.dvhOptionsButton) }
  getDvhOptionsModal() { return cy.get(locators.dvhOptionsModal) }
  getDvhOptionsCheckbox() { return cy.get(locators.dvhCheckbox) }
  getFullDoseRadio() { return cy.get(locators.socrecardFooter).contains(' Full dose') }
  getFxDoseRadio() { return cy.get(locators.socrecardFooter).contains(' Fx dose') }
  getDoseCodeList() { return cy.get(locators.doseCodeList) }
  getDoseCodeTitle() { return cy.get(locators.doseCodeTitle) }
  getDoseCodeItem() { return cy.get(locators.doseCodeItem) }
  getScoreCardComponent() { return cy.get(locators.scoreCardComponent) }
  getScoreCardButton() {return cy.get(locators.scoreCardButton)}
  getScoreCardTable() { return cy.get(locators.scoreCardComponent).find(locators.scoreCardTable) }
  getMetricsButton() {return cy.get(locators.metricsButton)}
  getMetricsTable() {return cy.get(locators.metricsButton)}
  getRegistrationDoseButton() {return cy.get(locators.registrationDoseButton)}
  getGraphDailyLabel() { return cy.get(locators.graphDailyLabel) }
  getGraphRefLabel() { return cy.get(locators.graphRefLabel) }
  getGraphSettings() {return cy.get(locators.dvhSettings)}
  getDvhGraph() { return cy.get(locators.dvhGraph) }
  // VOIs
  getVoiPlanninglist() {return cy.get(locators.voiPlanningList)}
  getVoiTable() { return cy.get(locators.voiTable) }
  getVoiRows() { return this.getVoiTable().find(locators.voiRow) }
  getVoiByName(name) { return this.getVoiRows().contains(name) }
  // Automatic Registration
  getRigidPanel() { return cy.get(locators.rigidPanel) }
  getTechniqueDropdown() { return cy.get(locators.fullImageDropdown)}
  getTranslationDropdown() { return cy.get(locators.translationDropdown)}
  getScanDateInfo() { return cy.get(locators.scanDateInfo) }
  getStartButton() { return cy.get(locators.startButton) }
  // Balance
  getBalancePanel() { return cy.get(locators.balancePanel) }
  getPlanColorPicker() { return cy.get(locators.planColorPicker) }
  getPlanButton() { return cy.get(locators.planButton) }
  getBalanceSlider() { return cy.get(locators.balanceSlider) }
  getScanButton() { return cy.get(locators.scanButton) }
  getScanColorPicker() { return cy.get(locators.scanColorPicker) }
  getCheckerCheckbox() { return cy.get(locators.checkerCheckbox) }
  getCheckerSlider() { return cy.get(locators.checkerSlider) }
  // Manual Registration
  getManualPanel() { return cy.get(locators.manualPanel) }
  getLeftRollButton() { return cy.get(locators.rollTopButton) }
  getRightRollButton() { return cy.get(locators.rollDownButton) }
  getArrowUpButton() { return cy.get(locators.arrowUpButton) }
  getArrowRightUpButton() { return cy.get(locators.arrowRightUpButton) }
  getArrowLeftButton() { return cy.get(locators.arrowLeftButton) }
  getSwitchLayoutButton() { return cy.get(locators.switchLayoutButton) }
  getArrowRightButton() { return cy.get(locators.arrowRightButton) }
  getArrowDownLeftButton() { return cy.get(locators.arrowDownLeftButton) }
  getArrowDownButton() { return cy.get(locators.arrowDownButton) }
  getLateralTranslationInput() { return cy.get(locators.lateralTranslationInput) }
  getLongTranslationInput() { return cy.get(locators.longTranslationInput) }
  getVerticalTranslationInput() { return cy.get(locators.verticalTranslationInput) }
  getPitchInput() { return cy.get(locators.pitchInput) }
  getRollInput() { return cy.get(locators.rollInput) }
  getYawInput() { return cy.get(locators.yawInput) }
  getResetButton() { return cy.get(locators.resetButton) }
  getCoarseRadio() { return cy.get(locators.coarseRadio) }
  getFineRadio() { return cy.get(locators.fineRadio) }
  getApprovalCheckbox() { return cy.get(locators.approvalCheckbox) }
  getAcceptButton() { return cy.get(locators.acceptButton) }
  getExportButton() { return cy.get(locators.exportButton) }
  getLasersCheckbox() { return cy.get(locators.lasersCheckbox) }
  //image window controls
  getVerticalSliderBar(){return cy.get(locators.verticalSliderBar)}
  getVerticalControlUppaerBar(){return cy.get(locators.verticalControlUpperBar)}
  //canvas images
  getCanvasSubImages(){return cy.get(locators.canvasSubImages)}

  // *** Actions *** //

    /**
   * this function will navigate to the machine page
   */
  setup() {
    landingPage.setup()
    landingPage.enterOnlineMachine1()
  }
  /**
   * this function clicks the right arrow on the top canvas viewport
   */
  moveToNextSlice() {
    this.getSlicerRightArrow().eq(0).click()
  }
  /**
   * this function clicks the left arrow on the top canvas viewport
   */
  moveToPreviousSlice() {
    this.getSlicerLeftArrow().eq(0).click()
  }
  /**
   * this function clicks the axial view button on the Toolbar
   */
  switchToAxialView() {
    this.getAxialViewButton().click()
  }
  /**
   * this function clicks the coronal view button on the Toolbar
   */
  switchToCoronalView() {
    this.getCoronalViewButton().click()
  }
  /**
   * this function clicks the Enrollment Settings button on the Toolbar
   */
  enterSettingsTab() {
    this.getSettingsTab().click()
  }
  /**
   * this function clicks the Rigid tab button on the Toolbar
   */
  enterRigidTab() {
    this.getRigidRegistrationTab().click()
  }
  /**
   * this function clicks the Contour tab button on the Toolbar
   */
  enterContoursTab() {
    this.getContoursTab().click()
  }
  /**
   * this function clicks the Dose tab button on the Toolbar
   */
  enterDoseTab() {
    this.getDailyDoseTab().click()
  }
  /**
   * this function clicks the Score tab button on the Toolbar
   */
  enterScoreTab() {
    this.getScoreTab().click()
  }
  /**
   * this function clicks the Metrics tab button on the Toolbar
   */
  enterMetricsTab() {
    this.getMetricsTab().click()
  }
    /**
   * this function clicks the DVH option button on the Dose Tab
   */
  openDvhOptionsModal() {
    this.getDvhOptionsButton().click()
  }
    /**
   * this function clicks the Notes modal button
   */
  openNotesModal() {
    this.getShowNotesButton().click()
  }
    /**
   * this function receive a text string and creates a Note
   * @param note 
   */
  createNote(note) {
    this.getNoteInput().type(note)
    this.getSaveNoteButton().click()
  }
    /**
   * this function receive a text string and validates it exists in the Notes panel
   * @param note 
   */
  validateNoteExists(note) {
    this.getNoteText().contains(note).should('be.ok')
  }
    /**
   * this function clicks the Checker checkbox on the Registration panel
   */
  enableChecker() {
    this.getCheckerCheckbox().click()
  }
  /**
   * this function receive an index parameter and checks the VOI checkbox for the index position
   * @param index 
   */
  enableVOIByIndex(index) {
    this.getVoiTable().find(locators.voiCheckbox).eq(index).check({force: true})
  }
  /**
   * this function receive an index parameter and unchecks the VOI checkbox for the index position
   * @param role 
   */
  disableVOIByIndex(index) {
    this.getVoiTable().find(locators.voiCheckbox).eq(index).uncheck({force: true})
  }
  /**
   * this function receive a tab parameter and navigates to the respective tab
   * @param tab 
   */
  switchTab(tab) {
    switch(tab){
      case 'settings':{
        this.enterSettingsTab()
        break
      }
        case 'rigid':{
        this.enterRigidTab()
        break
      }
        case 'contour':{
        this.enterContoursTab()
        break
      }
      case 'dose':{
        this.enterDoseTab()
        break
      }
      // Inside Daily Dose | Dose panel
      case 'score':{
        this.enterScoreTab()
        break
      }
      case 'metrics':{
        this.enterMetricsTab()
        break
      }
    }
  }
  /**
   * this function receive a Key parameter and simulate a keyboard stroke in the current page
   * @param mode 
   */
  switchToolbarMode(mode) {
    switch  (mode) { 
      case 'zoom': {
        this.getCanvasParent().realPress('z')
        break; 
      }
      case 'pan': { 
        this.getCanvasParent().realPress('p')
        break; 
      }
      case 'esc': { 
        this.getCanvasParent().realPress('Escape')
        break; 
      }
      default:{
        throw new Error(`Not support shortcut ${mode}`)
      } 
    }
  }

  /**
  * this function receive a Key parameter and simulate a keyboard stroke in the current page
  * @param image 
  */
 switchScanImageMode(image) {
   switch  (image) { 
     case 'plan': {
       this.getCanvasParent().realPress(["Alt", "p"])
       break; 
     }
     case 'scan': { 
       this.getCanvasParent().realPress(["Alt", "s"])
       break; 
     }
     default:{
       throw new Error(`Not supported shortcut: ${image}`)
     } 
   }
 }
  
  // Manual Registration

    /**
   * this function receive a string parameter and enters it into the Lateral Translation input
   * @param text 
   */
  setLateralTranslationInput(text) { 
    this.getLateralTranslationInput().clear().type(text).blur()
   }
    /**
   * this function receive a string parameter and enters it into the Long Translation input
   * @param text 
   */
  setLongTranslationInput(text) { 
    this.getLongTranslationInput().clear().type(text).blur()
   }
   /**
  * this function receive a string parameter and enters it into the Vertical Translation input
  * @param text 
  */
  setVerticalTranslationInput(text) { 
    this.getVerticalTranslationInput().clear().type(text).blur()
   }
   /**
  * this function receive a string parameter and enters it into the Pitch Translation input
  * @param text 
  */
  setPitchInput(text) { 
    this.getPitchInput().clear().type(text).blur()
   }
   /**
  * this function receive a string parameter and enters it into the Roll Translation input
  * @param text 
  */
  setRollInput(text) { 
    this.getRollInput().clear().type(text).blur()
   }
   /**
  * this function receive a string parameter and enters it into the Yaw Translation input
  * @param text 
  */
  setYawInput(text) { 
    this.getRollInput().clear().type(text).blur()
   }

   // Validations
  validateUiLayout() {
    eyes.pageLayoutScreenshot({
      layout: [
        locators.patientPhoto,
        locators.patientInfoContainer,
        locators.subheaderContainer,
        locators.toolbarContainer,
        locators.sideBarContainer,
        locators.imageCanvasParent,
        locators.progressBarContainer
      ]
    })
  }

  validateCanvasLoads() {
    cy.wait(20000)
    this.getCanvasParent().should('be.visible')
    this.getSlicerParent().should('be.visible')
    //Visual regression
    eyes.elementSnapshot(this.getCanvasParent(), "CanvasParent")
  }

  validatePatientInfoElements() {
    this.getPatientPhoto().should('be.visible')
    this.getPatientInfoContainer().contains('Patient ID').should('be.ok')
    this.getPatientInfoContainer().find('span:contains(ID)').not(':contains("Patient")').should('be.ok')
    this.getPatientInfoContainer().contains('Birth Date').should('be.ok')
    this.getPatientInfoContainer().contains('Gender').should('be.ok')
    this.getPatientInfoContainer().contains('Position').should('be.ok')
    this.getPatientInfoContainer().contains('Physician').should('be.ok')
    this.getPatientInfoContainer().contains('Plan Name').should('be.ok')
    this.getPatientInfoContainer().contains('Plan Approval Date').should('be.ok')
    this.getPatientInfoContainer().contains('Fraction Dose').should('be.ok')
    this.getPatientInfoContainer().contains('Fraction Number').should('be.ok')
    this.getPatientInfoContainer().contains('Planned Beam on time').should('be.ok')
    //Visual regression
    eyes.elementSnapshot(this.getPatientPhoto(), "PatientPhoto")
    eyes.elementSnapshot(this.getPatientInfoContainer(), "PatientInfoContainer")
  }

  validateCommonToolbarElements() {
    this.getAdaptTab().should('be.visible')
    this.getSettingsTab().should('be.visible')
    this.getRigidRegistrationTab().should('be.visible')
    this.getContoursTab().should('be.visible')
    this.getDailyDoseTab().should('be.visible')
    this.getPointerButton().should('be.visible')
    .should('have.class', locators.selectedAttribute) // Checked by default
    this.getZoomImageButton().should('be.visible')
    this.getPanImageButton().should('be.visible')
    this.getMeasureImageButton().should('be.visible')
    this.getWindowButton().should('be.visible')
    this.getAxialViewButton().should('be.visible')
    this.getCoronalViewButton().should('be.visible')
    this.getSagittalViewButton().should('be.visible')
    this.getShowNotesButton().should('be.visible')
    this.getTimerText().should('be.visible')
    this.getUserAvatarButton().should('be.visible')
    //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
  }

  validateRigidToolbarElements() {
    this.getRigidRegistrationTab().should('be.visible')
    .should('have.class', locators.selectedAttribute) // Checked by default
    this.getDoseWashLinesButton().should('be.visible')
    this.getDoseWashButton().should('be.visible')
    this.getDoseLinesButton().should('be.visible')
    this.getDoseOffButton().should('be.visible')
    .should('have.class', locators.selectedAttribute) // Checked by default
    //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
  }

  validateContourToolbarElements() {
    this.getContoursTab().should('be.visible')
    .should('have.class', locators.selectedAttribute)
    this.getLayout6x6Button().should('be.visible')
    .should('have.class', locators.selectedAttribute) // Checked by default
    this.getLayout1x1Button().should('be.visible')
    this.getLayout3x3Button().should('be.visible')
    //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
  }

  validateContourTabElements() {
    this.getVOISidebar().should('be.visible')
    this.getDeformedButton().should('be.visible')
    this.getAIButton().should('be.visible')
    this.getDeformedList().should('be.visible')
    this.getVoiListContours().should('be.visible')
    this.getBumperButton().should('be.visible')
    this.getSlider().scrollIntoView().should('be.visible')
    this.getSliderThumb().scrollIntoView().should('be.visible')
    this.getBumperSizeInput().scrollIntoView().should('be.visible')
    this.getBumperSizeInput().scrollIntoView().contains('0.0').should('be.ok')
    this.getDeleteButton().scrollIntoView().should('be.visible')
    this.getDeleteSweepButton().scrollIntoView().should('be.visible')
    this.getUndoButton().scrollIntoView().should('be.visible')
    this.getRedoButton().scrollIntoView().should('be.visible')
    this.getApproveContourButton().scrollIntoView().should('be.visible')
    //Visual regression
    eyes.elementSnapshot(this.getVOISidebar(), "VOISidebar")
  }

  validateDoseToolbarElements() {
    this.getDailyDoseTab().should('be.visible')
    .should('have.class', locators.selectedAttribute)
    this.getDVHScorecardButton().should('be.visible')
    .should('have.class', locators.selectedAttribute)
    this.getLayout1x1Button().should('be.visible')
    //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
  }

  validateDoseTabElements() {
    this.getDoseCodeList().should('be.visible')
    this.getDoseCodeTitle().should('be.visible')
    this.getDoseCodeTitle().contains('Dose(cGy)').should('be.ok')
    this.getScoreCardComponent().should('be.visible')
    this.getScoreCardComponent().contains("Today's overall status").should('be.ok')
    this.getScoreCardButton().should('be.visible')
    this.getMetricsButton().should('be.visible')
    this.getMetricsTable().should('be.visible')
    this.getRegistrationDoseButton().should('be.visible')
    this.getScoreCardTable().should('be.visible')
    this.getGraphDailyLabel().should('be.visible')
    this.getGraphRefLabel().should('be.visible')
    this.getGraphSettings().should('be.visible')
    this.getDvhGraph().should('be.visible')
    //Visual regression
    eyes.elementSnapshot(this.getDvhOptionsModal(), "DvhOptionsModal")
  }
  
    validateNotesModalComponents() {
      this.getNotesModal().should('be.visible')
      this.getNotesModal().should('contain.text','Notes')
      this.getNoteModalCloseButton().should('be.visible')
      this.getNoteInput().should('be.visible')
      this.getNoteInput().should('have.attr', 'data-placeholder', 'Message')
      this.getNoteFooterToolbar().should('be.visible')
      this.getNoteBoldButton().should('be.visible')
      this.getNoteItalicButton().should('be.visible')
      this.getNoteLinkButton().should('be.visible')
      this.getNoteImageButton().should('be.visible')
      this.getCharacterCounter().should('be.visible')
      this.getCharacterCounter().should('contain.text','0/300 Characters')
      this.getSaveNoteButton().should('be.visible')
      this.getDateRangeInput().should('be.visible')
      this.getFilterByAuthorButton().should('be.visible')
      this.getNoteListComponent().should('be.visible')
      this.getNoteText().should('be.visible')
      this.getPrintButton().should('be.visible')
      //Visual regression
      eyes.elementSnapshot(this.getNotesModal(), "NotesModal")
    }
  
    validateAutomaticRegistrationComponents() {
      this.getRigidPanel().should('be.visible')
      this.getRigidPanel().should('contain.text','Automatic Registration')
      this.getRigidPanel().should('contain.text','Scan Date')
      this.getTechniqueDropdown().should('be.visible')
      this.getTranslationDropdown().should('be.visible')
      this.getScanDateInfo().should('be.visible')
      this.getStartButton().should('be.visible')
      //Visual regression
      eyes.elementSnapshot(this.getRigidPanel(), "RigidPanel")
    }
  
    validateBalanceComponents() {
      this.getBalancePanel().should('be.visible')
      this.getBalancePanel().should('contain.text','Balance')
      this.getPlanColorPicker().should('be.visible')
      this.getPlanButton().should('be.visible')
      this.getBalanceSlider().should('be.visible')
      this.getScanButton().should('be.visible')
      this.getScanColorPicker().should('be.visible')
      this.getBalancePanel().should('contain.text','Checker')
      this.getCheckerCheckbox().should('be.visible')
      this.getCheckerSlider().should('be.visible')
      //Visual regression
      eyes.elementSnapshot(this.getBalancePanel(), "BalancePanel")
    }
    
    validateManualRegistrationComponents() {
      this.getManualPanel().scrollIntoView().should('be.visible')
      this.getManualPanel().should('contain.text','Manual Registration')
      this.getLeftRollButton().should('be.visible')
      this.getArrowUpButton().should('be.visible')
      this.getArrowRightUpButton().should('be.visible')
      this.getArrowLeftButton().should('be.visible')
      this.getSwitchLayoutButton().should('be.visible')
      this.getArrowRightButton().should('be.visible')
      this.getArrowDownLeftButton().should('be.visible')
      this.getArrowDownButton().should('be.visible')
      this.getRightRollButton().should('be.visible')
      this.getManualPanel().should('contain.text','Translations (mm)')
      this.getManualPanel().should('contain.text','Rotational Adjustments (degrees)')
      this.getManualPanel().should('contain.text','Lateral')
      this.getManualPanel().should('contain.text','Long')
      this.getManualPanel().should('contain.text','Vertical')
      this.getManualPanel().should('contain.text','Pitch')
      this.getManualPanel().should('contain.text','Roll')
      this.getManualPanel().should('contain.text','Yaw')
      this.getLateralTranslationInput().should('be.visible')
      this.getLongTranslationInput().should('be.visible')
      this.getVerticalTranslationInput().should('be.visible')
      this.getPitchInput().should('be.visible')
      this.getRollInput().should('be.visible')
      this.getYawInput().should('be.visible')
      this.getResetButton().should('be.visible')
      this.getCoarseRadio().should('be.visible')
      this.getManualPanel().should('contain.text','Coarse')
      this.getFineRadio().should('be.visible')
      this.getManualPanel().should('contain.text','Fine')
      this.getApprovalCheckbox().should('be.visible')
      this.getManualPanel().should('contain.text','Show Approval Confirmation')
      this.getAcceptButton().should('be.visible')
      this.getManualPanel().should('contain.text','Accept Registration')
      this.getExportButton().should('be.visible')
      this.getManualPanel().should('contain.text','Export')
      this.getLasersCheckbox().should('be.visible')
      this.getManualPanel().should('contain.text','Lasers')
      //Visual regression
      eyes.elementSnapshot(this.getManualPanel(), "ManualPanel")
    }
  
  validatePatientInfoIsPresent(info) {
    if(info == "") return
    this.getPatientInfoContainer().contains(info).should('be.ok')
    //Visual regression
    eyes.elementSnapshot(this.getPatientInfoContainer(), "PatientInfoContainer")
  }

  validateDvhModal() {
    this.getDvhOptionsModal().should('be.visible')
    this.getDvhOptionsModal().contains('DVH Properties').should('be.ok')
    this.getDvhOptionsModal().find(locators.dvhCheckbox).should('be.ok')
    this.getDvhOptionsModal().find(locators.dvhVoiColor).should('be.ok')
    this.getDvhOptionsModal().find(locators.dvhVoiLabel).should('be.ok')
    this.getDvhOptionsModal().contains('Background color:').should('be.ok')
    this.getDvhOptionsModal().find(locators.backgroundColorRadio).should('have.length', 3)
    this.getDvhOptionsModal().find(locators.okButton).should('be.ok')
    //Visual regression
    eyes.elementSnapshot(this.getDvhOptionsModal(), "DvhOptionsModal")
  }

  validatePointerModeSelected(){
    this.getPointerButton().should('be.visible')
    .should('have.class', locators.selectedAttribute)
    //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
  }

  validatePointerModeNotSelected(){
    this.getPointerButton().should('not.have.class',locators.selectedAttribute)
    //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
  }

  validateWindowLevelSliderBarEnabled() {
    this.getVerticalSliderBar().should('be.visible')
  }

  validateWindowLevelSliderBarNotEnabled() {
    this.getVerticalSliderBar().should('not.exist')
  }

  validateCurrentDateFormat(){
    const dayjs = require('dayjs')
    const dayFormat=dayjs().format('DD MMM YYYY')
    this.getCurrentTime().first().should('include.text',dayFormat)
  }

  validateCurrentTime(){
    const dayjs = require('dayjs')
    const dayFormat=dayjs().format('HH:MM:')
    this.getCurrentTime().first().should('include.text',dayFormat)
  }

  validateTimeLableLength(){
    this.getCurrentTime().parent().first().should('contain.text','Time (HH:MM:SS):')
  }
  
  validateVersionNumber() {
    this.getversion().should('contain.text','Version 9.0.0')
  }

  validateLengthOfPatientName()
  {  
    const lable ='Patient ID:'
    this.getPatientInfoContainer().contains(lable).should('be.ok').parent().invoke('text')
    .should('have.length.at.most',48+lable.length)
  }

  validateGenderInfo()
  {  
    const lable = 'Gender'
    this.getPatientInfoContainer().contains(lable).should('be.ok').parent().invoke('text')
    .then(($text)=>{
        var textInfo=String($text)
        var strList =textInfo.split(":")
        if("FemaleMale".indexOf(strList[1].trim())<0)
        {
          throw new Error("Patient's gender is not displayed.")
        }   
    })
    //Visual regression
    eyes.elementSnapshot(this.getPatientInfoContainer(), "PatientInfoContainer")
  }

  validatePlanName(name)
  {
    const lable = 'Plan Name'
    this.getPatientInfoContainer().contains(lable).should('be.ok').parent().invoke('text')
    .then(($text)=>{
      var textInfo=String($text)
      var strList =textInfo.split(":")   
      if(strList[1].trim()!=name)
      {
        throw new Error("Plan name: "+String(strList[1])+" is not matched with "+name)
      }
    })
    //Visual regression
    eyes.elementSnapshot(this.getPatientInfoContainer(), "PatientInfoContainer")
  }

  /**
   * This function validate once a shortcut is executed the mode is selected on the toolbar
   * receives an option short cut as parameter
   * @param option 
   */
  validateSelectionModeToolbar(option){
    switch  (option) { 
      case 'zoom': {
        this.getZoomImageButton().should('be.visible')
        this.getZoomImageButton().should('have.class', locators.selectedAttribute)
        //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
        break; 
      }
      case 'pan': { 
        this.getPanImageButton().should('be.visible')
        this.getPanImageButton().should('have.class', locators.selectedAttribute)
        //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
        break; 
      }
      case 'esc': { 
        this.getPointerButton().should('be.visible')
        this.getPointerButton().should('have.class', locators.selectedAttribute)
        //Visual regression
    eyes.elementSnapshot(this.getToolbarContainer(), "ToolbarContainer")
        break; 
      }
      default:{
        throw new Error(`Not support shortcut ${option}`)
      } 
    }
  }
  
  /**
   * This function validate once the machine page is loaded the images of the patient are displayed
   * on the canvas
   * @param image
   */
  validateSliceImages(image){
    switch(image) {
      case 'coronal': {
        this.getCanvasParent().siblings(locators.imageCanvasChildren).eq(0)
          .invoke('attr', 'style').should('contain', 'position: absolute; left: 0%; top: 0%; width: 100%; height: 75%;')
        break;
      }
      case 'transverse':{
        this.getCanvasParent().siblings(locators.imageCanvasChildren).eq(1)
        .invoke('attr', 'style').should('contain', 'position: absolute; left: 0%; top: 75%; width: 50%; height: 25%;')
        break;
      }
      case 'sagittal':{
        this.getCanvasParent().siblings(locators.imageCanvasChildren).eq(2)
        .invoke('attr', 'style').should('contain', 'position: absolute; left: 50%; top: 75%; width: 50%; height: 25%;')
        break;
      }
      default:{
        throw new Error(`Not support shortcut ${image}`)
      }
    }
  }

  /**
   * this function validates once Spacebar is leave pressed the Pan mode should be activated
   */
  pressPanModeSpaceKey(){
    this.getCanvasParent().realPress('Space', {pressDelay: 5000})
    this.getPointerButton().should('have.class', locators.selectedAttribute)
  }

  /**
   * this function receives a measure 'higher' o 'lower' to click on the arrows on slice section in the canvas
   * @param arrow
   */
  clickOnSliceArrow(slice, element){
    if(slice = 'next'){
      this.getSlicerRightArrow().eq(element).should('be.visible')
      this.getSlicerRightArrow().eq(element).click()
    }else if(slice = 'previous'){
      this.getSlicerLeftArrow().eq(element).should('be.visible')
      this.getSlicerLeftArrow().eq(element).click()
    }
  }
  

  /**
   * this function validates the canvas slices show a higher o lowe number of slice
   * also validates the slice could be change once slice per click
   * @param slice this variable correspond to the arrow to be clickec right/left
   * @param validation this variable is the behavior expected once the arrow is clicked
   * @param element this variable is the image of the three showed on the canvas to interact
   */
  validateSlice(slice, validation, element){
    if(validation = 'higher'){
      this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').then(($data) => {
        const defaultSlice = parseInt($data)
        this.clickOnSliceArrow(slice, element)
        this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').should('eq', defaultSlice +1)
        this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').should('not.eq', defaultSlice +2)
      })
    }else if(validation = 'lower'){
      this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').then(($data) => {
        const defaultSlice = parseInt($data)
        this.clickOnSliceArrow(slice, element)
        this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').should('eq', defaultSlice -1)
        this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').should('not.eq', defaultSlice -2)
      })
    }    
  }

  /**
   * this function validates the image navigation on the canvas
   * @param slice  this param is the arrow which the user wants to press
   * @param validation this param is the behavior expected once the arrow is pressed
   * @param image this param is the one of the three image to interact on the canvas
   */
  validateImagesNavigation(slice, validation, image){
    switch(image) {
      case 'coronal': {
        let element = 0
        this.validateSlice(slice, validation, element)
        break;
      }
      case 'transverse':{
        let element = 1
        this.validateSlice(slice, validation, element)
        break;
      }
      case 'sagittal':{
        let element = 2
        this.validateSlice(slice, validation, element)
        break;
      }
      default:{
        throw new Error(`The image ${image} is not founded`)
      }
    }
  }

  /**
   * this function validate once the next o previous arrow are clicked on the canvas then the slice change
   * @param slice this variable correspond to the arrow to click
   * @param element this variable correspond to the image on the canvas to change
   */
  validateCanvasImageChanging(slice, element){
    if(slice = 'next'){
      this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').then(($data) => {
        const defaultSlice = parseInt($data)
        this.clickOnSliceArrow(slice, element)
        this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').should('not.eq', defaultSlice)
      })
    }else if(slice = 'previous'){
      this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').then(($data) => {
        const defaultSlice = parseInt($data)
        this.clickOnSliceArrow(slice, element)
        this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').should('not.eq', defaultSlice)
      })
    } 
  }

  /**
   * this function validate which im,age on the canvas wants to be changed and call the function to change it
   * @param slice this variable correspond to the arrow to click
   * @param image this variable correspond to the image to change
   */
  canvasImagesChange(slice, image){
    switch(image) {
      case 'coronal': {
        let element = 0
        this.validateCanvasImageChanging(slice, element)
        break;
      }
      case 'transverse':{
        let element = 1
        this.validateCanvasImageChanging(slice, element)
        break;
      }
      case 'sagittal':{
        let element = 2
        this.validateCanvasImageChanging(slice, element)
        break;
      }
      default:{
        throw new Error(`The image ${image} is not founded`)
      }
    }
  }

   /**
   * this function move the mouse wheel "up" or "down" and validates the image change once is in pointer mode
   * @param orientation this variable is the orientation to move the mouse wheel
   * @param element this variable is the image to move on the canvas
   */
   validateScrollImageChanging(orientation, element){
    if(orientation == 'up'){
      this.getPointerButton().should('have.class', locators.selectedAttribute)
      this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').then(($data) => {
        const defaultSlice = parseInt($data)
        this.getCanvasSubImages().eq(element).realHover({pointer: "mouse"})
        this.getCanvasSubImages().eq(element).realMouseWheel({ deltaY: 100 })
        this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').should('eq', defaultSlice +1)
      })
    }else if(orientation == 'down'){
      this.getPointerButton().should('have.class', locators.selectedAttribute)
      this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').then(($data) => {
        const defaultSlice = parseInt($data)
        this.getCanvasSubImages().eq(element).realHover({pointer: "mouse"})
        this.getCanvasSubImages().eq(element).realMouseWheel({ deltaY: -100 })
        this.getSliceNumber().eq(element).invoke('prop', 'valueAsNumber').should('eq', defaultSlice -1)
      })
    } 
  }

  /**
   * this function validates which image the user wants to change and call the function to change it
   * @param orientation this correspond to the action to take with the mouse wheel up or down
   * @param image this correspond to the image on the canvas to change
   */
  validateScrollImageNavigation(orientation, image){
    switch(image) {
      case 'coronal': {
        let element = 0
        this.validateScrollImageChanging(orientation, element)
        break;
      }
      case 'transverse':{
        let element = 1
        this.validateScrollImageChanging(orientation, element)
        break;
      }
      case 'sagittal':{
        let element = 2
        this.validateScrollImageChanging(orientation, element)
        break;
      }
      default:{
        throw new Error(`The image ${image} is not founded`)
      }
    }
  }

  /**
   * this function validates than VOI panel is loading correctly on the page
   */
  validateVoiPanelIsLoaded(){
    this.getVoiPlanninglist().should('be.be.visible')
  }

  /**
   * this function search the VOI tables on the DOM and validate each row of each table
   * has text on it.
   */
  validateVoiRowsHasText(){
    let totalVoiTableCount
    this.getVoiTable().then((value) => {
      totalVoiTableCount = Cypress.$(value).length
      for(let tableIteration = 0; tableIteration < totalVoiTableCount; tableIteration++){
        this.getVoiTable().eq(tableIteration).find(locators.voiRow).each((value) => {
            cy.wrap(value).invoke('text').should('not.be.empty')
        })        
      }      
    })
  }

  /**
   * this function search the VOI tables on the DOM and validate each row of the table
   * has a color which identify them
   */
  validateVoiRowsHasColor(){
    let totalVoiTableCount
    this.getVoiTable().then((value) => {
      totalVoiTableCount = Cypress.$(value).length
      for(let tableIteration = 0; tableIteration < totalVoiTableCount; tableIteration++){
        this.getVoiTable().eq(tableIteration).find(locators.voiRowColor).each((value) => {
            cy.wrap(value).invoke('attr','style').should('include', 'background-color: rgb')
        })        
      }      
    })
  }

  /**
   * this function validates once the VOI list is loaded
   * then all rows on the voi should be checkeable
   */
  validateVoiListIsShowed(){
    let totalVoiTableCount
    let totalVoiRowsCount
    this.getVoiTable().then((value) => {
      totalVoiTableCount = Cypress.$(value).length
      for(let tableIteration = 0; tableIteration < totalVoiTableCount; tableIteration++){
        this.getVoiTable().eq(tableIteration).should('not.be.empty')
        this.getVoiTable().eq(tableIteration).find(locators.voiCheckbox).then((valueRow) =>{
          totalVoiRowsCount = Cypress.$(valueRow).length
          for(let voiRowsIteration = 1;  voiRowsIteration < totalVoiRowsCount; voiRowsIteration++){
            this.getVoiTable().eq(tableIteration).find(locators.voiCheckbox).eq(voiRowsIteration).click({force: true})
            this.getVoiTable().eq(tableIteration).find(locators.voiCheckbox).eq(voiRowsIteration).invoke('attr', 'aria-checked').should('eq', 'true')
          }
        })
      }
    })
  }
}

export default new OaMachine()
