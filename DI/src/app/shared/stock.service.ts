import { Injectable } from '@angular/core';
import { LoggerService } from "./logger.service";

@Injectable()//只有声明了@Injectable装饰器的服务才可以在服务的构造函数里面声明其他服务
export class StockService {

  constructor(public logger:LoggerService) { }
  getStock () {
    this.logger.log("getStock方法被调用");
    return new Stock(1,"IBM");
  }
}

export class Stock {
  constructor (public id:number,public name:string) {

  }
}