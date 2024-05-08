import Base from './base';

class OaMachine extends Base {
  // Site information
  get loadingSpinner() { return '.spinner'; }
  get currentTime() {return '[data-cy="visualization-date-time"]'}
  get versionSection() {return '[data-cy="version-visualization"]'}
  // Layout
  get subheaderContainer() {return '[type = "subheader"]'}
  get toolbarContainer() {return '[type = "tools"]'}
  get sideBarContainer() {return '.side-bar'}
  get progressBarContainer() {return '[data-cy="progress-section-visualization"]'}
  // Patient information
  get patientPhoto() { return '[data-cy="patient-photo"]' }
  get patientInfoContainer() { return '.patient-info__container'}
  // Toolbar
  get pointerButton() { return '[data-cy = "icon-pointer"]'}
  get zoomImageButton() { return '[data-cy = "icon-magnify"]'}
  get panImageButton() { return '[data-cy = "icon-pan"]'; }
  get measureImageButton() { return '[data-cy = "icon-ruler"]'}
  get windowButton() { return '[data-cy = "icon-window"]'}
  get axialViewButton() { return '[data-mat-icon-name="axis-indicator"]'}
  get coronalViewButton() { return '[data-mat-icon-name="coronal-indicator"]'}
  get sagittalViewButton() { return '[data-mat-icon-name="sagittal-indicator"]'}
  get doseWashLinesButton() { return '[data-cy = "icon-overlay-lines"]'}
  get doseWashButton() { return '[data-cy = "icon-overlay"]'}
  get doseLinesButton() { return '[data-cy = "icon-lines"]'}
  get doseOffButton() { return '[data-cy = "icon-none"]'}
  get layout6x6Button() { return '[data-cy = "icon-6x6"]'}
  get layout1x1Button() { return '[data-cy = "icon-1x1"]'}
  get layout3x3Button() { return '[data-cy = "icon-3x3"]'}
  get dvhScorecardButton() { return '[data-cy = "icon-dvh-view"]'}
  get showNotesButton() { return '[data-mat-icon-name = "notes"]'}
  get timerText() { return '.timer'; }
  get userAvatarButton() { return '.user__avatar-container'}
  // Shortcut Keys
  get shortcut() { return {
    zoom: 122,
    pan: 112,
    selection: 27
  }}
  // Tabs
  get adaptTab() { return '#mat-tab-link-1'}
  get settingsTab() { return '[data-cy = "tab-Settings"]'}
  get rigidRegistrationTab() { return '[data-cy = "tab-Rigid"]'}
  get contoursTab() { return '[data-cy = "tab-Contours"]'}
  get dailyDoseTab() { return '[data-cy = "tab-DailyDose"]'}
  //Rigid registration
  get rigidPanel() { return '[data-cy="wrapper-rigid-panel"]'}
  // Automatic registration
  get fullImageDropdown() { return '[data-cy="full-image-technique-dropdown"]' }
  get translationDropdown() { return '[data-cy="translation-roll-technique-dropdown"]' }
  get scanDateInfo() { return '[data-cy="scan-date"]' }
  get startButton() { return '[data-cy="start-button"]' }
  // Balance
  get balancePanel() { return '.section-sliders'}
  get planColorPicker() { return '[data-cy = "plan-color-picker"]'}
  get planButton() { return '[data-cy = "balance-plan-btn"]'}
  get balanceSlider() { return '[data-cy="image-balance-slider"]'}
  get scanButton() { return '[data-cy = "balance-scan-btn"]'}
  get scanColorPicker() { return '[data-cy = "scan-color-picker"]'}
  get checkerCheckbox() { return '[data-cy = "image-checker-checkbox"]'}
  get checkerSlider() { return '[data-cy = "image-checker-slider"]'}
  // Manual registration
  get manualPanel() { return '.manual-registration'}
  get rollTopButton() { return '[data-cy="arrow-top-circle"]'}
  get rollDownButton() { return '[data-cy="arrow-bottom-circle"]'}
  get arrowUpButton() { return '[data-cy = "arrowUp"]'}
  get arrowRightUpButton() { return '[data-cy = "arrowRightUp"]'}
  get arrowLeftButton() { return '[data-cy = "arrowLeft"]'}
  get switchLayoutButton() { return '[data-cy="switch-layout-button"]'}
  get arrowRightButton() { return '[data-cy = "arrowRight"]'}
  get arrowDownLeftButton() { return '[data-cy = "arrowDownLeft"]'}
  get arrowDownButton() { return '[data-cy = "arrowDown"]'}
  get lateralTranslationInput() { return '[data-cy="translationLateral"]'}
  get longTranslationInput() { return '[data-cy="translationLong"]'}
  get verticalTranslationInput() { return '[data-cy="translationVertical"]'}
  get pitchInput() { return '[data-cy="pitch-rotational-adjustment"]'}
  get rollInput() { return '[data-cy="roll-rotational-adjustment"]'}
  get yawInput() { return '[data-cy="yaw-rotational-adjustment"]'}
  get resetButton() { return '[data-cy="translationReset"]'}
  get coarseRadio() { return '[data-cy = "checkCoarse"]'}
  get fineRadio() { return '[data-cy = "checkFine"]'}
  get approvalCheckbox() { return '[data-cy="show-approval-confirmation"]'}
  get acceptButton() { return '[data-cy="accept-registration-button"]'}
  get exportButton() { return '[data-cy="export-button"]'}
  get lasersCheckbox() { return '[data-cy="lasers-checkbox"]'}
  // Contours
  get sidebar() { return '.side-bar'; }
  get deformedButton() { return '[data-cy="deformed-button"]'; }
  get aiButton() { return '[data-cy="AI-button"]'; }
  get deformedList() {return '[data-cy="deformed-list"]'}
  get voiListContours() {return '[data-cy="voi-table"]'}
  get bumperButton() { return '[data-cy="bumper-button"]'; }
  get slider() { return '[data-cy="slider-bar-contours"]'; }
  get sliderThumb() { return '.mat-slider-thumb'; }
  get bumperSizeInput() { return '[data-cy="bumper-size"]'; }
  get deleteButton() { return '[data-cy="contours-delete"]'; }
  get deleteSweepButton() { return '[data-cy="contours-delete-sweep"]'; }
  get undoButton() { return '[data-cy="contours-undo"]'; }
  get redoButton() { return '[data-cy="contours-redo"]'; }
  get approveContourButton() { return '[data-cy="contours-accent"]'; }
  // Daily Dose
  get doseCodeList() { return '.dose-code'; }
  get doseCodeTitle() { return '.dose-code-tittle'; }
  get doseCodeItem() { return '.dose-code-item'; }
  get scoreCardComponent() { return '.scorecard'; }
  get scoreCardButton(){return '[data-cy="scorecard-button"]'}
  get scoreCardTable() { return '[data-cy="score-card-table"]'; }
  get graphDailyLabel() { return '[data-cy="daily-graph-label"]'; }
  get graphRefLabel() { return '[data-cy="ref-graph-label"]'; }
  get dvhSettings() {return '[data-cy="graph-options-button"]'}
  get dvhGraph() { return '[data-cy="dvh-graph"]'; }
  // VOIs
  get voiPlanningList() {return '[data-cy="voi-planning-list"]'}
  get voiTable() { return '[data-cy = "voi-table"]'; }
  get voiRow() { return '[role = "row"]'; }
  get voiRowColor() {return '[class="voi-item-color"]'}
  get voiCheckbox() { return '[type = "checkbox"]'; }
  get voiLabel() { return '.voi-item-label'; }
  //Metrics
  get metricsButton() {return '[data-cy="metrics-button"]'}
  get metricsTable() {return '[data-cy="metrics-data-table"]'}
  //Rergistration Dose
  get registrationDoseButton() {return '[data-cy="registration-button"]'}
  // Canvas
  get visualizationPanel(){return 'app-image-panel.ng-star-inserted'}
  get imageCanvasParent() { return '#image-canvas-2d'; }
  get imageCanvasChildren() { return '.ng-star-inserted'; }
  get canvasSlicer() { return '.slice-selection-container'; }
  get rightSliceArrow() { return '.slice-selection-right'; }
  get leftSliceArrow() { return '.slice-selection-left'; }
  get sliceNumber() { return '.slice-selection-input'; }
  get canvasSubImages() {return '[data-cy="canvas-sub-image"]'}
  //image window controls
  get verticalSliderBar() {return '.slider__track';}
  get verticalControlUpperBar(){return '.slider__thumb.slider__thumb--max.slider__thumb--active.ng-star-inserted';}
  //Notes Modal
  get notesModal() { return '.mat-dialog-container'; }
  get notesModalCloseButton() { return '.close'; }
  get notesInput() { return '.ql-editor'; }
  get notesToolbar() { return '.ql-toolbar'; }
  get notesBoldButton() { return '.ql-bold'; }
  get notesItalicButton() { return '.ql-italic'; }
  get notesLinkButton() { return '.ql-link'; }
  get notesImageButton() { return '.ql-image'; }
  get notesCharacterCounterText() { return '.rich-text__char-count'; }
  get saveButton() { return '.rich-text__button'; }
  get filterComponent() { return '.filters-section'; }
  get dateRangeInput() { return '.mat-date-range-input-container'; }
  get noteList() { return '.notes'; }
  get noteText() { return '.note'; }
  get notePrintButton() { return '.print-button'; }
  //Dose Panel
  get dosePanel() { return '.scorecard'; }
  get socrecardFooter() { return '.scorecard-footer'; }
  get dvhOptionsButton() { return '.dvh-options-button'; }
  get dvhOptionsModal() { return '.options-container'; }
  get dvhCheckbox() { return '.dvh-options-checkbox'; }
  get dvhVoiColor() { return '.voi-color'; }
  get dvhVoiLabel() { return '.name-column'; }
  get backgroundColorRadio() { return '.mat-radio-button'; }
  get okButton() { return '.options-confirm'; }
}

export default new OaMachine();
