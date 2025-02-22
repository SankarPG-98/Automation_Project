import{test,expect,Page,Locator} from '@playwright/test'
export class DashboardPage{

             page:Page 
             logo:Locator
             products:Locator
             routerLink:Locator
    constructor(page){
        this.page = page;
        this.logo = page.locator("[class='logo-holder logo-7']");
        this.products =  page.locator("div h5");
        this.routerLink = page.locator("[routerlink*='cart']");

    }

    async addProducts(productName:String){
        await this.logo.waitFor({ state: 'visible' });
        await this.products.first().waitFor({ state: 'visible' });
        const products = await this.products;

        const count = await products.count();
        for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await this.page.locator("//button[text()=' Add To Cart']").nth(i).click();
            break;
        }
    }

    await this.routerLink.click();}

    

    
}
module.exports={DashboardPage}