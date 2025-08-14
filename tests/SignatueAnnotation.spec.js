// import { test, expect, selectors } from '@playwright/test';
// import { drawSignature } from './helper/signatureHelper';  // ✅ Correct relative path (recommended)
// import { typeSignature } from './helper/signatureHelper';
// import { asyncWrapProviders } from 'async_hooks';
// import path from 'path';
// import { execPath } from 'process';

// test('Add Free Text Annotation with Font Size and Color', async ({ page }) => {
//   // 1. Open PDF.js viewer
//   await page.goto('https://mozilla.github.io/pdf.js/web/viewer.html');

//   // 2. Wait until viewer is visible
//   await expect(page.locator('#viewer')).toBeVisible();

//   // 3. Activate Free Text tool
//   await page.locator('#editorFreeTextButton').click();
//   await expect(page.locator('#editorFreeTextParamsToolbar')).toBeVisible();

//   // 4. Click to place the text box on Page 1
//   await page.locator("//div[@aria-label='Page ⁨1⁩']//div[@class='annotationEditorLayer freetextEditing']").click();

//   // 5. Type some text
//   const editor = page.locator('#pdfjs_internal_editor_0-editor');
//   await expect(editor).toBeVisible();
//   await editor.type('Hello PDF.js!');

//   // 6. Set font size to 30
//   const fontSizeInput = page.locator('#editorFreeTextFontSize');
//   await expect(fontSizeInput).toBeVisible();
//   await fontSizeInput.fill('30');

//   // 7. Set font color to red (#ff0000)
//   const fontColorInput = page.locator('#editorFreeTextColor');
//   await expect(fontColorInput).toBeVisible();
//   await fontColorInput.fill('#ff0000'); // red

//   // 8. Optional pause to see result
//   await page.waitForTimeout(3000);

//   await expect (page.locator("//button[@title='Remove text']")).toBeVisible();
//   await page.locator("//button[@title='Remove text']").click();
//   await expect(page.locator("#pdfjs_internal_editor_0-editor")).toBeHidden();

//   await page.locator("//div[@aria-label='Page ⁨1⁩']//div[@class='annotationEditorLayer freetextEditing']").click();
//   await expect(page.locator("#pdfjs_internal_editor_1-editor")).toBeVisible();
//   await page.locator("#pdfjs_internal_editor_1-editor").type("sla;djfa;lskdfjalskdjf kasdfj");

//   // 6. Set font size to 30
//   await page.locator('#editorFreeTextFontSize').fill('15');
//   await page.locator('#editorFreeTextColor').fill('#ffff00');
//   await page.waitForTimeout(10000);

//   await expect (page.locator("//button[@title='Remove text']")).toBeVisible();
//   await page.locator("//button[@title='Remove text']").click();
//   await expect(page.locator("#pdfjs_internal_editor_1-editor")).toBeHidden();

// });

// test('Signature Annotation', async ({ page }) => {
    
//     await page.goto('https://proba.com/viewer');

//     // Wait for file chooser triggered by clicking "Open new document"
//     const [fileChooser] = await Promise.all([
//       page.waitForEvent('filechooser'),
//       page.locator("//button[contains(text(),'Open new document')]").click(),
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

//     //Signature Annotation

//     await expect (page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(3)")).toBeVisible();
//     await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(3)").click();
//     await expect (page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();
//     await page.locator("//body[1]/div[3]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/button[1]").click();
//     await expect(page.locator("//div[@id='CreateSignatureModal']")).toBeVisible();
//     await expect(page.locator("//h2[normalize-space()='Create Your Signature']")).toBeVisible();
//     await expect(page.locator("//div[@class=' focus-visible:outline-hidden']//div//button[@class='undefined text-white bg-brand-500 hover:bg-brand-900 active:bg-brand-600 disabled:bg-graylightmode-300 rounded-lg h-11 font-medium text-base shadow-probashadow-xs px-8'][normalize-space()='Create']")).toBeDisabled();

//     await page.locator("//button[normalize-space()='Draw']").click();
//     await expect(page.locator("//canvas[@id='probaAPIInkEditorCanvas']")).toBeVisible();

//     // Use the helper to draw signature
//     await drawSignature(page, '#probaAPIInkEditorCanvas');

//     await page.waitForTimeout(3000); // waits for 10,000 ms = 10 seconds
//     await page.locator("//div[@id='CreateSignatureModal']//div[contains(@class,'focus-visible:outline-hidden')]//div[contains(@class,'px-6')]//div[contains(@class,'flex gap-4 mb-3')]//div//select[contains(@class,'h-5 relative z-20 text-ellipsis overflow-hidden text-xs text-graylightmode-600 focus:outline-hidden appearance-none')]").selectOption('Blue');
//     // Create Signature
//     await expect(page.locator("//div[@class=' focus-visible:outline-hidden']//div//button[@class='undefined text-white bg-brand-500 hover:bg-brand-900 active:bg-brand-600 disabled:bg-graylightmode-300 rounded-lg h-11 font-medium text-base shadow-probashadow-xs px-8'][normalize-space()='Create']")).toBeEnabled();
//     await page.locator("//div[@class=' focus-visible:outline-hidden']//div//button[@class='undefined text-white bg-brand-500 hover:bg-brand-900 active:bg-brand-600 disabled:bg-graylightmode-300 rounded-lg h-11 font-medium text-base shadow-probashadow-xs px-8'][normalize-space()='Create']").click();
//     await expect(page.locator("//div[@id='CreateSignatureModal']")).toBeHidden();
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)")).toBeVisible();
//     await page.waitForTimeout(2000); // waits for 10,000 ms = 3 seconds


//     await page.locator("//body[1]/div[3]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/button[1]").click();
//     await expect(page.locator("//div[@id='CreateSignatureModal']")).toBeVisible();
//     await expect(page.locator("//h2[normalize-space()='Create Your Signature']")).toBeVisible();
//     await expect(page.locator("//div[@class=' focus-visible:outline-hidden']//div//button[@class='undefined text-white bg-brand-500 hover:bg-brand-900 active:bg-brand-600 disabled:bg-graylightmode-300 rounded-lg h-11 font-medium text-base shadow-probashadow-xs px-8'][normalize-space()='Create']")).toBeDisabled();

//     await page.locator("//button[normalize-space()='Draw']").click();
//     await expect(page.locator("//canvas[@id='probaAPIInkEditorCanvas']")).toBeVisible();

//     // Use the helper to draw signature
//     await drawSignature(page, '#probaAPIInkEditorCanvas');

//     await page.waitForTimeout(2000); // waits for 10,000 ms = 10 seconds
//     await page.locator("//div[@id='CreateSignatureModal']//div[contains(@class,'focus-visible:outline-hidden')]//div[contains(@class,'px-6')]//div[contains(@class,'flex gap-4 mb-3')]//div//select[contains(@class,'h-5 relative z-20 text-ellipsis overflow-hidden text-xs text-graylightmode-600 focus:outline-hidden appearance-none')]").selectOption('Red');
//     await page.waitForTimeout(2000);

//     // Erase
//     await expect(page.locator("//div[@class=' focus-visible:outline-hidden']//div//button[@id='probaAPIEditorClearButton']")).toBeVisible();
//     await page.locator("//div[@class=' focus-visible:outline-hidden']//div//button[@id='probaAPIEditorClearButton']").click();

//     await page.waitForTimeout(2000); // waits for 3,000 ms = 5 seconds

//     await page.locator("//button[normalize-space()='Type']").click();
//     await expect(page.locator("//textarea[@id='createSignatureTextArea']")).toBeVisible();

//     // Type signature text
//     await typeSignature(page, "//textarea[@id='createSignatureTextArea']", 'PROBA SIGNATURE');
//     await page.waitForTimeout(2000);

//     await page.locator("//div[@id='CreateSignatureModal']//div//div[2]//div[1]//div[1]//select[1]").selectOption('Red')
//     //await page.locator("body > div:nth-child(7) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)").selectOption('Sassy Frass');

//     await expect(page.locator("//div[@class=' focus-visible:outline-hidden']//div//button[@class='undefined text-white bg-brand-500 hover:bg-brand-900 active:bg-brand-600 disabled:bg-graylightmode-300 rounded-lg h-11 font-medium text-base shadow-probashadow-xs px-8'][normalize-space()='Create']")).toBeEnabled();
//     await page.locator("//div[@id='CreateSignatureModalContainer']//div[3]//div[2]//div[2]//div[2]//button[2]").click();
//     await expect(page.locator("//div[@id='CreateSignatureModal']")).toBeHidden();
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)")).toBeVisible();
//     await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)").click()
//     await page.locator("//div[@class='annotationEditorLayer svgEditing']").click();
//     await expect(page.locator("//div[@class='resizers']")).toBeVisible();

//       await page.waitForTimeout(2000); // waits for 10,000 ms = 3 seconds

//   // Step 1: Identify source (signature in inspector panel)
//     const signatureSource = page.locator("//body/div/div/div/div/div/div/div/div/div/div[7]/div[1]/div[1]/div[2]"); // 🔁 Update selector if needed
//     await expect(signatureSource).toBeVisible();

//     // Step 2: Identify target (viewer or page)
//     const dropTarget = page.locator("//div[contains(@class,'annotationEditorLayer svgEditing')]");
//     await expect(dropTarget).toBeVisible();

//     // Step 3: Get bounding boxes
//     const sourceBox = await signatureSource.boundingBox();
//     const targetBox = await dropTarget.boundingBox();

//     if (sourceBox && targetBox) {
//       // Step 4: Simulate drag-and-drop with mouse
//       await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
//       await page.mouse.down();
//       await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2, { steps: 10 });
//       await page.mouse.up();

//       console.log('✅ Signature dragged from panel and dropped on viewer');
//     } else {
//       throw new Error('❌ Source or target bounding box not found');
//     }

//     await page.waitForTimeout(3000); // Just to observe

//   //Cancel and Close Signature popup
//     await page.locator("//body[1]/div[3]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/button[1]").click();
//     await expect(page.locator("//div[@id='CreateSignatureModal']")).toBeVisible();
//     await expect(page.locator("//h2[normalize-space()='Create Your Signature']")).toBeVisible();
//     await page.locator("//button[normalize-space()='Type']").click();
//     await expect(page.locator("//textarea[@id='createSignatureTextArea']")).toBeVisible();
//     await expect(page.locator("//body[1]/div[3]/div[4]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/button[1]")).toBeVisible();
//     await page.waitForTimeout(3000);
//     await page.locator("//body[1]/div[3]/div[4]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/button[1]").click();
//     await page.waitForTimeout(3000);
//     await expect(page.locator("//h2[normalize-space()='Create Your Signature']")).toBeHidden();

    
// });
