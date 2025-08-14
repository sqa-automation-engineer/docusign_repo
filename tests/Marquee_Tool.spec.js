// import { test, expect, selectors } from '@playwright/test';
// import { asyncWrapProviders } from 'async_hooks';
// import path from 'path';
// import { execPath } from 'process';

// test('Marquee Selection Tool', async ({ page }) =>
//     //start
//     {
//         await page.goto("https://proba.com/viewer");
//         // Wait for file chooser triggered by clicking "Open new document"
//             const [fileChooser] = await Promise.all([
//               page.waitForEvent('filechooser'),
//               page.locator("//button[contains(text(),'Open new document')]").click(),
//             ]);
        
//             // Construct absolute path to the file
//             const filePath = path.resolve(__dirname, 'files/Blank.pdf');
        
//             // Upload the file
//             await fileChooser.setFiles(filePath);
        
//             // Wait for canvas (PDF viewer) to render
//             const canvas = page.locator('canvas');
//             await expect(canvas.first()).toBeVisible({ timeout: 20000 });
//             console.log('✅ PDF canvas appeared');
        
//             // Optional: Count rendered pages
//             const canvasCount = await canvas.count();
//             expect(canvasCount).toBeGreaterThan(0);
//             console.log('✅ ${canvasCount} canvas elements rendered');
        
//             // Optional: Check for close button
//             const closeButton = page.locator("//button[.//div[text()='Close current document']]");
//             await expect(closeButton).toBeEnabled({ timeout: 10000 });
//             console.log('✅ Close button is active');


//         //✅ Ink Annitation 
//             await page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click();
//             await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();
//             await page.locator("//body/div/div/div/div/div/div/div/div/div/button[2]").click();

//             //Inspector Panel
//             //await expect(page.locator("div[class='w-full overflow-y-auto p-3 panel-scroll-container-js'] div div div[class='flex flex-col gap-3 [&:is(.disabled)]:opacity-50']")).toBeEnabled();
//             // Wait for ink layer to appear
//             const inkLayer = await page.waitForSelector("//div[@class='annotationEditorLayer inkEditing']");

//             // Get bounding box of the ink layer to calculate relative positions
//             const box = await inkLayer.boundingBox();
//             if (!box) throw new Error('Ink layer bounding box not found');

//             const { x, y } = box;

//             const delay = 100;

//             const drawStroke = async (points) => {
//                 await page.mouse.move(x + points[0].x, y + points[0].y);
//                 await page.mouse.down();
//                 for (const pt of points) {
//                 await page.mouse.move(x + pt.x, y + pt.y);
//                 await page.waitForTimeout(20); // smooth stroke
//                 }
//                 await page.mouse.up();
//                 await page.waitForTimeout(delay);
//             };

//             // "M"
//                 await drawStroke([
//                 { x: 20, y: 70 }, { x: 20, y: 40 }, // left stroke
//                 { x: 20, y: 40 }, { x: 30, y: 60 }, // diagonal up
//                 { x: 30, y: 60 }, { x: 40, y: 40 }, // diagonal down
//                 { x: 40, y: 40 }, { x: 40, y: 70 }  // right stroke
//                 ]);
//             // "U"
//                 await drawStroke([
//                 { x: 50, y: 40 }, { x: 50, y: 70 }, { x: 60, y: 75 }, { x: 70, y: 70 }, { x: 70, y: 40 }
//                 ]);
//             // "H"
//                 await drawStroke([
//                 { x: 80, y: 40 }, { x: 80, y: 70 } // left vertical
//                 ]);
//                 await drawStroke([
//                 { x: 80, y: 55 }, { x: 90, y: 55 } // horizontal middle
//                 ]);
//                 await drawStroke([
//                 { x: 90, y: 40 }, { x: 90, y: 70 } // right vertical
//                 ]);
//             // "A"
//                 await drawStroke([
//                 { x: 100, y: 70 }, { x: 105, y: 40 }, { x: 110, y: 70 } // upside down V
//                 ]);
//                 await drawStroke([
//                 { x: 103, y: 55 }, { x: 107, y: 55 } // middle bar
//                 ]);
//             // "M"
//                 await drawStroke([
//                 { x: 120, y: 70 }, { x: 120, y: 40 }, // left stroke
//                 { x: 120, y: 40 }, { x: 130, y: 60 },
//                 { x: 130, y: 60 }, { x: 140, y: 40 },
//                 { x: 140, y: 40 }, { x: 140, y: 70 }
//                 ]);
//             // "M"
//                 await drawStroke([
//                 { x: 150, y: 70 }, { x: 150, y: 40 },
//                 { x: 150, y: 40 }, { x: 160, y: 60 },
//                 { x: 160, y: 60 }, { x: 170, y: 40 },
//                 { x: 170, y: 40 }, { x: 170, y: 70 }
//                 ]);
//             // "A"
//                 await drawStroke([
//                 { x: 180, y: 70 }, { x: 185, y: 40 }, { x: 190, y: 70 }
//                 ]);
//                 await drawStroke([
//                 { x: 183, y: 55 }, { x: 187, y: 55 }
//                 ]);
//             // "D"
//                 await drawStroke([
//                 { x: 200, y: 40 }, { x: 200, y: 70 },
//                 { x: 200, y: 70 }, { x: 215, y: 65 }, { x: 215, y: 45 }, { x: 200, y: 40 }
//                 ]);

//             await page.locator("//body/div/div/div[6]/div[1]/div[2]/div[2]/div[1]").click();
//             await expect(page.locator("//div[contains(@class,'resizers')]")).toBeVisible();

//         //Try to resize the annotation

//             const resizerLocator = page.locator("//div[@class='resizer topRight']");
//             const resizer = await resizerLocator.elementHandle();
//             if (resizer) 
//                 {
//                     const box = await resizer.boundingBox();
//                     if (box) {
//                     const startX = box.x + box.width / 4;
//                     const startY = box.y + box.height / 4;

//                     await page.mouse.move(startX, startY);
//                     await page.mouse.down();
//                     await page.mouse.move(startX + 40, startY - 40, { steps: 10 }); // Resize larger
//                     await page.mouse.up();
//                 } else {
//                 throw new Error('Bounding box not found for resizer');
//                     }
//             }   else {
//                 throw new Error('Resizer element not found');
//             }

//                 await page.waitForTimeout(2000);

//         //✅ Text Annotation 

//                 await expect(page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")).toBeVisible();
//                 await page.locator("//div[normalize-space()='Text']").click();
//                 await expect(page.locator("//body[1]/div[3]/div[1]/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]")).toBeEnabled();
//                 await page.locator("//div[@class='annotationEditorLayer freetextEditing']").click();
//                 await expect(page.locator("//div[@id='pdfjs_internal_editor_1-editor']")).toBeVisible();
//                 await page.locator("//div[@id='pdfjs_internal_editor_1-editor']").type('Muhammad Ahsan SQA Automation Engineer');
//                 await page.locator("div[class='flex flex-col gap-3 [&:is(.disabled)]:opacity-50'] input[type='range']").fill('18');
//                 await page.locator("div[class='flex flex-col gap-3 [&:is(.disabled)]:opacity-50'] div[class='flex flex-col gap-2'] div div[class='text-xs text-graylightmode-600']").fill('#ff0093');
//                 await page.locator("//div[contains(@class,'flex flex-col gap-2')]//div[contains(@class,'flex flex-col gap-2')]//select[contains(@class,'h-5 relative z-20 text-ellipsis overflow-hidden text-xs text-graylightmode-600 focus:outline-hidden appearance-none')]").selectOption('Yellowtail')
                
//                 await page.waitForTimeout(5000);


        
//     })//End