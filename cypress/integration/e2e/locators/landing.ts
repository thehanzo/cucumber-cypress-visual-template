import Base from './base';

class Landing extends Base {
  // Site information
  get header() { return '[type = "header"]'; }
  get languageDropdown() { return '[data-cy="app-language-selector"]'; }
  get logoutButton() { return '[data-cy = "logout-button"]'; }
  get machinesSection() { return '.machines-section'; }
  get optionsSection() { return '.options-section'; }
  get offlineReviewTile() { return '[data-cy="OFFLINE_REVIEW_LABEL"]'; }
  get demoTile() { return '[data-cy="DEMO_LABEL"]'; }
  get adminTile() { return '[data-cy="ADMIN_LABEL"]'; }
  get onlineMachine1() { return '[data-cy = "active-machine-0"]'; }
}

export default new Landing();
