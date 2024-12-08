const{test,expect}= require("@playwright/test")


test(" Calender Date " ,async({page})  => {

    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    await page.locator("div[class='react-date-picker__inputGroup']").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();

    
    const inputs = await page.locator("input[class*='react-date-picker__inputGroup__input']");

    for(let i=0;i<inputs;i++){
         
        const value = inputs[i].getAttribute("value");

        expect(value).toEqual(expectedList[i]);

    }
   

})