import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector:'hero-detail',
    template:`
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
    `
})
export class HeroDetailComponent {
    //然后，通过在hero属性前面加上@Input装饰器，来表明它是一个输入属性。
    @Input() hero : Hero;
}