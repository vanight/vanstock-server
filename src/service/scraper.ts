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

    browser.close();

    return url.substr(22, 101)
  }

  async getMarketBreadth(): Promise<string> {
    
    const browser = await launch()
    const page = await browser.newPage()
    

    
    await page.goto('https://breadth.app/breadth')
    await page.waitForSelector('.content___3M2f9 > div > .bizcharts > div > canvas')

    const canvasDataURL = page.evaluate(() => {
     return (document.querySelector(".content___3M2f9 > div > .bizcharts > div > canvas") as HTMLCanvasElement).toDataURL()
    })
    return canvasDataURL;
  }
}
