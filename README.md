# cucuber-wbdio-pactum-automation-framework

Hybrid automation testing framework built using NodeJS, PactumJS, CucumberJS, Webdriver.io, etc,

## Overview

## Overview

**cucuber-wbdio-pactum-automation-framework** is an end-to-end testing framework designed to ensure the reliability and functionality of any Web and API E2E testing. It leverages industry-leading technologies and tools to streamline the testing process and provide a robust testing solution. Key components include:

- **Pactum JS for API Testing:** Pactum JS is employed for comprehensive API testing, allowing seamless validation of RESTful services and endpoints.

- **Cucumber JS for Behavior-Driven Development (BDD):** Cucumber JS facilitates BDD practices, enabling clear communication between technical and non-technical team members through executable specifications.

- **WebDriverIO for UI Testing:** The framework utilizes WebDriverIO to automate browser interactions, ensuring thorough end-to-end testing of web applications.

- **Other Tools:** Multiple Cucumber HTML Reporter for reporting, Winston for logging. 


## Features

List the key features of your automation framework:

- 
## Prerequisites

Specify any prerequisites or dependencies that users need to have installed before using your framework.

- Node.js
- NPM
- WebdriverIO
- CucumberJS
- PactumJS
- dotenv
- Winston
- Webdriver Re-Run Service
- Selenium Standalone etc.

## Getting Started

Instructions for setting up the project locally. Include steps for installing dependencies, configuring, and running tests.

```bash
# Clone the repository
git clone https://github.com/bsridharpatnaik/cucuber-wbdio-pactum-automation-framework

# Change to the project directory
cd cucuber-wbdio-pactum-automation-framework

# Install dependencies
npm install

Note - There might be some dependencies which WebDriverIO installs as part of configuration. You can run wdio config and install the same.

# Execution Commands

# Run all API and Web tests on dev environment using default browser
npm run dev '' 

# Run all API and Web tests on test environment using default browser
npm run test '' 

#Run all tests on Chrome browser
npm run "test:chrome" ''

#Run all tests on Firefox browser
npm run "test:firefox" ''

#Run Tag specific tests on Chrome browser
npm run "test:chrome" '@AnyTag'

#Run Tag specific tests on Firefox browser
npm run "test:firefox" '@AnyTag'

# Trigger linting
npm run lint

# npm run wdio
Trigger WebdriverIO Configuration
```bash

