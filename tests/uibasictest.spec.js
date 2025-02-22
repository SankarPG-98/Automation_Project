const{test, expect}=require('@playwright/test');


test ('First Playwright Test ',async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com"); 
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    

});

test('default playwright launch',async ({page})=>{

 //By default playwright will launch new page if we don't have any pre-requirement like with cookies we want to launch like
 //by default playwright will open browser in headless mode
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator("#username");
    const signIn = page.locator("[id='signInBtn']");
    const products = page.locator(".card-body a");
    console.log(await page.title());
    await username.fill("sankar");
    await page.locator("#password").fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signIn.click();
    
    await page.waitForLoadState("networkidle");
// it will wait for all network call to load complete if it not works use alternative method  waitFor() method

    await page.locator(".card-body a").first().waitFor();
    console.log(await products.allTextContents());
});

test("UI validation ", async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator("#username");
    const signIn = page.locator("[id='signInBtn']");
    const blinkingLink = page.locator("[target$='blank']");

    await username.fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");

      // dropdown actions
    const dropdown = page.locator("select.form-control"); 
    await dropdown.selectOption("teach");

    //radio button actions
    await page.locator("(//*[@value='user']//following::span)[1]").click();
    await page.locator("button#okayBtn").waitFor();
    await page.locator("button#okayBtn").click();
    expect(await page.locator("(//*[@value='user']//following::span)[1]")).toBeChecked();

    //checkbox actions
    
    await page.locator("#terms").click();
    expect(await page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    //Assertion for attribute 
    await expect(blinkingLink).toHaveAttribute("class","blinkingText");
   
   
});

test("child window handles",async({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator("#username");
    const blinkingLink = page.locator("[target$='blank']");
    //why we are using promise ?
      /*
        If we want to navigate to child window after clicking the link it will open new window but js is asynchronous 
        before fulfilling it will go so that if we do parallely we can handle with asynchronus so if it return promise only
        we can move to next step so captuting steps in promise .

      */
    const [newpage] = await Promise.all([context.waitForEvent('page'),blinkingLink.click()]);
    const text = await newpage.locator(".red").textContent();
    const arrayText= text.split("@");
    const domainName =arrayText[1].split(" ")[0];
    console.log(domainName);
    await username.fill(domainName);;
});