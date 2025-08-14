// import { test, expect, selectors } from '@playwright/test';
// import { asyncWrapProviders } from 'async_hooks';
// import path from 'path';
// import { execPath } from 'process';


// test('Ink Annotation', async ({ page }) => {
    
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

//     //Ink Annotation
//     await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click();
//     await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();
//     await page.locator("//body/div/div/div/div/div/div/div/div/div/button[2]").click();

//     //Inspector Panel
//     //await expect(page.locator("div[class='w-full overflow-y-auto p-3 panel-scroll-container-js'] div div div[class='flex flex-col gap-3 [&:is(.disabled)]:opacity-50']")).toBeEnabled();
//     // Wait for ink layer to appear
//     const inkLayer = await page.waitForSelector("//div[@class='annotationEditorLayer inkEditing']");

//     // Get bounding box of the ink layer to calculate relative positions
//     const box = await inkLayer.boundingBox();
//     if (!box) throw new Error('Ink layer bounding box not found');
//     const { x, y } = box;
//     const delay = 100;

//     const drawStroke = async (points) => 
//     {
//         await page.mouse.move(x + points[0].x, y + points[0].y);
//         await page.mouse.down();
//         for (const pt of points) {
//         await page.mouse.move(x + pt.x, y + pt.y);
//         await page.waitForTimeout(20); // smooth stroke
//         }
//         await page.mouse.up();
//         await page.waitForTimeout(delay);
//     };

//         // "M"
//         await drawStroke([
//         { x: 20, y: 70 }, { x: 20, y: 40 }, // left stroke
//         { x: 20, y: 40 }, { x: 30, y: 60 }, // diagonal up
//         { x: 30, y: 60 }, { x: 40, y: 40 }, // diagonal down
//         { x: 40, y: 40 }, { x: 40, y: 70 }  // right stroke
//         ]);

//         // "U"
//         await drawStroke([
//         { x: 50, y: 40 }, { x: 50, y: 70 }, { x: 60, y: 75 }, { x: 70, y: 70 }, { x: 70, y: 40 }
//         ]);

//         // "H"
//         await drawStroke([
//         { x: 80, y: 40 }, { x: 80, y: 70 } // left vertical
//         ]);
//         await drawStroke([
//         { x: 80, y: 55 }, { x: 90, y: 55 } // horizontal middle
//         ]);
//         await drawStroke([
//         { x: 90, y: 40 }, { x: 90, y: 70 } // right vertical
//         ]);

//         // "A"
//         await drawStroke([
//         { x: 100, y: 70 }, { x: 105, y: 40 }, { x: 110, y: 70 } // upside down V
//         ]);
//         await drawStroke([
//         { x: 103, y: 55 }, { x: 107, y: 55 } // middle bar
//         ]);

//         // "M"
//         await drawStroke([
//         { x: 120, y: 70 }, { x: 120, y: 40 }, // left stroke
//         { x: 120, y: 40 }, { x: 130, y: 60 },
//         { x: 130, y: 60 }, { x: 140, y: 40 },
//         { x: 140, y: 40 }, { x: 140, y: 70 }
//         ]);

//         // "M"
//         await drawStroke([
//         { x: 150, y: 70 }, { x: 150, y: 40 },
//         { x: 150, y: 40 }, { x: 160, y: 60 },
//         { x: 160, y: 60 }, { x: 170, y: 40 },
//         { x: 170, y: 40 }, { x: 170, y: 70 }
//         ]);

//         // "A"
//         await drawStroke([
//         { x: 180, y: 70 }, { x: 185, y: 40 }, { x: 190, y: 70 }
//         ]);
//         await drawStroke([
//         { x: 183, y: 55 }, { x: 187, y: 55 }
//         ]);

//         // "D"
//         await drawStroke([
//         { x: 200, y: 40 }, { x: 200, y: 70 },
//         { x: 200, y: 70 }, { x: 215, y: 65 }, { x: 215, y: 45 }, { x: 200, y: 40 }
//         ]);

//     await page.locator("//body/div/div/div[6]/div[1]/div[2]/div[2]/div[1]").click();
//     await expect(page.locator("//div[contains(@class,'resizers')]")).toBeVisible();

//      // Step 1: Select the placed signature
//     const Ink1 = page.locator("//div[@id='pdfjs_internal_editor_0']");
//     await Ink1.click(); // Ensure it’s selected
//     await page.waitForTimeout(500);

//     // Step 2: Copy the signature
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyC');
//     await page.keyboard.up('Control');
//     console.log('✅ Copied Ink Annotation');

//     await page.waitForTimeout(3000); // Wait for any animations to finish


//     // Dragging the signature to the next page
//     const signature = page.locator("//div[@id='pdfjs_internal_editor_0']");
//     const bo = await signature.boundingBox();

//     if (bo) {
//         await page.mouse.move(bo.x + bo.width / 2, bo.y + bo.height / 2);
//         await page.mouse.down();

//         // Drag vertically 600px to next page
//         for (let i = 0; i < 50; i++) {
//         await page.mouse.move(bo.x + bo.width / 2, bo.y + bo.height / 2 + (i * 30));
//         await page.mouse.wheel(0, 50); // ✅ scroll slightly with each move
//         await page.waitForTimeout(50);
//         }
//         await page.mouse.up();

//         console.log('✅ Signature dragged to second page');
//         await expect(page.locator("//div[@id='pdfjs_internal_editor_0']")).toBeVisible();

//         await page.waitForTimeout(3000); // Wait for any animations to finish
//     } else {
//         throw new Error('❌ Signature element not found');
//     }

//     // Step 3: Paste the signature
//     await page.keyboard.down('Control');
//     await page.keyboard.press('KeyV');
//     await page.keyboard.up('Control');
//     console.log('✅ Pasted Ink Annotation');

//     // Step 4: Optional validation — check there are 2 signatures now
//     const count = await page.locator("//div[@id='pdfjs_internal_editor_1']").count();
//     console.log(`🧪 Total signatures found: ${count}`);

//     await expect(page.locator("//div[@id='pdfjs_internal_editor_1']")).toBeVisible();
//     //expect(count).toBeGreaterThan(1); // ✅ Two or more signatures now
//     // Scroll to bottom of PDF viewer
//     await page.evaluate(() => {
//     const container = document.querySelector('#viewerContainer');
//     if (container) {
//         container.scrollTop = container.scrollHeight;
//     }
//     });
//     await page.waitForTimeout(2000);
//     console.log('✅ Scrolled to bottom');

//     // Scroll back to top of PDF viewer
//     await page.evaluate(() => {
//     const container = document.querySelector('#viewerContainer');
//     if (container) {
//         container.scrollTop = 0;
//     }
//     });
//     await page.waitForTimeout(2000);
//     console.log('✅ Scrolled back to top');
// })    