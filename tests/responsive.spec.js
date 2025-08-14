// import { test, expect } from '@playwright/test';

// const viewports = [
//   { name: 'iPhone X', width: 375, height: 812 },            // iPhone X
//   { name: 'iPad', width: 768, height: 1024 },               // iPad
//   { name: 'iPhone 14 Pro Max', width: 430, height: 932 },   // iPhone 14 Pro Max
//   { name: 'Samsung S25', width: 412, height: 915 },         // Samsung S25 
//   { name: 'MacBook', width: 1440, height: 900 },            // MacBook
//   { name: 'iPhone SE', width: 375, height: 667 }            // ✅ Logical viewport for 2nd & 3rd Gen
// ];

// for (const vp of viewports) 
// {
//   test(`Responsive check - ${vp.name}`, async ({ browser }) => 
//     {
//     const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
//     const page = await context.newPage();
//     await page.goto('https://proba.com');

//     console.log(`🔍 Testing ${vp.name} view...`);

//     await page.locator("//div[@class='lg:block']//a//*[name()='svg']").click();

//     // //   Get Started
//     // await page.locator("//a[@id='{{ parentcomponentid }}-open-file-button']").click();
//     // await expect(page).toHaveURL('https://proba.com/viewer');

//     // await page.goBack('https://proba.com');
//     // await expect(page.locator("//div[@class='flex flex-row items-center justify-center']")).toBeVisible();

//     // ✅ Example checks
//     await expect(page.locator("//div[@id='bg-logo']//*[name()='svg']")).toBeVisible();
//     await expect(page.locator("//a[@id='{{ parentcomponentid }}-open-file-button']")).toBeVisible();

//     // Optional: take screenshot
//     await page.screenshot({ path: `screenshots/proba-${vp.name}.png`, fullPage: true });
//     await context.close();
    
//   });
// }
// test.skip('This test is skipped for now', async ({ page }) => {
//   // This won't run
// });

