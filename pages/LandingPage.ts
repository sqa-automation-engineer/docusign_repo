// pages/LandingPage.ts
import { expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class LandingPage {
  private page: Page;

  // Locators
  private logoSection: Locator;
  private reloadBtn: Locator;
  private openFileBtn: Locator;
  private probaLogo: Locator;
  private signYourText: Locator;
  private documentsWithText: Locator;
  private thirdBlockSpan: Locator;
  private primaryButton: Locator;
  private fontBoldText: Locator;
  private updateText: Locator;
  private featureCard: Locator;
  private introIcon: Locator;
  private mainText: Locator;

  // Footer locators
  private footerSection: Locator;
  private footerLogo: Locator;
  private footerSvgPath: Locator;
  private footerHeading: Locator;
  private footerSubheading: Locator;
  private termsLink: Locator;
  private privacyLink: Locator;
  private faqLink: Locator;
  private footerVersion: Locator;

  private viewerURL: string;

  constructor(page: Page) {
    this.page = page;

    this.logoSection = page.locator("div[class='px-4']");
    this.reloadBtn = page.locator("//div[@class='lg:block']//a//*[name()='svg']");
    this.openFileBtn = page.locator("//a[@id='{{ parentcomponentid }}-open-file-button']");
    this.probaLogo = page.locator("//div[@id='bg-logo']//*[name()='svg']");
    this.signYourText = page.locator("//div[@class='lg:block hidden']//span[@class='block'][normalize-space()='Sign your']");
    this.documentsWithText = page.locator("//div[@class='lg:block hidden']//span[@class='block'][normalize-space()='documents with']");
    this.thirdBlockSpan = page.locator("(//span[@class='block'])[3]");
    this.primaryButton = page.locator(".bg-newiconprimary.text-white.p-2.rounded-md");
    this.fontBoldText = page.locator("//span[@class='font-bold']");
    this.updateText = page.locator("//p[contains(text(),'Our biggest update ever has arrived!')]");
    this.featureCard = page.locator("div[class='flex justify-center bg-newmaindarkblue rounded-2xl text-center drop-shadow-xl lg:w-[500px] md:flex-shrink-0 lg:self-start relative z-10']");
    this.introIcon = page.locator("//div[@class='flex justify-center mb-12']//*[name()='svg']");
    this.mainText = page.getByText("Open a document to sign it in your browser");

    this.footerSection = page.locator("//footer[@class='bg-newtextprimary flex flex-col items-center justify-center pt-16 pb-6 relative z-10 px-4']");
    this.footerLogo = page.locator("//a[@class='footer-logo mb-8 block']//*[name()='svg']");
    this.footerSvgPath = page.locator("//*[name()='path' and contains(@d,'M0 455.923')]");
    this.footerHeading = page.locator("//p[@class='text-white text-xl']");
    this.footerSubheading = page.locator("//p[@class='text-lg font-bold mb-6']");
    this.termsLink = page.locator("//a[normalize-space()='Terms of use']");
    this.privacyLink = page.locator("//a[normalize-space()='Privacy policy']");
    this.faqLink = page.locator("//a[normalize-space()='FAQ']");
    this.footerVersion = page.locator("//span[@class='proba-fe-version-and-copyright-js']");

    this.viewerURL = '';
  }

  async goto(): Promise<void> {
    await this.page.goto('');
  }

  async verifyLandingPageUI(): Promise<void> {
    await this.logoSection.waitFor();
    await this.reloadBtn.click();
    await this.openFileBtn.waitFor();

    await expect(this.probaLogo).toBeVisible();
    await expect(this.signYourText).toBeVisible();
    await expect(this.documentsWithText).toBeVisible();
    await expect(this.thirdBlockSpan).toBeVisible();
    await expect(this.primaryButton).toBeVisible();
    await expect(this.fontBoldText).toBeVisible();
    await expect(this.updateText).toBeVisible();
    await expect(this.featureCard).toBeVisible();
    await expect(this.introIcon).toBeVisible();
    await expect(this.mainText).toBeVisible();
  }

  async openViewer(): Promise<void> {
    await this.openFileBtn.click();
    await this.page.waitForURL(this.viewerURL);
  }

  async goBackToLanding(): Promise<void> {
    await this.page.goBack();
    await this.logoSection.waitFor();
  }

  async verifyFooterLinks(): Promise<void> {
    await expect(this.footerSection).toBeVisible();
    await this.footerLogo.click();
    await expect(this.footerSvgPath).toBeVisible();
    await expect(this.footerHeading).toBeVisible();
    await expect(this.footerSubheading).toBeVisible();

    await this.termsLink.click();
    await this.page.waitForURL('https://app.termly.io/policy-viewer/policy.html?policyUUID=b9441573-f830-4940-bb5f-475d02c2b2ae');
    await this.page.goBack();

    await this.privacyLink.click();
    await this.page.waitForURL('https://app.termly.io/policy-viewer/policy.html?policyUUID=16a35d2c-f93d-4f67-ad06-efe470ee301c');
    await this.page.goBack();

    await this.faqLink.click();
    await this.page.waitForURL('https://proba.com/faq');
    await this.page.goBack();

    await expect(this.footerVersion).toBeVisible();
  }
}
