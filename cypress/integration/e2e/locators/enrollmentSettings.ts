import Base from './base';

class EnrollmentSettings extends Base {
  // Settings
  get contoursContainer() { return '[data-cy="contours-container"]'; }
  get limbusContainer() { return '[data-cy="limbus-assist"]'; }
  get noneGroupContainer() { return '[data-cy="none-group-box"]'; }
  get deformGroupContainer() { return '[data-cy="deform-group-box"]'; }
  get rigidGroupContainer() { return '[data-cy="rigid-group-box"]'; }
  get limbusAnatomyDropdown() { return '[data-cy="limbus-select-box"]'; }
  get dropdownAnatomyMenu() {return '.mat-select-trigger';} 
  get expandedDropdownAnatomyMenu(){return '.mat-select-panel-wrap';}
  get tableDeformVOIlist(){return 'div.cdk-drag';}
  get anatomyText(){return '.mat-select-min-line';}
  get anatomyTextDefault(){return '.mat-select-placeholder';}
  // Footer
  get saveButton(){return '[data-cy="save-button"]'}
  get cancelButton(){return '[data-cy="cancel-button"]'}
}

export default new EnrollmentSettings();
