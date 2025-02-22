const { LoginPage } = require('./loginPage');
const { DashboardPage } = require('./dashboardPage');
const { CardPage } = require('./cardPage');
const { ThankyouPage } = require('./thankYouPage');

class PomManager {

    constructor(page) {
        this.page=page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cardPage = new CardPage(page);
        this.thankyouPage = new ThankyouPage(page);
    }

    getLoginPage() {
        return this.loginPage; // Fixed to return this.loginPage instead of this.LoginPage
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getCardPage() {
        return this.cardPage;
    }

    getThankyouPage() {
        return this.thankyouPage;
    }
}

module.exports={PomManager};