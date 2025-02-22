
import{test} from '@playwright/test'
import {PomManager} from '../pom_ts/pomManager'
import{customTest}from '../Utils_ts/orderPlace'

//conver json to string then to object
const testData = JSON.parse(JSON.stringify(require("../Utils/placeOrder.json")));

//test.describe.configure({mode:'parallel'});
test.describe.configure({mode:'serial'});
for(const data of testData){
test(`EndToEnd test for data ${data.productName}`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const pomManager= new PomManager(page);

    await pomManager.getLoginPage().gotoUrl(data.url);
    await pomManager.getLoginPage().validLogin(data.emailId, data.password);
    await pomManager.getDashboardPage().addProducts(data.productName);
    await pomManager.getCardPage().enterDetails(data.productName, data.postCode, "ind");
    await pomManager.getCardPage().placeOrder(data.country, data.emailId);
    await pomManager.getThankyouPage().validateProduct();

});}

customTest(`@Web  EndToEnd `, async ({ browser ,testDataOrder}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const pomManager= new PomManager(page);

    await pomManager.getLoginPage().gotoUrl(testDataOrder.url);
    await pomManager.getLoginPage().validLogin(testDataOrder.emailId, testDataOrder.password);
    await pomManager.getDashboardPage().addProducts(testDataOrder.productName);
    await pomManager.getCardPage().enterDetails(testDataOrder.productName, testDataOrder.postCode, "ind");
    await pomManager.getCardPage().placeOrder(testDataOrder.country, testDataOrder.emailId);
    await pomManager.getThankyouPage().validateProduct();

})