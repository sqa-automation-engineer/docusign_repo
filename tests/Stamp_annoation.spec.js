// import { test, expect } from '@playwright/test';
// import { asyncWrapProviders } from 'async_hooks';
// import path from 'path';
// import { execPath } from 'process';

// test('Stamp Annotation', async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//     page.waitForEvent('filechooser'),
//     page.locator("//button[contains(text(),'Open new document')]").click(),
//     ]);

//     // Construct absolute path to the file
//     const filePath = path.resolve(__dirname, 'files/Blank.pdf');

//     // Upload the file
//     await fileChooser.setFiles(filePath);

//     // Wait for canvas (PDF viewer) to render
//     const canvas = page.locator('canvas');
//     await expect(canvas.first()).toBeVisible({ timeout: 20000 });
//     console.log('✅ PDF canvas appeared');

//     // Optional: Count rendered pages
//     const canvasCount = await canvas.count();
//     expect(canvasCount).toBeGreaterThan(0);
//     console.log('✅ ${canvasCount} canvas elements rendered');

//     // Optional: Check for close button
//     const closeButton = page.locator("//button[.//div[text()='Close current document']]");
//     await expect(closeButton).toBeEnabled({ timeout: 5000 });
//     console.log('✅ Close button is active');

//     //Stamp Annotation
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)")).toBeVisible();
//     await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click();  
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();
//     await page.locator("//body/div/div/div/div/div/div/div/div/div/button[4]").click();
//     await expect(page.locator("div[class='w-full overflow-y-auto p-3 panel-scroll-container-js'] div div div[class='flex flex-col gap-3 [&:is(.disabled)]:opacity-50']")).toBeEnabled();

//     // Step: Click Add image and upload image file
//     const [StampChooser] = await Promise.all([
//     page.waitForEvent('filechooser'),page.locator("//button[contains(@title,'Add image')]").click(),
//     ]);
//     await page.waitForTimeout(3000);
//     // Upload image file (make sure it's in your test path)
//     const imagePath = path.resolve(__dirname, 'files/STAMP.jpg');
//     await StampChooser.setFiles(imagePath);

//     // (Optional) Verify image appears — only if it gets inserted as visible
//     await expect(page.locator("//canvas[@aria-label='STAMP.jpg']")).toBeVisible();
//     const resizer = page.locator("//div[@class='resizer topLeft']");
//     await resizer.waitFor({ state: 'visible' });

//     // Get the bounding box of the resizer handle
//     const box = await resizer.boundingBox();
//     if (!box) throw new Error('Resizer handle not found');

//     const fromX = box.x + box.width / 10;
//     const fromY = box.y + box.height / 10;

//     // Move inward to shrink (drag toward center)
//     const toX = fromX + 40; // drag right
//     const toY = fromY + 40; // drag down

//     await page.mouse.move(fromX, fromY);
//     await page.mouse.down();
//     await page.mouse.move(toX, toY, { steps: 10 });
//     await page.mouse.up();
//     await page.waitForTimeout(3000);

// })