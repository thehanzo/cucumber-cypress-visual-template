import Base from './base';

class Landing extends Base {

  //Online Adaptative countours title
  get oaContoursTitle() {return '[class="cdk-drag"]'}

  // Site information
  get patientSection() { return '.patient-select-content'; }

  //List of Patients card Components
  get patientListCard() {return '[data-cy="patient-list-content"]'}
  get titleCard() {return '.patient-select__title'}
  get searchPatientField() {return '[data-cy="patient-search-box"]'}
  get patientList() { return '[data-cy="patient-list"]'}

  //List of Patient plans info Components
  get patientInfoSection() {return '[data-cy="patient-plans-data"]'}

  //List of Patient fractions components
  get fractionsInfoSection() {return '[data-cy="fraction-data"]'}

  //Column Names
  get columnTitles() {return '[role="columnheader"]'}

  // Patient list button actions
  get OKButtonPatientList() {return '[data-cy="ok-button"]'}
  get ResetButtonPatientList() {return '[data-cy="reset-button"]'}
  get PatientListFooter() {return '.patient-select__multiple-actions'}
}

export default new Landing();
