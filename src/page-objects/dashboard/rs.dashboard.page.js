const { $ } = require("@wdio/globals");
const {
    pauseBrowser,
    waitForRedirectionToExpectedURL,
} = require("../../utils/BrowserUtils");
const reusableFunctions = require("../../utils/reusableFunctions");

class Dashboard {
    /**
     * define all locators
     */
    dashboardPageTitle = "//h3[text()='Connections']";
    leftPaneMenu = "div.ant-layout-sider-children";
    leftPaneSourcesLink =
        "//div[@class='ant-layout-sider-children']//a[@href='/sources']";
    leftPaneConnectionsLink =
        "//div[@class='ant-layout-sider-children']//a/span[text()='Connections']";
    leftPaneDestinationsLink =
        "//div[@class='ant-layout-sider-children']//a/span[text()='Destinations']";
    pageTitle = "//h3[text()='${value}']";
    overviewTab = "#rc-tabs-0-tab-Overview";
    addDestinationButton = "div button.ant-dropdown-trigger";
    useExistingDDestination =
        "//li/span[text()='Use Existing Destination']/parent::li";
    continueButton = "//button/span[text()='Continue']/parent::button";
    refreshButton = "//*[@class='ant-btn-loading-icon']//parent::button";
    disconnectDestOption =
        "//span[@class='ant-dropdown-menu-title-content']/parent::li";
    /**
     * Parameterized getters
     */
    get getSourceByName() {
        // prettier-ignore
        return (sourceName) => $(`//div[@class='ant-table-body']//div[text()='${sourceName}']//ancestor::tr`);
    }

    getRadioButtonForDestination(value) {
        return $(`//td//div[text()='${value}']//ancestor::td`);
    }

    getPageTitle(title) {
        return $(`//h3[text()='${title}']`);
    }

    get3DotsButtonForDestination(value) {
        return $(
            `//tr//div[text()='${value}']/ancestor::td/following-sibling::td[2]/button`
        );
    }
    /**
     * getter methods
     */
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
    get getOverviewTab() {
        return $(this.overviewTab);
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
    /**
     * methods for interacting with elements
     */

    async checkConnectionLineOnConnPage() {
        await this.clickConnectionLink();
        await this.getPageTitle("Connections");
    }
    async clickContinueOnConfig() {
        await this.getContinueButton.isDisplayed();
        await this.getContinueButton.click();
        await this.getContinueButton.waitForDisplayed({ reverse: true }); //wait for button to disappear
    }
    async selectUseExistingDistFromAddDestination() {
        await this.getOverviewTab.click();
        await this.getRefreshButton.isDisplayed(); // this is intentional as position of Add Destination button changes after refresh is displayed
        await pauseBrowser(2000); // Intention wait to allow movement of button //TODO - search for ways to remove this hard wait
        await this.getAddDestinationButton.moveTo();
        await pauseBrowser(1000); // Intention wait to allow dropdown to open
        await this.getUseExistingDDestination.click();
        await this.getPageTitle("Connect existing destination").isDisplayed();
    }
    async clickOnSource(sourceName) {
        await this.getSourceByName(sourceName).isDisplayed();
        await this.getSourceByName(sourceName).click();
        await this.getPageTitle(sourceName).isDisplayed();
    }
    async clickConnectionLink() {
        await this.getLeftPaneConnectionsLink.click();
    }
    async navigateToSourcePage() {
        await this.getLeftPaneSourcesLink.click();
        await this.getPageTitle("Sources").isDisplayed();
    }

    async selectRadioAgainstDestAndContinue(destinationName) {
        await this.getRadioButtonForDestination(destinationName).click();
        await this.getContinueButton.isDisplayed();
        await this.getContinueButton.click();
        await this.getPageTitle("HTTP Dev").isDisplayed();
    }
}
module.exports = new Dashboard();
