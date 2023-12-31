const { $ } = require("@wdio/globals");
const { pauseBrowser, waitForRedirectionToExpectedURL } = require("../../utils/BrowserUtils");
const reusableFunctions = require("../../utils/ReusableFunctions");
const { logger } = require("../../../config/logger");

class Dashboard {
    /**
     * define all locators
     */
    dashboardPageTitle = "//h3[text()='Connections']";
    leftPaneMenu = "div.ant-layout-sider-children";
    leftPaneSourcesLink = "//div[@class='ant-layout-sider-children']//a[@href='/sources']";
    leftPaneConnectionsLink = "//div[@class='ant-layout-sider-children']//a/span[text()='Connections']";
    leftPaneDestinationsLink = "//div[@class='ant-layout-sider-children']//a/span[text()='Destinations']";
    pageTitle = "//h3[text()='${value}']";
    statsOnEvents = "//div[contains(@class,'events_container')]/div/span";
    addDestinationButton = "div button.ant-dropdown-trigger";
    useExistingDDestination = "//li/span[text()='Use Existing Destination']/parent::li";
    continueButton = "//button/span[text()='Continue']/parent::button";
    refreshButton = "//*[@class='ant-btn-loading-icon']//parent::button";
    disconnectDestOption = "//span[@class='ant-dropdown-menu-title-content']/parent::li";
    connectionLine = "#leader-line-container svg";
    confirmDisconnectButton = "//button/span[text()='Confirm']/parent::button";
    /**
     * Parameterized getters
     */
    get getTabOnSourceOrDestination(){
        return (name) => $(`//div[@class='ant-tabs-nav-list']//div[text()='${name}']`);
    }
    get getSourceOrDestinationByName() {
        return (name) => $(`//div[@class='ant-table-body']//div[text()='${name}']//ancestor::tr`);
    }

    getRadioButtonForDestination(value) {
        return $(`//td//div[text()='${value}']//ancestor::td`);
    }

    getPageTitle(title) {
        return $(`//h3[text()='${title}']`);
    }

    get3DotsButtonForDestination(value) {
        return $(`//tr//div[text()='${value}']/ancestor::td/following-sibling::td[2]/button`);
    }
    /**
     * getter methods
     */
    get getStatsOnEvents() {
        return $$(this.statsOnEvents);
    }
    get getDashboardPageTitle() {
        return $(this.dashboardPageTitle);
    }
    get getLeftPaneMenu() {
        return $(this.leftPaneMenu);
    }
    get getLeftPaneSourcesLink() {
        return $(this.leftPaneSourcesLink);
    }
    get getLeftPaneConnectionsLink() {
        return $(this.leftPaneConnectionsLink);
    }
    get getContinueButton() {
        return $(this.continueButton);
    }
    get getAddDestinationButton() {
        return $(this.addDestinationButton);
    }
    get getUseExistingDDestination() {
        return $(this.useExistingDDestination);
    }
    get getLeftPaneDestinationsLink() {
        return $(this.leftPaneDestinationsLink);
    }
    get getRefreshButton() {
        return $(this.refreshButton);
    }
    get getDisconnectDestOption() {
        return $(this.disconnectDestOption);
    }
    get getConnectionLine() {
        return $(this.connectionLine);
    }
    get getConfirmDisconnectButton() {
        return $(this.confirmDisconnectButton);
    }
    /**
     * methods for interacting with elements
     */

    async checkConnectionLineOnConnPage() {
        await this.clickConnectionLink();
        await this.getPageTitle("Connections");
        await pauseBrowser(2000); //intentional for page to load
        await this.getConnectionLine.isDisplayed();
    }

    async checkConnectionLineNotAvailableOnConnPage() {
        await this.clickConnectionLink();
        await this.getPageTitle("Connections");
        await pauseBrowser(2000); //intentional for page to load
        await this.getConnectionLine.isDisplayed({ reverse: true });
    }

    async clickContinueOnConfig() {
        await this.getContinueButton.isDisplayed();
        await this.getContinueButton.click();
        await this.getContinueButton.waitForDisplayed({ reverse: true }); //wait for button to disappear
    }
    async selectUseExistingDistFromAddDestination() {
        await this.getTabOnSourceOrDestination("Overview").click();
        await this.getRefreshButton.isDisplayed(); // this is intentional as position of Add Destination button changes after refresh is displayed
        await pauseBrowser(2000); // Intention wait to allow movement of button //TODO - search for ways to remove this hard wait
        await this.getAddDestinationButton.moveTo();
        await pauseBrowser(1000); // Intention wait to allow dropdown to open
        await this.getUseExistingDDestination.click();
        await this.getPageTitle("Connect existing destination").isDisplayed();
    }
    async clickOnSourceOrDestination(name) {
        await this.getSourceOrDestinationByName(name).waitForDisplayed();
        await this.getSourceOrDestinationByName(name).click();
        await this.getPageTitle(name).isDisplayed();
    }

    async readAndLogEventStats() {
        await pauseBrowser(2000);// intentional. Can be replaced using wait untill
        await this.getStatsOnEvents[0].waitForDisplayed();
        logger.info("Delivered Events - " + (await this.getStatsOnEvents[0].getText()));
        logger.info("Failed Events - " + (await this.getStatsOnEvents[1].getText()));
    }

    async gotToEventsTabOnDestination() {
        await this.getTabOnSourceOrDestination("Events").click();
    }
    async clickConnectionLink() {
        await this.getLeftPaneConnectionsLink.click();
    }
    async navigateToSourcePage() {
        await this.getLeftPaneSourcesLink.click();
        await this.getPageTitle("Sources").isDisplayed();
    }

    async navigateToDestinationsPage() {
        await this.getLeftPaneDestinationsLink.click();
        await this.getPageTitle("Destinations").isDisplayed();
    }

    async selectRadioAgainstDestAndContinue(destinationName) {
        await this.getRadioButtonForDestination(destinationName).click();
        await this.getContinueButton.isDisplayed();
        await this.getContinueButton.click();
        await this.getPageTitle("HTTP Dev").isDisplayed();
    }

    async checkIfDestAvailableUnderSource(sourceName, destinationName) {
        await this.getLeftPaneSourcesLink.click();
        await this.getPageTitle("Sources").isDisplayed();
        await this.getSourceOrDestinationByName(sourceName).click();
        await this.get3DotsButtonForDestination(destinationName).isDisplayed();
    }

    async disconnectDestination(destinationName) {
        await pauseBrowser(3000); //Intentional to allow loading of refresh button.
        await this.get3DotsButtonForDestination(destinationName).click();
        await this.getDisconnectDestOption.click();
        await this.getConfirmDisconnectButton.click();
        await this.getConfirmDisconnectButton.waitForDisplayed({ reverse: true }); //wait for button to disappear
        await this.get3DotsButtonForDestination(destinationName).waitForDisplayed({reverse: true});
    }
}
module.exports = new Dashboard();
