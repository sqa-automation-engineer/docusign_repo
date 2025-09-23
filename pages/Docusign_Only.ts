import { Page, Locator, expect } from '@playwright/test';
import * as path from 'path';

export class OnlySigner {
    readonly page: Page;
    readonly addRecipient: Locator;
    readonly onlySingercheck: Locator;
    readonly signBtn: Locator;
    readonly signTab: Locator;
    readonly Fields: Locator;
    readonly docPage1: Locator;
    readonly resizeHandle: Locator;
    readonly signatureWrapper: Locator;

    
    constructor(page: Page) {
    this.page = page;

    this.onlySingercheck = page.locator("//span[@data-qa='sign-and-return-cb-label-text']");
    this.addRecipient = page.locator("//div[@data-qa='add-recipients-slider']");
    this.signBtn = page.locator("//button[@class='olv-button olv-ignore-transform css-w3vr40']");
    this.signTab = page.locator("//button[@id='signHere_btn']");
    this.Fields = page.locator("//h2[normalize-space()='Fields']");
    this.docPage1 = page.locator("//div[@class='page-tabs']");
    this.resizeHandle = page.locator("//div[@class='freeform-resize-handle-wrapper freeform-resize-handle-wrapper-top-left']//div[@class='freeform-resize-handle']");
    this.signatureWrapper = page.locator("//div[@class='freeform-resize-wrapper']");

    }
    async OnlySignerFlow() {
        await this.addRecipient.click();
        await this.onlySingercheck.click();
        await this.signBtn.click();
        await this.page.waitForTimeout(5000);
    }

    async PlaceSignatureAnnotation(){
       for (let i = 0; i < 1; i++) {
      await this.signTab.click();                  // click on signature option
      await this.page.waitForTimeout(1000);        // small wait (optional)
      await this.docPage1.click();                 // click on target doc area
    }    
    }
    // Resize annotation (drag from top-left corner to new position)
    async resizeSignature() {
        const handle = this.resizeHandle;
        const box = await handle.boundingBox();

        if (box) {
        await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await this.page.mouse.down();
        // move to new size (increase by 50px right & down for example)
        await this.page.mouse.move(box.x + 100, box.y + 100);
        await this.page.mouse.up();
        }
    }
    // Shift signature slightly
    async shiftSignature(direction: 'up' | 'down' | 'left' | 'right', distance: number = 20) {
        const box = await this.signatureWrapper.boundingBox();

        if (box) {
        // Start from element center
        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;

        await this.page.mouse.move(startX, startY);
        await this.page.mouse.down();

        // Decide direction
        let targetX = startX;
        let targetY = startY;

        if (direction === 'up') targetY -= distance;
        if (direction === 'down') targetY += distance;
        if (direction === 'left') targetX -= distance;
        if (direction === 'right') targetX += distance;

        await this.page.mouse.move(targetX, targetY, { steps: 10 });
        await this.page.mouse.up();
        }
    }


}