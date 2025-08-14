import { test, expect } from '@playwright/test';
import { ValidDocument } from '../pages/OpenPdfDocument.ts';
import path from 'path';
import { fileURLToPath } from 'url';

//Global Initialization
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Open PDF Document', async ({ page }) => {
  await page.goto('');

//Valid here  
  const viewer = new ValidDocument(page);
  const filePath = path.resolve(__dirname, 'files/Blank.pdf'); 
  await viewer.openDocument(filePath);

// Invalid here
  const filePath2 = path.resolve(__dirname, 'files/invalid-file.pdf'); 
  await viewer.uploadDocument(filePath2);
  await viewer.verifyInvalidPdfUI();

//Unsupported here
  const filePath3 = path.resolve(__dirname, 'files/STAMP.jpg')
  await viewer.uploadDocument(filePath3);
  await viewer.VerifyUnsupportedPdfUI();
  await viewer.closeNotification();
  await viewer.verifyOpenNewDocButtonVisible();

// Password Protected PDF document with Correct Password
  const filePath4 = path.resolve(__dirname, 'files/new password procted.pdf'); 
  await viewer.uploadDocument(filePath4);
  await viewer.enterPasswordAndUnlock('1234');

// Password Protected PDF document with Wrong Password
  const filePath5 = path.resolve(__dirname, 'files/new password procted.pdf'); 
  await viewer.uploadDocument(filePath5);
  await viewer.enterWrongPasswordAndUnlock('12345', '1234'); // Enter incorrect password

// Open Password-Protected or Restricted document
  const filePath6 = path.resolve(__dirname, 'files/pw_u-user_o-owner_acroform-no-permissions.pdf');
  await viewer.uploadDocument(filePath6);
  await viewer.enterPasswordAndGrantPermission('user', 'owner');


});


// test('Open an Invalid PDF document', async ({ page }) => {
//     await page.goto('https://proba.com/viewer');

//   const pdfViewer = new ValidDocument(page);
//   const filePath2 = path.resolve(__dirname, 'files/STAMP.jpg'); // direct path
//   await  pdfViewer.uploadDocument(filePath2);
//   await pdfViewer.VerifyUnsupportedPdfUI();
// });

