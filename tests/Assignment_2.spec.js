
const{test,expect}=require('@playwright/test')



test('Assignment 2',async ({browser}) => {
     const context = await browser.newContext();
     const page = await  context.newPage();
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     const radioButton = page.locator("[value='radio2']");
     const dropdown = page.locator("#dropdown-class-example");
     const checkbox = page.locator("#checkBoxOption2");

     await radioButton.click();
     expect (await radioButton).toBeChecked();

     await dropdown.selectOption("option3"); 

     await checkbox.click();
     expect(await checkbox).toBeChecked();
     await checkbox.uncheck();
     expect (await checkbox.isChecked()).toBeFalsy();

     const[newpage]=await Promise.all([context.waitForEvent('page'),page.locator("#openwindow").click()]);
     const text = await newpage.locator("[class='support float-left'] span").textContent();
     console.log(text);
     await newpage.close();
     await page.locator("[placeholder='Enter Your Name']").fill(text);
});


