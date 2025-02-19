const { test, expect } = require('@playwright/test');
const {PomManager } = require('../pom/pomManager');

test('EndToEnd', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const url = "https://rahulshettyacademy.com/client";
    const emailId = "sankarpg@gmail.com";
    const password = "102030@sS";
    const productName = "IPHONE 13 PRO";
    const country = " India";
    const postCode = "4444 6667 8899";
    const pomManager= new PomManager(page);

    await pomManager.getLoginPage().gotoUrl(url);
    await pomManager.getLoginPage().validLogin(emailId, password);
    await pomManager.getDashboardPage().addProducts(productName);
    await pomManager.getCardPage().enterDetails(productName, postCode, "ind");
    await pomManager.getCardPage().placeOrder(country, emailId);
    await pomManager.getThankyouPage().validateProduct();

});