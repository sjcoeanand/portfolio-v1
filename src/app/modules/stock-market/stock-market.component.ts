import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})

export class StockMarketComponent {
  
  url1: string = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TataMotors.BSE&outputsize=full&apikey=MQCCSAJTAY8EE2EX';
  stockdata:any;
  ngOnInit(): void {
    fetch(this.url1)
    .then(res => res.json())
    .then(resp => { 
      this.stockdata = resp['Time Series (Daily)'];
      console.log("resp stockdata1", resp);
    }); 
}
}
