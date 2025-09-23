import { Page, Locator, expect, LocatorScreenshotOptions } from '@playwright/test';
import { strict } from 'assert';
import { url } from 'inspector';

export class SignPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly continueBtn: Locator;
  readonly signInBtn: Locator;
  readonly signDocumentBtn: Locator;
  readonly freeTrail: Locator;
  readonly SignDropDown: Locator;
  readonly signDocumentOnline: Locator;
  readonly start30DaysTrail: Locator;


  constructor(page: Page) {
    this.page = page;
  
    this.emailInput = page.locator("//input[@id='email-field']"); // Update selector as per actual app
    this.continueBtn = page.getByText('Continue');
    this.passwordInput = page.locator("//input[@id='password-field']");
    this.signInBtn = page.locator("//span[text()='Sign in']");
    this.signDocumentBtn = page.locator("//a[@title='Go to Dropbox Sign homepage']");
    this.freeTrail = page.locator("//div[normalize-space()='Free trial']");
    this.SignDropDown = page.locator("//div[@data-trackingid='nav_why_dbx_sign_dropdown']");
    this.signDocumentOnline = page.locator("//div[normalize-space()='Sign documents online']");
    this.start30DaysTrail = page.locator("//a[@id='hero_cta']");

  }

  async gotoSignPage(url: string) {
    await this.page.goto(url);
    
  }

  async signIn(email: string, password: string) {
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill(email);
    await this.continueBtn.click();
    await this.passwordInput.fill(password);
    await this.signInBtn.click();

  }
  async DropboxOpenDocument(){

    await this.signDocumentBtn.click();
    await this.freeTrail.click();
    await this.SignDropDown.click();
    await (this.page).waitForTimeout(5000);
    await this.signDocumentOnline.click();
    await this.start30DaysTrail.click();

    // await expect(this.page).toHaveURL('https://app.hellosign.com/home/index')
  }
  async OpenDocusign(){
      await this.page.goto("https://apps.docusign.com/send/home");

  }
}
