import { Page, Locator, expect } from '@playwright/test';
import * as path from 'path';

export class DocumentPage {
  readonly page: Page;
  readonly LoginPage: Locator;
  readonly emailInput: Locator;
  readonly emailNext: Locator;
  readonly passwordInput: Locator; 
  readonly signInBtn: Locator; 
  readonly closeIcon: Locator;
  readonly createSignature: Locator;
  readonly createSignPopup: Locator;
  readonly selectSignature: Locator;
  readonly Create: Locator;
  readonly startBtn: Locator;
  readonly UploadorEnvelope: Locator;
  readonly UploadBtn: Locator;
  readonly desktopBtn: Locator;
  readonly NextBtn: Locator;
  readonly addRecipient: Locator;
  readonly RecipientName: Locator;
  readonly RecipientEmail: Locator;
  readonly SelectRecipient: Locator;
  readonly standardFields: Locator;
  readonly tabPanel: Locator;
  readonly signature: Locator;
  readonly drawBtn: Locator;
  readonly ViewerContainer: Locator;
  readonly pageContent: Locator;
  readonly textAnnoation: Locator;
  readonly initailAnnoation: Locator;
  readonly SendDocument: Locator;
  readonly cancelBtn: Locator;
  readonly closeAndSave: Locator;
  readonly saveEnvelope: Locator;
  readonly discardBtn: Locator;
  readonly startSignBtn: Locator;
  readonly canvas: Locator;
  readonly initailCanvas: Locator;
  readonly startSign: Locator;
  readonly Signtab: Locator;
  readonly initTab: Locator;
  readonly textTab: Locator;
  readonly signatureChange: Locator;
  readonly AgreementPage: Locator;
  readonly signButton: Locator;
  readonly signatureTool: Locator;
  readonly pageDocument: Locator;
  readonly initialTool: Locator;
  readonly resizeSignature: Locator;
  readonly stampTool: Locator;
  readonly placedStampAnnotation: Locator;
  readonly adoptStamp: Locator;
  readonly UploadStamp: Locator;
  readonly UploadStampImage: Locator;
  readonly existingStamp: Locator;
  readonly doneBtn: Locator;
  readonly TextAnnotation: Locator;
  readonly textBox1: Locator;
  readonly dateStamp: Locator;
  readonly fullName: Locator;
  readonly AddNew: Locator;
  readonly CreateNewStamp: Locator;
  readonly StampText: Locator;
  readonly StampTextTitle: Locator;
  readonly StampSquare: Locator;
  readonly StampCircle: Locator;
  readonly StampNext: Locator;
  readonly AdoptNewStamp: Locator;


  constructor(page: Page) {
    this.page = page;
    this.LoginPage = page.locator("//span[normalize-space()='Log in to Docusign']");
    this.emailInput = page.locator("//input[@name='email']"); 
    this.emailNext = page.locator("//button[@type='submit']");
    this.passwordInput = page.locator("//input[@name='password']");
    this.signInBtn = page.locator("//button[@type='submit']");
    this.closeIcon = page.locator("//button[@title='Close']");
    this.createSignature = page.locator("//button[@aria-label='Create Your Signature']");
    this.startBtn = page.locator("//button[@aria-label='Start Now']");
    this.UploadorEnvelope = page.getByText("Upload a Document and Add Envelope Recipients");
    this.UploadBtn = page.locator("//span[@data-qa='upload-file-button-text' and text()='Upload']");
    this.desktopBtn = page.locator("//span[@data-qa='upload-file-input-text']");
    this.NextBtn = page.locator("//button[@data-qa='footer-add-fields-link']//span[text()='Next']");
    this.addRecipient = page.locator("//div[@data-qa='add-recipients-slider']");
    this.RecipientName = page.locator("//input[@data-qa='recipient-name']");
    this.RecipientEmail = page.locator("//input[@data-qa='recipient-email']");
    this.SelectRecipient = page.locator("//button[@aria-label='Select Recipient']");
    this.standardFields = page.locator("//button[@id='standard-fields']");
    this.tabPanel = page.locator("//div[@role='tabpanel']");
    this.signature = page.locator("//span[@title='Signature']");
    this.createSignPopup = page.locator("//span[normalize-space()='Create Your Signature']");
    this.ViewerContainer = page.locator('//div[@data-qa="signature-canvas"]');
    this.drawBtn = page.locator(" //span[normalize-space()='DRAW']");
    this.selectSignature = page.locator("//tbody/tr[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]");
    this.Create = page.locator("//button[span[text()='Create']]");
    this.pageContent = page.locator("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/*[name()='svg']/*[name()='g']/*[name()='g']/*[name()='g']/*[name()='image']");
    this.textAnnoation = page.locator("//span[@title='Text']");
    this.initailAnnoation = page.locator("//span[@title='Initial']");
    this.SendDocument = page.locator("//span[contains(text(),'Send')]");
    this.cancelBtn = page.locator("//span[contains(text(),'Back')]");
    this.closeAndSave = page.locator("//span[@data-qa='close-prepare-start']");
    this.saveEnvelope = page.locator("//span[normalize-space()='Do you want to save the envelope?']");
    this.discardBtn = page.locator("//span[normalize-space()='Discard']");
    this.startSignBtn = page.locator("//span[normalize-space()='Sign']");
    this.canvas = page.locator('div[data-qa="signature-canvas"] canvas:visible').first();
    this.initailCanvas = page.locator("//div[@data-qa='initials-canvas']//canvas").first();
    //Sign
    this.startSign = page.locator("//button[@id='navigate-btn']");
    this.Signtab = page.locator("//div[@class='tab-text']");
    this.initTab = page.locator("//div[@class='tab-text ']");
    this.textTab = page.locator('//input[@id="tab-form-element-93e6e967-eefc-4fdf-a37c-3be616f89562"]');

    //Change Signature
    this.signatureChange = page.locator("//img[@class='tab-complete-image signature-image']")

    // Agreement
    this.AgreementPage = page.locator("//span[normalize-space()='Agreements']");
    this.signButton = page.locator("//button[@aria-label='Sign Complete with Docusign: blank.pdf']");

    //Sign and Finish
    this.signatureTool = page.locator("//button[@id='signHere_btn']//span[contains(text(),'Signature')]");
    this.pageDocument = page.locator("//div[@class='page-tabs']");
    this.initialTool = page.locator("//button[@data-qa='InitialHere']");

    this.resizeSignature = page.locator("//div[@class='freeform-resize-handle']");
    this.stampTool = page.locator("//span[normalize-space()='Stamp']");

    //Stamp Annotation Tool
    this.placedStampAnnotation = page.locator("//div[@class='tab-image-for-stamp']");
    
    this.adoptStamp = page.locator("//div[@id='adopt-stamp-content']");
    this.UploadStamp = page.locator("//button[@id='adopt-stamp-choose-upload-button']");
    this.UploadStampImage = page.locator("//button[@id='adopt-upload-btn']");
    this.existingStamp = page.locator("//div[normalize-space()='Stamp']");
    this.doneBtn = page.locator("//span[normalize-space()='Done']");
    this.TextAnnotation = page.locator("//button[@data-qa='TextMultiline']//span[contains(text(),'Text')]");
    this.textBox1 = page.locator("//textarea[contains(@data-qa,'text-multi-input-tab')]");
    ////textarea[@id='tab-form-element-896c506e-b0dc-4ed7-bdd8-4a0016052a6a']
    this.dateStamp = page.locator("//button[@data-qa='DateSigned']//span[contains(text(),'Date Signed')]");
    this.fullName = page.locator("//button[@data-qa='FullName']//span[contains(text(),'Name')]");

    //Add New Stamp
    this.AddNew = page.locator("//span[@title='Add New']");
    this.CreateNewStamp = page.locator("//button[@id='adopt-stamp-choose-create-button']");
    this.StampText = page.locator("//input[@id='stamp-text']");
    this.StampTextTitle = page.locator("//input[@id='stamp-text-title']");
    this.StampSquare = page.locator("//canvas[@id='stamp-square-canvas']");
    this.StampCircle = page.locator("//canvas[@id='stamp-circle-canvas']");
    this.StampNext = page.locator("//button[@id='adopt-stamp-confirm']");
    this.AdoptNewStamp = page.locator("//button[@id='adopt-stamp-confirm']");

  }
  async OpenDocusign(){
    await this.page.goto("https://account.docusign.com/");
    await expect(this.LoginPage).toBeVisible();
  }

  async signIn(email: string, password: string) {
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill(email);
    await this.emailNext.click();
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
    console.log("Please check your email and enter OTP manually in the browser...");
    await this.page.pause(); // wait for OTP manually
    
    await this.page.waitForURL('https://apps.docusign.com/send/home');
  }

  async verifyRedirect() {
    await expect(this.page).toHaveURL('https://apps.docusign.com/send/home');
    await this.closeIcon.click();
    await this.createSignature.click();
    await expect(this.createSignPopup).toBeVisible();
    await this.selectSignature.click();
    await this.Create.click();
  }

  async clickViewerContainer(){
    await this.createSignature.click();
    await expect(this.createSignPopup).toBeVisible();
    await this.drawBtn.click();
    await this.ViewerContainer.click();

  }
  // async drawSignature() {
  //   const box = await this.canvas.boundingBox();
  //   if (box) {
  //     // Adjust starting baseline
  //     const baseY = box.y + box.height / 2;
  //     let startX = box.x + 20;

  //     // Letter S
  //     await this.page.mouse.move(startX, baseY - 20);
  //     await this.page.mouse.down();
  //     await this.page.mouse.move(startX + 20, baseY - 40);
  //     await this.page.mouse.move(startX + 40, baseY - 20);
  //     await this.page.mouse.move(startX + 20, baseY);
  //     await this.page.mouse.move(startX, baseY + 20);
  //     await this.page.mouse.up();

  //     startX += 60; // space to next letter

  //     // Letter i
  //     await this.page.mouse.move(startX, baseY);
  //     await this.page.mouse.down();
  //     await this.page.mouse.move(startX, baseY - 60);
  //     await this.page.mouse.up();

  //     // dot of i
  //     await this.page.mouse.move(startX, baseY - 40);
  //     await this.page.mouse.down();
  //     await this.page.mouse.move(startX + 1, baseY - 40);
  //     await this.page.mouse.up();

  //     startX += 30;

  //     // Letter g
  //     await this.page.mouse.move(startX, baseY - 10);
  //     await this.page.mouse.down();
  //     await this.page.mouse.move(startX + 20, baseY);
  //     await this.page.mouse.move(startX, baseY + 20);
  //     await this.page.mouse.move(startX + 20, baseY + 30);
  //     await this.page.mouse.up();

  //     startX += 50;

  //     // Letter n
  //     await this.page.mouse.move(startX, baseY + 20);
  //     await this.page.mouse.down();
  //     await this.page.mouse.move(startX, baseY - 20);
  //     await this.page.mouse.move(startX + 20, baseY);
  //     await this.page.mouse.move(startX + 40, baseY - 20);
  //     await this.page.mouse.up();
  //   } else {
  //     throw new Error('Canvas not found for signature');
  //   }
  // }
  async drawSignature() {
  const box = await this.canvas.boundingBox();
  if (box) {
    // Adjust starting baseline
    const baseY = box.y + box.height / 2;
    let startX = box.x + 10; // smaller starting X

    // Helper for smoother strokes
    const smoothMove = async (x: number, y: number) => {
      await this.page.mouse.move(x, y, { steps: 8 });
    };

    // Letter M
    await this.page.mouse.move(startX, baseY);
    await this.page.mouse.down();
    await smoothMove(startX, baseY - 30);
    await smoothMove(startX + 15, baseY);
    await smoothMove(startX + 30, baseY - 30);
    await smoothMove(startX + 30, baseY);
    await this.page.mouse.up();
    startX += 40;

    // Letter U
    await this.page.mouse.move(startX, baseY - 30);
    await this.page.mouse.down();
    await smoothMove(startX, baseY);
    await smoothMove(startX + 30, baseY);
    await smoothMove(startX + 30, baseY - 30);
    await this.page.mouse.up();
    startX += 40;

    // Letter H
    await this.page.mouse.move(startX, baseY);
    await this.page.mouse.down();
    await smoothMove(startX, baseY - 30);
    await this.page.mouse.up();

    await this.page.mouse.move(startX, baseY - 15);
    await this.page.mouse.down();
    await smoothMove(startX + 30, baseY - 15);
    await this.page.mouse.up();

    await this.page.mouse.move(startX + 30, baseY);
    await this.page.mouse.down();
    await smoothMove(startX + 30, baseY - 30);
    await this.page.mouse.up();
    startX += 40;

    // Letter A
    await this.page.mouse.move(startX + 15, baseY - 30);
    await this.page.mouse.down();
    await smoothMove(startX, baseY);
    await smoothMove(startX + 30, baseY);
    await smoothMove(startX + 15, baseY - 30);
    await this.page.mouse.up();

    await this.page.mouse.move(startX + 8, baseY - 15);
    await this.page.mouse.down();
    await smoothMove(startX + 22, baseY - 15);
    await this.page.mouse.up();
    startX += 40;

    // Letter M
    await this.page.mouse.move(startX, baseY);
    await this.page.mouse.down();
    await smoothMove(startX, baseY - 30);
    await smoothMove(startX + 15, baseY);
    await smoothMove(startX + 30, baseY - 30);
    await smoothMove(startX + 30, baseY);
    await this.page.mouse.up();
    startX += 40;

    // Letter M (again)
    await this.page.mouse.move(startX, baseY);
    await this.page.mouse.down();
    await smoothMove(startX, baseY - 30);
    await smoothMove(startX + 15, baseY);
    await smoothMove(startX + 30, baseY - 30);
    await smoothMove(startX + 30, baseY);
    await this.page.mouse.up();
    startX += 40;

    // Letter A
    await this.page.mouse.move(startX + 15, baseY - 30);
    await this.page.mouse.down();
    await smoothMove(startX, baseY);
    await smoothMove(startX + 30, baseY);
    await smoothMove(startX + 15, baseY - 30);
    await this.page.mouse.up();

    await this.page.mouse.move(startX + 8, baseY - 15);
    await this.page.mouse.down();
    await smoothMove(startX + 22, baseY - 15);
    await this.page.mouse.up();
    startX += 40;

    // Letter D
    await this.page.mouse.move(startX, baseY);
    await this.page.mouse.down();
    await smoothMove(startX, baseY - 30);
    await smoothMove(startX + 20, baseY - 25);
    await smoothMove(startX + 20, baseY - 5);
    await smoothMove(startX, baseY);
    await this.page.mouse.up();
  } else {
    throw new Error("Canvas not found for signature");
  }
}
 async drawInitialSign() {
  const box = await this.initailCanvas.boundingBox();
  if (box) {
    // Adjust baseline and starting position
    const baseY = box.y + box.height / 2;
    let startX = box.x + 20;

    // Helper for smoother strokes
    const smoothMove = async (x: number, y: number) => {
      await this.page.mouse.move(x, y, { steps: 8 });
    };

    // ---- Letter M ----
    await this.page.mouse.move(startX, baseY);
    await this.page.mouse.down();
    await smoothMove(startX, baseY - 30);
    await smoothMove(startX + 15, baseY);
    await smoothMove(startX + 30, baseY - 30);
    await smoothMove(startX + 30, baseY);
    await this.page.mouse.up();
    startX += 50; // spacing to next letter

    // ---- Letter A ----
    await this.page.mouse.move(startX + 15, baseY - 30);
    await this.page.mouse.down();
    await smoothMove(startX, baseY);
    await smoothMove(startX + 30, baseY);
    await smoothMove(startX + 15, baseY - 30);
    await this.page.mouse.up();

    // Crossbar of A
    await this.page.mouse.move(startX + 8, baseY - 15);
    await this.page.mouse.down();
    await smoothMove(startX + 22, baseY - 15);
    await this.page.mouse.up();

  } else {
    throw new Error("Initial canvas not found for signature");
  }

  // After drawing click Create
  await this.Create.click();
}

  async SignOrGetSignature(){
    await this.startBtn.click();
    await expect(this.UploadorEnvelope).toBeVisible();
  }

  async openDocument(filePath: string) {
    console.log('Clicking Upload');
    await this.UploadBtn.click();

    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      this.desktopBtn.click()
    ]);

    await fileChooser.setFiles(filePath);
    console.log('PDF uploaded');

  }
  async addOneRecipient(){
    await this.NextBtn.click();
    await this.addRecipient.click();
    await this.RecipientName.fill("Muhammad SQA");
    await this.RecipientEmail.fill('Muhammad.sqa103@gmail.com');

    await this.NextBtn.click();
    await expect(this.SelectRecipient).toBeVisible();
  }

  async addAnnotations(){
    await this.standardFields.click();
    await expect(this.tabPanel).toBeEnabled();

    // Signature
    await this.signature.click();
    
    await this.pageContent.click();
    
    // Text
    await this.textAnnoation.click();
    await this.pageContent.click();
    
    // Initial 
    await this.initailAnnoation.click();
    await this.pageContent.click();

    // Send to Recipient
    await expect(this.SendDocument).toBeVisible();
    await this.cancelBtn.click();

    await this.closeAndSave.click();
    await expect(this.saveEnvelope).toBeVisible();
    await this.discardBtn.click();
    await expect(this.page).toHaveURL("https://apps.docusign.com/send/documents?type=envelopes");

  }
  async Reviewandcomplete(){

    await this.startSignBtn.click();
    await this.startSign.click();
  }
   async fillSignTab() {
    await this.Signtab.click();
  }
  async fillInitialTab() {
    await this.initTab.click();
  }
  async fillTextTab(text: string) {
    await this.textTab.type(text);
  }

  async finishSigning(){
// Still Pending
  }

  async VerifyRirectToAgreement(){
    await expect(this.page).toHaveURL('https://apps.docusign.com/send/home');
    await this.closeIcon.click();
  }
  
  async AddAnnotationTool(){
    await this.AgreementPage.click();
    await this.signButton.click();
    await this.signatureTool.click();
    await this.pageDocument.click({ position: { x: 200, y: 150 } }); 
    await this.initialTool.click();
    await this.pageDocument.click({ position: { x: 400, y: 250 } });
    await this.dateStamp.click();
    await this.pageDocument.click({ position: { x: 400, y: 300 } });
    await this.fullName.click();
    await this.pageDocument.click({ position: { x: 100, y: 310 } });
    // await this.stampTool.click();
    // await this.pageDocument.click({ position: { x: 600, y: 350 } });

  }
  async AddStampAnnotation(){
    await this.placedStampAnnotation.click();
    await this.AddNew.click();
    await this.CreateNewStamp.click();
    await this.StampText.fill("MUHAMMAD");
    await this.StampTextTitle.fill("MA");
    await this.StampSquare.click();
    await this.StampCircle.click();
    await this.StampNext.click();
    await this.AdoptNewStamp.click();
    // await this.existingStamp.click();
    // await this.doneBtn.click();

    //Add text annotation
    await this.TextAnnotation.click();
    await this.pageDocument.click({ position: { x: 600, y: 450 } });
    await this.textBox1.fill('Hello, this is a test annotation');
  }
}
