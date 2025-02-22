const{test,expect}=require('@playwright/test')


test(' EndToEnd ' , async ({browser}) => {



    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");

    const productName = "IPHONE 13 PRO";
    await page.locator("[id='userEmail']").fill("sankarpg@gmail.com");
    await page.locator("[id='userPassword']").fill("102030@sS");
    await page.locator("[id='login']").click();
    await page.locator("[class='logo-holder logo-7']").waitFor();
    await page.locator("div h5").first().waitFor();
    const products = await page.locator("div h5");
   
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
       if (await products.nth(i).locator("b").textContent() === productName) {
          
           await page.locator("//button[text()=' Add To Cart']").nth(i).click();
           break;
       }
    }

    await page.locator("[routerlink*='cart']").click();

    await page.locator("div li").first().waitFor();

    const boolean = await page.locator(`h3:has-text("${productName}")`).isVisible();

    expect(await boolean).toBeTruthy();

    await page.locator("text=Checkout").click();

    await page.locator("input[value*='4542']").fill("4444 6667 8899");

    await page.locator("[placeholder='Select Country']").pressSequentially("ind");

    const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
   expect (await page.locator("[class*='user__name'] [type='text']").first()).toHaveText("sankarpg@gmail.com");
   
   await  page.locator("text=Place Order ").click();

   await page.locator("[class='hero-primary']").waitFor();

   expect (await page.locator("[class='hero-primary']")).toHaveText(" Thankyou for the order. ");

   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

   await page.locator("button[routerlink*='myorders']").click();

   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }

   await page.locator("[class^='col-text']").waitFor();

   const expOrderId = await page.locator("[class^='col-text']").innerText();

   expect(orderId.includes(expOrderId)).toBeTruthy();





  





    
});


