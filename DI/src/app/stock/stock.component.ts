import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from "../shared/stock.service";
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stock:Stock;
  constructor(public stockService: StockService) { //这里用的是app.moduls.ts中声明的提供器，在app.moduls.ts中声明的全局可用

  }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
