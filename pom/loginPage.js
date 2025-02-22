class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailId = page.locator("[id='userEmail']");
        this.password = page.locator("[id='userPassword']");
        this.loginBtn = page.locator("[id='login']");
    }

    async gotoUrl(url) {
        await this.page.goto(url);
    }

    async validLogin(userEmail, userPassword) {
        await this.emailId.fill(userEmail);
        await this.password.fill(userPassword);
        await this.loginBtn.click();
    }
}

module.exports = { LoginPage };