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
}
module.exports = new Dashboard();
