import { test } from '@playwright/test';
import { DocumentPage } from '../pages/Docusign_New.ts';
import { OnlySigner } from '../pages/Docusign_Only.ts';
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// test('Upload a document', async ({ page }) => {
//   const docPage = new DocumentPage(page);

//   // Open DocuSign and sign in
//   await docPage.OpenDocusign();
//   await docPage.signIn('Muhammad.sqa103@gmail.com', 'A1b2c3d4x@123');
//   await docPage.verifyRedirect();

//   //Create Signature

//   await docPage.clickViewerContainer();
//   await docPage.drawSignature();
//   await docPage.drawInitialSign();


//   // Choose to Sign or Get Signature
//   await docPage.SignOrGetSignature();

//   // Upload a document
//   const filePath = path.resolve(__dirname, 'files/Blank.pdf');
//   const docUpload = new DocumentPage(page); // Create new instance for upload
//   await docUpload.openDocument(filePath);
//   await docPage.addOneRecipient();

//   // Standard Fields and Add Annotations
//   await docPage.addAnnotations();

//   //Review and Complete
//   await docPage.Reviewandcomplete();
//   await docPage.fillSignTab();
//   await docPage.fillInitialTab();
//   await docPage.fillTextTab('Docusign New Test Project');

//   // await docPage.finishSigning();

// });

// Test Run with I'm only signer
// test('Only Single Signer', async ({ page }) => {
//   const docPage = new DocumentPage(page);
//   const onlySign = new OnlySigner(page);

//   // Open DocuSign and sign in
//   await docPage.OpenDocusign();
//   await docPage.signIn('Muhammad.sqa103@gmail.com', 'A1b2c3d4x@123');
//   await docPage.verifyRedirect();
//   //Create Signature

//   await docPage.clickViewerContainer();
//   await docPage.drawSignature();
//   await docPage.drawInitialSign();


//   // Choose to Sign or Get Signature
//   await docPage.SignOrGetSignature();

//   // Upload a document
//   const filePath = path.resolve(__dirname, 'files/Blank.pdf');
//   const docUpload = new DocumentPage(page); // Create new instance for upload
//   await docUpload.openDocument(filePath);


//   await onlySign.OnlySignerFlow();

//   //Place Singture annotation and Customise

//   await onlySign.PlaceSignatureAnnotation();
//   await onlySign.resizeSignature();
//   // Move signature slightly down
//   await onlySign.shiftSignature('down', 30);

//   // Move signature slightly right
//   await onlySign.shiftSignature('right', 15);



// });

// Test Run with applying annotations
test('Sign Document', async ({ page }) => {
  const docPage = new DocumentPage(page);

  await docPage.OpenDocusign();
  await docPage.signIn('Muhammad.sqa103@gmail.com', 'A1b2c3d4x@123');

  await docPage.VerifyRirectToAgreement();
  await docPage.clickViewerContainer();
  await docPage.drawSignature();
  await docPage.drawInitialSign();
  await docPage.AddAnnotationTool();
  await docPage.AddStampAnnotation();

});
