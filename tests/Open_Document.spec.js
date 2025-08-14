// import { test, expect} from '@playwright/test';
// import path from 'path';
// import { execPath } from 'process';
// import { fileURLToPath } from 'url';

// Open a Document
// test('Open a PDF Document',  async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Construct absolute path to the file
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = path.dirname(__filename);
//     const filePath = path.resolve(__dirname, '../tests/files/Test document.pdf');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//         page.waitForEvent('filechooser'),
//         page.locator("//button[contains(text(),'Open new document')]").click(),
//     ]);

//     // Upload the file
//     await fileChooser.setFiles(filePath);

//     // Wait for canvas (PDF viewer) to render
    
//     const canvas = page.locator('canvas');
//     await expect(canvas.first()).toBeVisible({ timeout: 2000 });
//     console.log('PDF canvas appeared');

//     // Optional: Count rendered pages
//     const canvasCount = await canvas.count();
//     expect(canvasCount).toBeGreaterThan(0);
//     console.log('${canvasCount} canvas elements rendered');

//     // Optional: Check for close button
//     const closeButton = page.locator("//button[.//div[text()='Close current document']]");
//     await expect(closeButton).toBeEnabled({ timeout: 1000 });
//     console.log('Close current document button is active');

// })

// Open a password protected document with correct password
// test('Open a password protected document with correct password',  async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Construct absolute path to the file
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = path.dirname(__filename);
//     const filePath = path.resolve(__dirname, '../tests/files/new password procted.pdf');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//         page.waitForEvent('filechooser'),
//         page.locator("//button[contains(text(),'Open new document')]").click(),
//     ]);

//     // Upload the file
//     await fileChooser.setFiles(filePath);

//     // Wait for canvas (PDF viewer) to render
//     await expect(page.locator("//div[contains(@class,'max-w-full w-popup z-1000000 flex gap-6 justify-start rounded-xl p-5 bg-white')]")).toBeVisible();
//     await page.locator("//div[@class='max-w-full w-popup z-1000000 flex gap-6 justify-start rounded-xl p-5 bg-white']//form//div//input[@type='password']").type('1234');
//     await page.locator("//button[contains(@type,'submit')]").click();
//     const canvas = page.locator('canvas');
//     await expect(canvas.first()).toBeVisible({ timeout: 2000 });
//     console.log('PDF canvas appeared');

//     // Optional: Count rendered pages
//     const canvasCount = await canvas.count();
//     expect(canvasCount).toBeGreaterThan(0);
//     console.log('${canvasCount} canvas elements rendered');

//     // Optional: Check for close button
//     const closeButton = page.locator("//button[.//div[text()='Close current document']]");
//     await expect(closeButton).toBeEnabled({ timeout: 10000 });
//     console.log('Close current document button is active');

// })
// Open a password protected document with wrong password
// test('Open a password protected document with wrong password',  async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//         page.waitForEvent('filechooser'),
//         page.locator("//button[contains(text(),'Open new document')]").click(),
//     ]);

//     // Construct absolute path to the file
//     const filePath = path.resolve(__dirname, 'files/new password procted.pdf');

//     // Upload the file
//     await fileChooser.setFiles(filePath);

//     // Wait for canvas (PDF viewer) to render
//     await expect(page.locator("//div[contains(@class,'max-w-full w-popup z-1000000 flex gap-6 justify-start rounded-xl p-5 bg-white')]")).toBeVisible();
//     await page.locator("//div[@class='max-w-full w-popup z-1000000 flex gap-6 justify-start rounded-xl p-5 bg-white']//form//div//input[@type='password']").type('12345');
//     await page.locator("//button[contains(@type,'submit')]").click();
//     await expect(page.locator("//p[@class='mt-2 text-sm text-red-400']")).toBeVisible();
//     await page.waitForTimeout(3000);
//     await page.locator("//div[@class='max-w-full w-popup z-1000000 flex gap-6 justify-start rounded-xl p-5 bg-white']//form//div//input[@type='password']").type('1234');
//     await page.locator("//button[contains(@type,'submit')]").click();
//     const canvas = page.locator('canvas');
//     await expect(canvas.first()).toBeVisible({ timeout: 20000 });
//     console.log('✅ PDF canvas appeared');

//     // Optional: Count rendered pages
//     const canvasCount = await canvas.count();
//     expect(canvasCount).toBeGreaterThan(0);
//     console.log('✅ ${canvasCount} canvas elements rendered');

//     // Optional: Check for close button
//     const closeButton = page.locator("//button[.//div[text()='Close current document']]");
//     await expect(closeButton).toBeEnabled({ timeout: 10000 });
//     console.log('✅ Close button is active');

// })

// Open an Invalid PDF document
// test('Open an Invalid PDF document',  async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//         page.waitForEvent('filechooser'),
//         page.locator("//button[contains(text(),'Open new document')]").click(),
//     ]);

//     // Construct absolute path to the file
//     const filePath = path.resolve(__dirname, 'files/invalid-file.pdf');

//     // Upload the file
//     await fileChooser.setFiles(filePath);

//     // Wait for canvas (PDF viewer) to render
//     await expect(page.locator("//div[@class='fixed max-w-full sm:top-auto sm:left-auto sm:bottom-4 sm:right-4 left-1/2 sm:translate-x-0 -translate-x-1/2 top-4 w-notification border border-graylightmode-200 shadow-probashadow-lg z-1000000 flex gap-4 justify-start rounded-xl p-5 bg-white']")).toBeVisible();
//     await expect(page.locator("//div[contains(@class,'text-lg font-medium text-brand-900')]")).toBeVisible();
//     await page.waitForTimeout(3000);
//     await expect(page.locator("//button[contains(text(),'Open new document')]")).toBeVisible();

// })

// Open Unsupported document
// test('Open Unsupported document',  async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//         page.waitForEvent('filechooser'),
//         page.locator("//button[contains(text(),'Open new document')]").click(),
//     ]);

//     // Construct absolute path to the file
//     const filePath = path.resolve(__dirname, 'files/11.jpeg');

//     // Upload the file
//     await fileChooser.setFiles(filePath);

//     // Wait for canvas (PDF viewer) to render
//     await expect(page.locator("//div[contains(@class,'fixed max-w-full sm:top-auto sm:left-auto sm:bottom-4 sm:right-4 left-1/2 sm:translate-x-0 -translate-x-1/2 top-4 w-notification border border-graylightmode-200 shadow-probashadow-lg z-1000000 flex gap-4 justify-start rounded-xl p-5 bg-white')]")).toBeVisible();
//     await expect(page.getByText("Can not open file")).toBeVisible();
//     await page.locator("//div[contains(@class,'fixed max-w-full sm:top-auto sm:left-auto sm:bottom-4 sm:right-4 left-1/2 sm:translate-x-0 -translate-x-1/2 top-4 w-notification border border-graylightmode-200 shadow-probashadow-lg z-1000000 flex gap-4 justify-start rounded-xl p-5 bg-white')]//button[contains(@class,'self-start')]").click();
//     await page.waitForTimeout(3000);
//     await expect(page.locator("//button[contains(text(),'Open new document')]")).toBeVisible();

// })



// Open Password-Protected or Restricted document
// test('Open Password-Protected or Restricted document',  async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//         page.waitForEvent('filechooser'),
//         page.locator("//button[contains(text(),'Open new document')]").click(),
//     ]);

//     // Construct absolute path to the file
//     const filePath = path.resolve(__dirname, 'tests/files/Blank.pdf');

//     // Upload the file
//     await fileChooser.setFiles(filePath);

//     // Wait for canvas (PDF viewer) to render
//     await expect(page.locator("//div[contains(@class,'max-w-full w-popup z-1000000 flex gap-6 justify-start rounded-xl p-5 bg-white')]")).toBeVisible();
//     await page.locator("//div[@class='max-w-full w-popup z-1000000 flex gap-6 justify-start rounded-xl p-5 bg-white']//form//div//input[@type='password']").type('user');
//     await page.locator("//button[contains(@type,'submit')]").click();

//     await page.waitForTimeout(3000);

//     await expect(page.locator("//body[1]/div[3]/div[1]/div[6]/div[1]/div[2]/div[1]/button[2]")).toBeDisabled();
//     await expect(page.locator("//div[contains(@class,'fixed max-w-full sm:top-auto sm:left-auto sm:bottom-4 sm:right-4 left-1/2 sm:translate-x-0 -translate-x-1/2 top-4 w-notification border border-graylightmode-200 shadow-probashadow-lg z-1000000 flex gap-4 justify-start rounded-xl p-5 bg-white')]")).toBeVisible();
//     await page.locator("//button[normalize-space()='View permissions']").click();
//     await expect(page.locator("div[class='group [&:is(.disabled)]:pointer-events-none [&:is(.disabled)]:opacity-50 isOpen']")).toBeVisible();
//     await page.locator("//button[@class='mt-2 group rounded-lg fileOptionButton text-sm leading-5 font-medium text-dark-blue-900 flex gap-2 p-2 items-center hover:bg-brand-50 disabled:opacity-50 disabled:hover:bg-transparent']").click();
//     await expect(page.locator("//form[contains(@class,'bg-white w-full max-w-lg relative p-5 shadow-probashadow-lg rounded-xl border border-gray-200')]")).toBeVisible();
//     await page.locator("//div[@class='group relative mt-4']//input[@type='password']").type('owner');
//     await page.locator("//button[contains(@class,'grow text-white bg-brand-500 hover:bg-brand-900 active:bg-brand-600 disabled:bg-graylightmode-300 rounded-lg h-11 font-medium text-base shadow-probashadow-xs px-8')]").click();
//     await expect(page.locator("//body[1]/div[3]/div[1]/div[6]/div[1]/div[2]/div[1]/button[2]")).toBeEnabled();
//     await page.waitForTimeout(5000);
    
//     const canvas = page.locator('canvas');
//     await expect(canvas.first()).toBeVisible({ timeout: 20000 });
//     console.log('✅ PDF canvas appeared');

//     // Optional: Count rendered pages
//     const canvasCount = await canvas.count();
//     expect(canvasCount).toBeGreaterThan(0);
//     console.log('✅ ${canvasCount} canvas elements rendered');

//     // Optional: Check for close button
//     const closeButton = page.locator("//button[.//div[text()='Close current document']]");
//     await expect(closeButton).toBeEnabled({ timeout: 10000 });
//     console.log('✅ Close button is active');
// })

