import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  imgUrl:string = "http://placehold.it/400x320";
  name:string;
  constructor() { 
    setInterval(() => {
      this.name = "Tom";
    },3000)
  }

  ngOnInit() {
  }
  doONClick(event:any) {
    console.log(event)
  }
  doOnInput(event:any) {
    // console.log(event.target.value);//Dom的value属性---》会变化
    // console.log(event.target.getAttribute('value'));//html的value属性----》不会变
    this.name = event.target.value;
  }
}
