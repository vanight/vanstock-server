import { BitcoinService } from './service/bitcoin.service';
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Scraper } from './service/scraper';
import { Ticker } from 'ccxt';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly scraper: Scraper,
    private readonly btService: BitcoinService
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Get('/cnn-img-url')
  async getCNNFearAndGreadImgUrl(): Promise<string> {
    return await this.scraper.getCNNFearAndGreedImgUrl();
  }

  @Get('/breadth')
  async getMarketBreadth(): Promise<string> {
    return await this.scraper.getMarketBreadth();
  }

  @Get('/btc/:id')
  async getBitcoinTicker(@Param() params): Promise<Ticker> {
    return await this.btService.quote(params.id)
  }
}
