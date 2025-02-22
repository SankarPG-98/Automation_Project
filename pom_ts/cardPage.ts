import{test,expect,Page,Locator} from '@playwright/test'

export class CardPage {

    page:Page
    productList:Locator
    username:Locator
    dropdown:Locator
    placeOrderButton:Locator
    checkout:Locator
    postcode:Locator
    country:Locator

    constructor(page) {
        this.page = page;
        this.productList = page.locator("div li");
        this.dropdown = page.locator(".ta-results");
        this.username = page.locator("[class*='user__name'] [type='text']");
        this.placeOrderButton = page.locator("text=Place Order");
        this.checkout = page.locator("text=Checkout");
        this.postcode = page.locator("input[value*='4542']");
        this.country = page.locator("[placeholder='Select Country']");
    }

    async enterDetails(productName:string,postCode:string, partialCountry:string) {
        await this.productList.first().waitFor({ state: 'visible' });
        const boolean = await this.page.locator(`h3:has-text("${productName}")`).isVisible();
        expect(boolean).toBeTruthy();
        await this.checkout.click();
        await this.postcode.fill(postCode);
        await this.page.locator("[placeholder='Select Country']").type(partialCountry);
    }

    async placeOrder(country:string, userEmail:string) {
        const dropdown = this.page.locator(".ta-results");
        await dropdown.waitFor({ state: 'visible' });
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text === country) {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }

        expect(await this.username.first()).toHaveText(userEmail);
        await this.placeOrderButton.click();  // Ensure it's the right locator.
    }
}

