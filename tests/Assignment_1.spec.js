
const{test}=require('@playwright/test')



test('Assignment',async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("[id='userEmail']").fill("sankarpg@gmail.com");
    await page.locator("[id='userPassword']").fill("102030@sS");
    await page.locator("[id='login']").click();
    await page.locator(".card-body b").first().waitFor();
    console.log(await page.locator(".card-body b").allTextContents());
});