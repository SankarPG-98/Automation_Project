const ExcelJs =require('exceljs');
const { test, expect } = require('@playwright/test');
 
async function writeExcelTest(searchText,replaceText,change,filePath)
{
    
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output= await readExcel(worksheet,searchText);
 
  const cell = worksheet.getCell(output.row,output.column+change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
 
}
 
 
async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber) =>
    {
          row.eachCell((cell,colNumber) =>
          {
              if(cell.value === searchText)
              {
                  output.row=rowNumber;
                  output.column=colNumber;
              }
  
  
          }  )
    
    })
    return output;
}
//update Mango Price to 350. 
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");
test('Upload download excel validation', async ({ page }) => {
    const textSearch = 'Mango';
    const updateValue = '350';
    
    // Navigate to the URL
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
  
    // Wait for the download event
    const downloadPromise = page.waitForEvent('download');  // Ensure 'download' event is captured
    
    // Click the Download button
    await page.getByRole('button', { name: 'Download' }).click();
    
    // Wait for the download to complete
    const download = await downloadPromise;
    
    // Save the downloaded file to a path (optional, to verify the file)
    const filePath = '/Users/sankarpg/downloads/download.xlsx';
    await download.saveAs(filePath);
    
    // Perform Excel validation (you can now manipulate the Excel file)
    await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);
  
    // Upload the file back to the page
    await page.locator("#fileinput").setInputFiles(filePath);
    
    // Search for the updated value in the table
    const textLocator = page.getByText(textSearch);
    const desiredRow = await page.getByRole('row').filter({ has: textLocator });
    
    // Check if the update is reflected in the table
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
  });