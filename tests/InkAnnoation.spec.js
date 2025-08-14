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

//     const drawStroke = async (points) => {


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

// //Try to resize the annotation


//     const resizerLocator = page.locator("//div[@class='resizer topRight']");
//     const resizer = await resizerLocator.elementHandle();

//     if (resizer) {
//     const box = await resizer.boundingBox();

//     if (box) {
//         const startX = box.x + box.width / 4;
//         const startY = box.y + box.height / 4;

//         await page.mouse.move(startX, startY);
//         await page.mouse.down();
//         await page.mouse.move(startX + 40, startY - 40, { steps: 10 }); // Resize larger
//         await page.mouse.up();
//     } else {
//         throw new Error('Bounding box not found for resizer');
//     }
//     } else {
//     throw new Error('Resizer element not found');
//     }

//     await page.waitForTimeout(2000);
//         await page.locator("div[class='flex flex-col gap-3 [&:is(.disabled)]:opacity-50'] div[class='flex flex-col gap-2'] div label[class='flex gap-2 cursor-pointer w-fit items-center mt-2 rounded-lg border border-graylightmode-200 bg-graylightmode-25 p-1.5']").fill('#ff0000');
//         await page.locator("//body[1]/div[3]/div[1]/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/label[1]/input[1]").fill("6")
//         await page.locator("//body[1]/div[3]/div[1]/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/label[2]/input[1]").fill('0.5')
//         await page.waitForTimeout(2000);
//     //Try to save the annotated document
//         // await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)").click();
//         // await page.locator("//div[normalize-space()='Save document']").click();
//         // await expect(page.locator("//div[contains(@class,'max-w-full w-popup z-1000000 flex gap-6 justify-start rounded-xl p-5 bg-white')]")).toBeVisible();
//         // await expect(page.locator("//div[contains(@class,'bg-success-100 rounded-full shrink-0 w-12 h-12 grid items-center justify-center')]")).toBeVisible();
//         // await page.waitForTimeout(2000);

//         // await page.locator("//button[normalize-space()='Yes, sign another']").click();
//         // await page.reload();
//         // await page.waitForTimeout(2000);
// })