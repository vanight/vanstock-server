import { BitcoinService } from './service/bitcoin.service';
import { CacheModule, Module, CacheInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Scraper } from './service/scraper';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [CacheModule.register({
    ttl: 60, // seconds
    max: 10, // maximum number of items in cache
  })
  ],
  controllers: [AppController],
  providers: [AppService, Scraper, BitcoinService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    }],
})
export class AppModule { }
