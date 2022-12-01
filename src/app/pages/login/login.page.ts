import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
show: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showPass(){
   this.show ? this.show = false : this.show = true;
  }

}
