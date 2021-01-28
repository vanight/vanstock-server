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
    await page.waitForSelector('div.total___39ZCl');

    const breadth = await page.evaluate('document.querySelector("div.total___39ZCl").innerText') as string
    browser.close();

    return breadth;
  }
}
