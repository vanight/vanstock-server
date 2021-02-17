import { Injectable } from '@nestjs/common';
import { coinbase, Ticker } from 'ccxt';

@Injectable()
export class BitcoinService {
    
    public async quote(ticker: string): Promise<Ticker>{
        let cb = new coinbase();
        cb.loadMarkets();
        return (await cb.fetchTicker ('BTC/USD'));
    }
}