const{test,expect}=require('@playwright/test')


test(' Special Locator EndToEnd ' , async ({browser}) => {



    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");

    const productName = "IPHONE 13 PRO";

    await page.getByPlaceholder("email@example.com").fill("sankarpg@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("102030@sS");
    await page.getByRole("button",{name:"Login"}).click();
    await page.locator("div h5").first().waitFor();

    await page.locator(".card-body").filter({hasText:productName}).getByRole("button",{name:"Add To Cart"}).click();

    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();


    await page.locator("div li").first().waitFor();

    expect (await page.getByText(productName)).toBeVisible();

    await page.getByText("Checkout").click();

    await page.locator("input[value*='4542']").fill("4444 6667 8899");

    await page.getByPlaceholder("Select Country").pressSequentially("ind");

   await page.getByRole("button",{name:"India"}).nth(1).click();

   expect(await page.getByText("sankarpg@gmail.com")).toBeVisible();

   await page.getByText("PLACE ORDER").click();

   await page.locator("[class='hero-primary']").waitFor();

   expect(await page.getByText(" Thankyou for the order. ")).toBeVisible();

  
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

   const actorderId = orderId.split('|')[1].trim();
   console.log(actorderId);

   await page.getByRole("listitem").getByRole("button",{name:"ORDERS"}).click();

   await page.locator("tbody").waitFor();

   await page.locator("tbody tr").filter({ hasText:actorderId}).getByRole("button",{name:"View"}).click();

   await page.locator("[class^='col-text']").waitFor();

   const expOrderId = await page.locator("[class^='col-text']").innerText();

   expect(orderId.includes(actorderId)).toBeTruthy();







  





    
});


