import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import patientListPage from '../e2e/pages/patientList'

When("user selects patient {string} from the patient list", (patient) => {
  patientListPage.selectPatient(patient)
});

When("patient list components are displayed correctly", () => {
  patientListPage.validateListOfPatientsComponent()
  patientListPage.validatePatientPlans()
  patientListPage.validatePatientFractions()
  patientListPage.validatePatientButtons()
});
