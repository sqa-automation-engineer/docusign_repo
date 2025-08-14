// import { test, expect} from '@playwright/test';
// import path from 'path';
// import { execPath } from 'process';

//Highlight FreeForm Annotation
// test('Highlight FreeForm Annotation',  async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//         page.waitForEvent('filechooser'),
//         page.locator("//button[contains(text(),'Open new document')]").click(),
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
//     await expect(closeButton).toBeEnabled({ timeout: 10000 });
//     console.log('✅ Close button is active');

//     //Highlight Tool
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)")).toBeVisible();
//     await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click();  
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();

//     await page.locator("//div[normalize-space()='Highlight']").click();
//     await expect(page.locator("//body[1]/div[3]/div[1]/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]")).toBeEnabled();
//     console.log('✅ Highlight properties is active');

//     await page.waitForTimeout(3000);

//     // Wait for highlighting layer to appear
//     const highlightLayer = page.locator("//div[contains(@class,'textLayer highlighting')]");
//     await highlightLayer.waitFor();

//     // Get bounding box of highlight area
//     const box = await highlightLayer.boundingBox();

//     // Simulate drawing freeform highlight with mouse drag
//     const startX = box.x + 50;
//     const startY = box.y + 50;
//     const endX = box.x + 350;
//     const endY = box.y + 200;

//     await page.mouse.move(startX, startY);
//     await page.mouse.down();
//     await page.mouse.move(endX, endY, { steps: 10 });
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     await page.locator("//button[@title='green']").click();
//     await page.locator('input[type="range"][min="8"]').fill('20'); // OK
//     await page.waitForTimeout(1000);
//     await page.locator("//button[@title='blue']").click();
//     await page.locator('input[type="range"][min="8"]').fill('8'); // OK
//     await page.waitForTimeout(1000);
//     await page.locator("//button[@title='blue']").click();
//     await page.locator('input[type="range"][min="8"]').fill('12'); // OK
//     await page.waitForTimeout(1000);
//     await page.locator("//button[@title='pink']").click();
//     await page.locator('input[type="range"][min="8"]').fill('20'); // OK
//     await page.waitForTimeout(3000);

// })

//Highlight Text 
// test('Highlight Text',  async ({ page }) => 
// {
//     await page.goto('https://proba.com/viewer');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//         page.waitForEvent('filechooser'),
//         page.locator("//button[contains(text(),'Open new document')]").click(),
//     ]);

//     // Construct absolute path to the file
//     const filePath = path.resolve(__dirname, 'files/Test document.pdf');

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
//     await expect(closeButton).toBeEnabled({ timeout: 10000 });
//     console.log('✅ Close button is active');

//     //Highlight Tool
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)")).toBeVisible();
//     await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click();  
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();

//     await page.locator("//div[normalize-space()='Highlight']").click();
//     await expect(page.locator("//body[1]/div[3]/div[1]/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]")).toBeEnabled();
//     console.log('✅ Highlight properties is active');

//     await page.waitForTimeout(3000);

//      // Step 2: Wait for the highlightable span to appear
//     const highlightTarget = page.locator("//span[contains(text(),'Dynamic languages such as JavaScript are more difﬁ')]");
//     await highlightTarget.waitFor({ state: 'visible' });

//     // Step 3: Get bounding box of the text span
//     const box = await highlightTarget.boundingBox();
//     if (!box) throw new Error('Bounding box not found');

//     // Drag *only* across that line (left to right)
//     const startX = box.x + 2;
//     const endX = box.x + box.width - 2;
//     const y = box.y + box.height / 2;

//     // Simulate user selection using precise drag
//     await page.mouse.move(startX, y);
//     await page.mouse.down();
//     await page.mouse.move(endX, y, { steps: 10 });
//     await page.mouse.up();
//     // Step 5: Wait to observe the highlight (optional)
//     await expect(page.locator("//span[contains(text(),'Dynamic languages such as JavaScript are more difﬁ')]")).toContainText('Dynamic languages such as JavaScript are more difﬁ');
//     await page.waitForTimeout(1000);

//     await page.locator("//button[@title='green']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("//button[@title='blue']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("//button[@title='blue']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("//button[@title='pink']").click();
//     await page.waitForTimeout(3000);
    

// })