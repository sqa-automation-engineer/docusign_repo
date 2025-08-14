// import { test, expect } from '@playwright/test';
// import { asyncWrapProviders } from 'async_hooks';
// import path from 'path';
// import { execPath } from 'process';
// test('Upload PDF and confirm it is rendered', async ({ page }) => 
// {
//   await page.goto('https://proba.com/viewer');

//   // Wait for file chooser triggered by clicking "Open new document"
//   const [fileChooser] = await Promise.all([
//     page.waitForEvent('filechooser'),
//     page.locator("//button[contains(text(),'Open new document')]").click(),
//   ]);

//   // Construct absolute path to the file
//   const filePath = path.resolve(__dirname, 'files/Blank.pdf');

//   // Upload the file
//   await fileChooser.setFiles(filePath);

//   // Wait for canvas (PDF viewer) to render
//   const canvas = page.locator('canvas');
//   await expect(canvas.first()).toBeVisible({ timeout: 20000 });
//   console.log('✅ PDF canvas appeared');

//   // Optional: Count rendered pages
//   const canvasCount = await canvas.count();
//   expect(canvasCount).toBeGreaterThan(0);
//   console.log('✅ ${canvasCount} canvas elements rendered');

//   // Optional: Check for close button
//   const closeButton = page.locator("//button[.//div[text()='Close current document']]");
//   await expect(closeButton).toBeEnabled({ timeout: 10000 });
//   console.log('✅ Close button is active');
  
// // Text Annotation

//   await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)")).toBeVisible();
//   await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click();
//   await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();
//   await page.locator("//div[normalize-space()='Text']").click();
//   await expect(page.locator("//body[1]/div[3]/div[1]/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]")).toBeEnabled();
//   await page.locator("//div[@class='annotationEditorLayer freetextEditing']").click();
//   await expect(page.locator("#pdfjs_internal_editor_0-editor")).toBeVisible();
//   await page.locator("#pdfjs_internal_editor_0-editor").type('Muhammad Ahsan SQA Automation Engineer');
//   await page.locator("div[class='flex flex-col gap-3 [&:is(.disabled)]:opacity-50'] input[type='range']").fill('18');
//   await page.locator("div[class='flex flex-col gap-3 [&:is(.disabled)]:opacity-50'] div[class='flex flex-col gap-2'] div div[class='text-xs text-graylightmode-600']").fill('#ff0093');
//   await page.locator("//div[contains(@class,'flex flex-col gap-2')]//div[contains(@class,'flex flex-col gap-2')]//select[contains(@class,'h-5 relative z-20 text-ellipsis overflow-hidden text-xs text-graylightmode-600 focus:outline-hidden appearance-none')]").selectOption('Caveat')
//   await page.waitForTimeout(5000);
// //Save Annotated Document
//   await page.locator("//body/div/div/div/div/div[2]/div[1]/button[1]").click();
//   await page.locator("//div[normalize-space()='Save document']").click();
//   await expect(page.locator(".max-w-full.w-popup.z-1000000.flex.gap-6.justify-start.rounded-xl.p-5.bg-white")).toBeVisible();
//   await page.locator("//button[normalize-space()='Yes, sign another']").click();
//   await expect(page.locator(".flex.flex-col.gap-6.items-center")).toBeVisible();
//   await page.waitForTimeout(5000);

// })