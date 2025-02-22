const {test}=require('@playwright/test')

test("handling dialog",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    let dialogHandled = false;
    page.on('dialog',async(dialog)=>{
    if(!dialogHandled){
        await dialog.dismiss();
        dialogHandled = true;
    }
    else{
        await dialog.accept();
    }


    });
    await page.locator("#confirmbtn").click();
    //page.once('dialog',dialog=>dialog.dismiss());
    await page.locator("#confirmbtn").click();
   // page.once('dialog',dialog1=>dialog1.accept());
    await page.locator("#mousehover").hover();



});