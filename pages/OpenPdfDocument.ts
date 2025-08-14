import { Page, Locator, expect } from '@playwright/test';

export class ValidDocument {
  readonly page: Page;
  readonly openNewDocBtn: Locator;
  readonly canvas: Locator;
  readonly closeBtn: Locator;
  readonly openButton: Locator;
  readonly notificationBox: Locator;
  readonly notificationText: Locator;
  readonly notification: Locator;
  readonly errorTitle: Locator;
  readonly errorDescription: Locator;
  readonly closeButton: Locator;
  readonly passwordInput: Locator;
  readonly errorMessage: Locator;
  readonly unlockBtn: Locator;
  readonly viewPermissionPopup: Locator;
  readonly viewPermissionBtn: Locator;
  readonly securityTab: Locator;
  readonly unlockFileBtn: Locator;
  readonly ownerPasswordInput: Locator;
  readonly documentProtectedPopup: Locator;
  readonly unlockOwnerPassword: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openNewDocBtn = page.locator("//button[contains(text(),'Open new document')]");
    this.canvas = page.locator('canvas');
    this.closeBtn = page.locator("//button[.//div[text()='Close current document']]");
    this.openButton = page.locator("//button[contains(text(),'Open new document')]");
    this.notificationBox = page.locator("//div[@class='fixed max-w-full sm:top-auto sm:left-auto sm:bottom-4 sm:right-4 left-1/2 sm:translate-x-0 -translate-x-1/2 top-4 w-notification border border-graylightmode-200 shadow-probashadow-lg z-1000000 flex gap-4 justify-start rounded-xl p-5 bg-white']");
    this.notificationText = page.locator("//div[contains(@class,'text-lg font-medium text-brand-900')]");
    this.notification = page.locator("//div[contains(@class,'fixed max-w-full')]");
    this.errorTitle = page.getByText("Can not open file");
    this.errorDescription = page.getByText("Unsupported file format. PDF format expected.");
    this.closeButton = page.locator("//div[contains(@class,'fixed max-w-full')]//button[contains(@class,'self-start')]");
    this.passwordInput = page.locator("//div[contains(@class,'w-popup')]//input[@type='password']");
    this.errorMessage = page.locator("//p[@class='mt-2 text-sm text-red-400']");
    this.unlockBtn = page.locator("//button[contains(@type,'submit')]");
    this.viewPermissionPopup = page.locator("//button[normalize-space()='View permissions']");
    this.viewPermissionBtn = page.locator("//button[normalize-space()='View permissions']");
    this.securityTab = page.locator("//h4[normalize-space()='This Document is Protected']");
    this.unlockFileBtn = page.locator("//div[normalize-space()='Unlock file']");
    this.documentProtectedPopup = page.locator("//h5[normalize-space()='This Document is Protected']");
    this.ownerPasswordInput = page.locator("//input[contains(@class,'rounded-lg shadow-probashadow-xs')]");
    this.unlockOwnerPassword = page.locator("");
  }

  async openDocument(filePath: string) {
    console.log('Clicking Open new document...');
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      this.openNewDocBtn.click(),
    ]);
    await fileChooser.setFiles(filePath);
    console.log('PDF uploaded.');

    await expect(this.canvas.first()).toBeVisible({ timeout: 5000 });
    console.log('PDF canvas appeared');

    const canvasCount = await this.canvas.count();
    expect(canvasCount).toBeGreaterThan(0);
    console.log(`${canvasCount} canvas elements rendered`);

    await expect(this.closeBtn).toBeEnabled({ timeout: 1000 });
    console.log('Close current document button is active');
    await this.closeBtn.click();
  }

    async uploadDocument(filePath: string) {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      this.openButton.click(),
    ]);
    await fileChooser.setFiles(filePath);
  }

  async verifyInvalidPdfUI() {
    await expect(this.notificationBox).toBeVisible();
    await expect(this.notificationText).toBeVisible();
    console.log('Invalid PDF document');
    await expect(this.openButton).toBeVisible();
  }
  async VerifyUnsupportedPdfUI(){
    await expect(this.notification).toBeVisible();
    await expect(this.errorTitle).toBeVisible();
    await expect(this.errorDescription).toBeVisible();
    console.log('Unsupported PDF document');

  }
  async closeNotification(){
    console.log('- Close notification popup');
    await this.closeButton.click();
  }
  async verifyOpenNewDocButtonVisible(){
    await this.openNewDocBtn.isVisible();
  }

  async enterPasswordAndUnlock(password: string) {
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);

    await this.unlockBtn.click();
    console.log('Password Protected document is uploaded')
    await this.closeBtn.click();
  }
  async enterWrongPasswordAndUnlock(wrongPassword: string, correctPassword: string) {
    
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(wrongPassword);
    await this.unlockBtn.click();
    await expect(this.errorMessage).toBeVisible();
    await this.passwordInput.fill(correctPassword);
    await this.unlockBtn.click();
    console.log('Password Protected document is uploaded with second attempt')
    await this.closeBtn.click();

  }
  async enterPasswordAndGrantPermission(password: string, ownerPassword: string){

    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password)
    await this.unlockBtn.click();
    await expect(this.viewPermissionPopup).toBeVisible();
    await this.viewPermissionBtn.click();
    await expect(this.securityTab).toBeVisible();
    await this.unlockFileBtn.click();
    await expect(this.documentProtectedPopup).toBeVisible();
    await this.ownerPasswordInput.fill(ownerPassword);




  }


}

