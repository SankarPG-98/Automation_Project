const { test, expect } = require('@playwright/test');
class ThankyouPage{

    constructor(page){

        this.page=page;
        this.thanku = page.locator("[class='hero-primary']")
        this.thankyouText =  page.locator("[class='hero-primary']")
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
        this.myOrders = page.locator("button[routerlink*='myorders']")
        this.body = page.locator("tbody")
        this.bodyRow = page.locator("tbody tr")
        this.columnText = page.locator("[class^='col-text']")

    }


    async validateProduct(){
        

        await this.thanku.waitFor({ state: 'visible' });
    
        expect(await this.thankyouText).toHaveText(" Thankyou for the order. ");
    
        const orderId = await this.orderId.textContent();
        console.log(orderId);
    
        await this.myOrders.click();
        await this.body.waitFor({ state: 'visible' });
        const rows = await this.bodyRow;
    
        for (let i = 0; i < await rows.count(); ++i) {
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
    
        await this.columnText.waitFor({ state: 'visible' });
    
        const expOrderId = await this.columnText.innerText();
        expect(orderId.includes(expOrderId)).toBeTruthy();
    }
}

module.exports={ThankyouPage};