const { test, expect, request } = require('@playwright/test');

const loginPayLoad = {
  userEmail: "sankarpg@gmail.com", 
  userPassword: "102030@sS"
};

const orderPayLoad = {

   orders: [{country: "Cuba", productOrderedId: "6581ca979fd99c85e8ee7faf"}]
};
let token;  // Declare token globally to be accessed in tests
let orderId;

test.beforeAll(async () => {
  // Create a new API context
  const apiContext = await request.newContext();

  // Make the POST request and await the response
  const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
    data: loginPayLoad
  });

  // Ensure the response is successful
  expect(loginResponse.ok()).toBeTruthy();  // Checks if status code is between 200-299
  
  // Parse the JSON response body
  const loginResponseJson = await loginResponse.json();
  
  // Store the token in the global variable
  token = loginResponseJson.token;
  console.log('Token:', token);

  const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
   {

       data:orderPayLoad,
       headers: {
         'Authorization':token,
         'Content-type':"application/json"
       }
  });
  const orderResponseJson = await orderResponse.json();
  console.log(orderResponseJson);
  //orderId = orderResponseJson.orders[0];

});

test('EndToEnd', async ({ page }) => {
  // Ensure token is available
  expect(token).toBeTruthy(); // If the token is not defined, this will fail the test.

  // Use token in the page initialization script
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);

  const productName = "IPHONE 13 PRO";
  
  // Navigate to the client page and wait for the logo to be loaded
    await page.goto("https://rahulshettyacademy.com/client/");


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


