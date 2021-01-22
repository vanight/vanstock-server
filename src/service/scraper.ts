/* eslint-disable prettier/prettier */
import { launch } from "puppeteer";
import { Injectable } from '@nestjs/common';

@Injectable()
export class Scraper {

  async getCNNFearAndGreedImgUrl(): Promise<string> {
    
    const browser = await launch()
    const page = await browser.newPage()
    
    await page.goto('https://money.cnn.com/data/fear-and-greed/')
    await page.waitForSelector('.cnnBody_Left #needleChart');

    const url:string = await page.evaluate('document.querySelector(".cnnBody_Left #needleChart").getAttribute("style")') as string
    return url.substr(22, 101)
  }
}
