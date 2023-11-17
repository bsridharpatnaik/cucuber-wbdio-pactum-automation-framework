const { $ } = require("@wdio/globals");
const { browser } = require("@wdio/globals");

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
    useExistingDDestination = "//li[text()='Use Existing Destination']";
    // Parameterized getters
    get getSourceByName() {
        return (sourceName) => $(`//div[@class='ant-table-body']//div[text()='${sourceName}']//ancestor::tr`);
    }

    get getPageTitle() {
        return (value) => $(this.pageTitle);
    }

    // Getter methods
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
    get getAddDestinationButton() {
        return $(this.addDestinationButton);
    }
    get getUseExistingDDestination() {
        return $(this.useExistingDDestination);
    }
    get getLeftPaneDestinationsLink() {
        return $(this.leftPaneDestinationsLink);
    }

}
module.exports = new Dashboard();
