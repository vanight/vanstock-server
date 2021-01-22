import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Scraper } from './service/scraper';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Scraper],
})
export class AppModule {}
