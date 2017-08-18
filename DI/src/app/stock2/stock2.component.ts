import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from "../shared/stock.service";
import { AnotherStockService } from "../shared/another-stock.service";


@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css'],
 
})

export class Stock2Component implements OnInit {

  private stock : Stock;
  constructor(public stockService:StockService) { //提供器声明在组件中（上面的providers），只对声明它的组件以及子组件可见,其它组件不可以注入它.一般还是声明在组件中！！

  }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
