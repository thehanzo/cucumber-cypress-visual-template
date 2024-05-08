# Accuray Automated Testing

This project runs automated End to End tests against Accuray's [Online Adaptive](https://oadevelopment.accuray.com/)

**Tech stack**
- Typescript
- Cypress
- Cucumber
- Applitools


# Installation
After clonning the Repo, use your terminal navigate to your project's folder then run the following commands
```
npm install
```

# Running
There are several options to run the automated tests:

Cypress local dashboard
```
npm run gui
```

Run Cypress only on Chrome
```
npm run chrome
```

Run Cypress only on Firefox
```
npm run firefox
```

Run Cypress only on Edge
```
npm run edge
```

Run tests based on tags (eg: @test)
```
npx cypress-tags run -e TAGS='@test'
```

Ignore tests based on tags (eg: @ignore)
```
npx cypress-tags run -e TAGS='not @ignore'
```
# Reports
After each run, the automation framework will create a series of reporting data:
- An [HTML](https://user-images.githubusercontent.com/68253320/153429202-a9dad4d4-b956-42a8-bdd3-5078dcbbb8ec.png) report
- [Video captures](https://user-images.githubusercontent.com/68253320/153429757-5032abd5-acca-4db7-8753-003176360422.png) of the test runs
- [Screenshots](https://user-images.githubusercontent.com/68253320/153430357-31195fa2-7eb4-42c2-94b0-59fd2eb59a8a.png) are taken when a Test run fails




# Visual regression - non applitools plugin
There is a plugin that allows for visual regression, using pixel-by-pixel strategy

Command to take a full page screenshot:
```
cy.compareSnapshot("name", 0.5);
```
Where "name" is the image name/tag
and "0.5" is the percentage of failed pixel that triggers a failure (50% in example above)

Command to take an element screenshot:
```
oaMachinePage.getCanvasParent().compareSnapshot("name", 0.5);
```

# Running
To run Visual regression tests you need to add an env variable to the Cypress run command

First you need to generate the base images:
```
npx cypress run -e type=base
```

Run visual regression:
```
npx cypress run -e type=actual
```

# Validations
Validations made during the regression tests will generate a new folder containing the differences between ***base*** and ***actual***
Base folder: cypress/snapshots/base/
Differences folder: cypress/snapshots/diff/