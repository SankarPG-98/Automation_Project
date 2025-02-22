import{test,expect,Page,Locator} from '@playwright/test'
export class LoginPage {

    page:Page
    emailId:Locator
    password:Locator
    loginBtn:Locator

    constructor(page) {
        this.page = page;
        this.emailId = page.locator("[id='userEmail']");
        this.password = page.locator("[id='userPassword']");
        this.loginBtn = page.locator("[id='login']");
    }

    async gotoUrl(url:string) {
        await this.page.goto(url);
    }

    async validLogin(userEmail:string, userPassword:string) {
        await this.emailId.fill(userEmail);
        await this.password.fill(userPassword);
        await this.loginBtn.click();
    }
}

