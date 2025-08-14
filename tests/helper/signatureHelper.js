// helpers/signatureHelper.js
export async function drawSignature(page, canvasSelector) {
  const canvas = await page.locator(canvasSelector);
  const box = await canvas.boundingBox();

  if (box) {
    const { x, y } = box;
    await page.mouse.move(x + 10, y + 10);
    await page.mouse.down();
    await page.mouse.move(x + 120, y + 10);
    await page.mouse.move(x + 180, y + 10);
    await page.mouse.move(x + 120, y + 240);
    await page.mouse.up();
  } else {
    throw new Error('Canvas bounding box not found');
  }
}
// helpers/signatureHelper.js
export async function typeSignature(page, inputSelector, signatureText) {
  const input = page.locator(inputSelector);
  await input.waitFor({ state: 'visible' });
  await input.fill(''); // Clear if needed
  await input.type(signatureText);
}


//   const canvas = await page.locator('#probaAPIInkEditorCanvas');
// const box = await canvas.boundingBox();

// // Simulate drawing on canvas
// if (box) {
//   const { x, y, width, height } = box;

//   await page.mouse.move(x + 20, y + 20);   // start point
//   await page.mouse.down();

//   // Draw a squiggly signature path
//   await page.mouse.move(x + 160, y + 120);
//   await page.mouse.move(x + 100, y + 30);
//   await page.mouse.move(x + 140, y + 10);
//   await page.mouse.move(x + 180, y + 25);

//   await page.mouse.up();
// }