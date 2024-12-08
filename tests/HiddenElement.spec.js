const{test,expect}= require('@playwright/test')

test("hidden element" ,async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await  page.goto("http://google.com");
    await page.goBack();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();




});