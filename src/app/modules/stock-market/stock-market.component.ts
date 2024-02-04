import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})

export class StockMarketComponent {
  
  // url1: string = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TataMotors.BSE&outputsize=full&apikey=MQCCSAJTAY8EE2EX';
  url1: string = '/assets/dataSource/stock-data.json';
  stockdata:any;
  ngOnInit(): void { 
    fetch(this.url1)
    .then(res => res.json())
    .then(res => {
      this.stockdata = Object.entries(res).map(x => {
          let a:any = {}
          let obj:any = x[1];
          a['date'] = x[0]
          a['open'] = obj['1. open']
          a['high'] = obj['2. high']
          a['low'] = obj['3. low']
          a['close'] = obj['4. close']
          a['volume'] = obj['5. volume']
          let b = {...a}
          return b
      })
      console.log("|stockdata 1 ", this.stockdata);
    })
  }
}
