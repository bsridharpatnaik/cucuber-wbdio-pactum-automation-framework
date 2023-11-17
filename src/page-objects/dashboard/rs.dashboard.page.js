const { $ } = require("@wdio/globals");
const { browser } = require("@wdio/globals");

class Dashboard {
    /**
     * define all locators
     */
    dashboardPageTitle = "//h3[text()='Connections']";
    leftPaneMenu = "div.ant-layout-sider-children";
    leftPaneSourcesLink = "//div[@class='ant-layout-sider-children']//a/span[text()='Sources']";
    leftPaneConnectionsLink = "//div[@class='ant-layout-sider-children']//a/span[text()='Connections']";
    leftPaneDestinationsLink = "//div[@class='ant-layout-sider-children']//a/span[text()='Destinations']";

    //Source tab
    sourceByName = "//div[@id='members-table']//div[@class='ant-table-body']//div[text()='${value}']";

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
    get getLeftPaneDestinationsLink() {
        return $(this.leftPaneDestinationsLink);
    }
    get getSourceByName() {
        return value => $(this.sourceByName);
    }
}
module.exports = new Dashboard();
