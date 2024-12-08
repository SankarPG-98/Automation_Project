const{test} = require('@playwright/test')

test("Frames",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("ul li a[href='lifetime-access']:visible").click();
    const frameText =await framesPage.locator("div.text h2").textContent();
    console.log(frameText.split(" ")[1]);

});