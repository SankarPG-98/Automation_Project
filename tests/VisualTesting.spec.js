const{test,expect}= require('@playwright/test')

test("hidden element" ,async ({page})=>{

    await page.goto("https://google.com/");
    //if the screenshot is not there first it will create screendhot snd fail
    //second time it will get pass
    //if the screenshot contain time definitely it will fail
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
    


})