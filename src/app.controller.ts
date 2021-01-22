import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Scraper } from './service/scraper';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly scraper: Scraper,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Get('/cnn-img-url')
  async getCNNFearAndGreadImgUrl(): Promise<string> {
    return await this.scraper.getCNNFearAndGreedImgUrl();
  }
}
