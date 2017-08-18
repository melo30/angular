import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  //声明一个stockId来接收传进来的值
  private stock:Stock;
  private isPro:boolean;
  private focus:boolean = false;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {//ngOnInit是当组件被创建的时候调用一次
    //在查询参数里面传递数据queryParams,在url中传递参数params

    // //subscribe 订阅
    // this.routeInfo.params.subscribe((params:Params) => this.stockId = params["id"]);
    //snapshot 快照,当一个路由不会路由到本身的时候可以用快照，节约资源，速度更快
    //this.stockId = this.routeInfo.snapshot.params["id"];
    this.routeInfo.data.subscribe((data: {stock:Stock}) => {
      this.stock = data.stock;
    });
    this.isPro = this.routeInfo.snapshot.data[0]["isPro"];
  }
  isFocus () {
    return this.focus;
  }

}

export class Stock {
  constructor (public id:number,public name:string) {
    
  }
}
