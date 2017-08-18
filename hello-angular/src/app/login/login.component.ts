import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-login',
  template: `
 <div>
 <input #usernameRef type="text">
 <input #passwordRef type="password">
 <button (click)="myClick(usernameRef.value, passwordRef.value)">Login</button>
 </div>
 `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor()  { }

  ngOnInit() {
  }
  myClick(username,password) {
    console.log('username:' + username + "\n" + "password:" + password);
  }
}
