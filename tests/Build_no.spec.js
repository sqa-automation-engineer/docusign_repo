import { test, expect } from '@playwright/test';

// test('Compare build numbers dynamically from Proba homepage and viewer', async ({ page }) => {
//   // Step 1: Visit proba.com
//   await page.goto("https://proba.com/");

//   // Step 2: Extract build number from main site
//   const mainBuildLocator = page.locator("//span[@class='proba-fe-version-and-copyright-js']");
//   await expect(mainBuildLocator).toBeVisible();
//   const rawMainText = await mainBuildLocator.innerText();
//   const build1 = rawMainText.match(/Build\s+([a-zA-Z0-9\-]+)/)?.[1];
//   console.log('🔹 Build from proba.com:', build1);

//   // Step 3: Validate format of extracted build (optional)
//   const buildFormat = /^\d{3,5}-[a-f0-9]+$/; // e.g., 1657-9a00c8b
//   expect(build1).toMatch(buildFormat);

//   // Step 4: Click "Open Viewer"
//   await page.locator("//a[@id='{{ parentcomponentid }}-open-file-button']").click();
//   await expect(page).toHaveURL('https://proba.com/viewer');

//   // Step 5: Extract build number from viewer
//   const viewerBuildLocator = page.locator("//span[@id='probaBuildNumber']");
//   await expect(viewerBuildLocator).toBeVisible();
//   const build2 = await viewerBuildLocator.innerText();
//   console.log('🔹 Build from viewer:', build2);

//   // Step 6: Compare both builds
//   if (build1.trim() === build2.trim()) {
//     console.log(`✅ Build match: ${build1}`);
//   } else {
//     console.error(`❌ Build mismatch:\n- proba.com: ${build1}\n- viewer: ${build2}`);
//   }

//   // Step 7: Assertion to enforce failure if mismatch
// //   expect(build1.trim()).toBe(build2.trim());
// });
