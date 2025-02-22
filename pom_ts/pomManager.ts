import { LoginPage } from './loginPage';
import { DashboardPage } from './dashboardPage';
import { CardPage } from './cardPage';
import { ThankyouPage } from './thankYouPage';
import { Page } from "@playwright/test";

export class PomManager {

        page:Page
        loginPage:LoginPage
        dashboardPage:DashboardPage
        cardPage:CardPage
        thankyouPage:ThankyouPage
        
    constructor(page:any) {
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